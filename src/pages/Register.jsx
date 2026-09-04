import Navbar from "../components/Navbar";
import "./Auth.css";

function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">

        <div className="auth-card">

          <h1>Create Account</h1>

          <p>Register to get started</p>

          <form>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

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
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit">
              Register
            </button>

          </form>

          <p className="auth-link">
            Already have an account?{" "}
            <a href="/login">Login</a>
          </p>

        </div>

      </div>
    </>
  );
}

export default Register;