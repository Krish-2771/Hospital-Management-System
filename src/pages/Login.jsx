import Navbar from "../components/Navbar";
import "./Auth.css";

function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">

          <h1>Login</h1>

          <p>Welcome back!</p>

          <form>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="auth-link">
            Don't have an account?{" "}
            <a href="/register">Register</a>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;