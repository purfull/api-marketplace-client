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
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });

    let errors = { ...formErrors };

    if (name === "email") {
      if (!value) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value))
        errors.email = "Enter a valid email";
      else delete errors.email;
    }

    if (name === "password") {
      if (!value) errors.password = "Password is required";
      else if (value.length < 6)
        errors.password = "Password must be at least 6 characters";
      else delete errors.password;
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent login if validation errors exist
    if (Object.keys(formErrors).length > 0) return;

    const result = await dispatch(loginUser(credentials));
    if (loginUser.fulfilled.match(result)) navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {formErrors.email && (
            <span className="input-error">{formErrors.email}</span>
          )}

          <input
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
          />
          {formErrors.password && (
            <span className="input-error">{formErrors.password}</span>
          )}

          <p className="forgot" onClick={() => navigate("/forgotpassword")}>
            Forgot Password?
          </p>

          <button
            type="submit"
            disabled={loading || Object.keys(formErrors).length > 0}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
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
