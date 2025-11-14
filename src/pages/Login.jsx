import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../store/thunk/authThunk";
import "../css/pages/login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(credentials));
    if (loginUser.fulfilled.match(result)) navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
          />
          <p className="forgot" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </p>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="error-text">{error}</p>}
        </form>

        <p className="create-account">
          Don't have an account?
          <span onClick={() => navigate("/register")}> Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
