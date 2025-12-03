import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Register from "./pages/Register";
import NewPassword from "./pages/NewPassword";
import Forgetpassword from "./pages/ForgetPassword";
// import Navbar from "./pages/Navbar";
// import Sidebar from "./pages/Sidebar";
import Verification from "./pages/Verification.jsx";
import Location from "./pages/Location.jsx";
import Form from "./pages/Form.jsx";
import UserProfile from "./pages/userprofile.jsx";
import Credits from "./pages/credits.jsx";
import Logs from "./pages/Logs.jsx";
import Profile from "./pages/Profile.jsx";
import Support from "./pages/Support";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/navbar" element={<Navbar />} />
        <Route path="/sidebar" element={<Sidebar />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/login"
            element={
              // <PublicRoute>
              <Login />
              // </PublicRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/register"
            element={
              // <ProtectedRoute>
              <Register />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/setpassword"
            element={
              // <ProtectedRoute>
              <NewPassword />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/home"
            element={
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute>
            }
          />
          <Route path="/userprofile" element={<UserProfile />}></Route>
          <Route
            path="/forgetpassword"
            element={
              // <ProtectedRoute>
              <Forgetpassword />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/verification"
            element={
              //  <ProtectedRoute>
              <Verification />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/location"
            element={
              //  <ProtectedRoute>
              <Location />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/form"
            element={
              //  <ProtectedRoute>
              <Form />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/credits"
            element={
              //  <ProtectedRoute>
              <Credits />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/logs"
            element={
              //  <ProtectedRoute>
              <Logs />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              //  <ProtectedRoute>
              <Profile />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              //  <ProtectedRoute>
              <Support />
              // </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
