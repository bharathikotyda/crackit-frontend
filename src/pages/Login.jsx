import { useState } from "react";
import { loginUser } from "../services/authService";
import "./../styles/Auth.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      // Save token
      localStorage.setItem("token", data.token);

      alert("Login Successful 🚀");

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>🔐 Welcome Back</h1>

        <p>
          Login and continue your learning
          journey.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className="auth-link">
          Don't have an account?
          <a href="/register"> Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;