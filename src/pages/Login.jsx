import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("Patient");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <main className="cw-login-page">

        {/* HERO */}
        <section className="cw-login-hero">

          <div className="cw-login-layout">

            {/* LEFT SIDE */}
            <div className="cw-welcome-panel">

              <div className="cw-welcome-content">

                <span className="cw-welcome-label">
                  WELCOME BACK
                </span>

                <h1>
                  Good Health
                  <br />
                  Leads to a
                  <br />
                  <span>Brighter Tomorrow</span>
                </h1>

                <p className="cw-welcome-text">
                  Login to your account and continue your healthcare
                  journey with CareWell Hospital.
                </p>

                <div className="cw-feature-list">

                  <div className="cw-feature">
                    <div className="cw-feature-icon">👥</div>

                    <div>
                      <h3>Trusted Experts</h3>
                      <p>Care from experienced doctors</p>
                    </div>
                  </div>

                  <div className="cw-feature">
                    <div className="cw-feature-icon">🛡️</div>

                    <div>
                      <h3>Safe & Secure</h3>
                      <p>Your personal data is protected</p>
                    </div>
                  </div>

                  <div className="cw-feature">
                    <div className="cw-feature-icon">❤️</div>

                    <div>
                      <h3>Better Lives</h3>
                      <p>Because your health matters</p>
                    </div>
                  </div>

                </div>

                <div className="cw-health-quote">
                  <span>“</span>

                  <div>
                    <p>
                      Healthcare is not just a service,
                      <br />
                      it's a commitment to a brighter tomorrow.
                    </p>

                    <small>— CareWell Hospital</small>
                  </div>
                </div>

              </div>

              <div className="cw-doctor-image">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=90"
                  alt="CareWell Doctor"
                />
              </div>

            </div>

            {/* LOGIN CARD */}
            <div className="cw-login-card">

              {/* LOGO */}
              <div className="cw-login-brand">

                <div className="cw-brand-cross">
                  ✚
                </div>

                <h2>CareWell</h2>

                <span>HOSPITAL</span>

              </div>

              <h1>Welcome Back</h1>

              <p className="cw-login-subtitle">
                Login to continue to your account
              </p>

              {/* ROLE BUTTONS */}
              <div className="cw-role-buttons">

                <button
                  type="button"
                  className={
                    role === "Patient"
                      ? "cw-role-active"
                      : ""
                  }
                  onClick={() => setRole("Patient")}
                >
                  <span>👤</span>
                  Patient
                </button>

                <button
                  type="button"
                  className={
                    role === "Doctor"
                      ? "cw-role-active"
                      : ""
                  }
                  onClick={() => setRole("Doctor")}
                >
                  <span>🩺</span>
                  Doctor
                </button>

                <button
                  type="button"
                  className={
                    role === "Admin"
                      ? "cw-role-active"
                      : ""
                  }
                  onClick={() => setRole("Admin")}
                >
                  <span>🛡️</span>
                  Admin
                </button>

              </div>

              {/* FORM */}
              <form className="cw-login-form">

                {/* EMAIL */}
                <div className="cw-form-group">

                  <label>Email Address</label>

                  <div className="cw-input">

                    <span>✉</span>

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />

                  </div>

                </div>

                {/* PASSWORD */}
                <div className="cw-form-group">

                  <label>Password</label>

                  <div className="cw-input">

                    <span>🔒</span>

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      required
                    />

                    <button
                      type="button"
                      className="cw-password-button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? "🙈" : "👁"}
                    </button>

                  </div>

                </div>

                {/* OPTIONS */}
                <div className="cw-form-options">

                  <label>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>

                  <a href="#">
                    Forgot password?
                  </a>

                </div>

                {/* LOGIN */}
                <button
                  type="submit"
                  className="cw-login-button"
                >
                  Login
                  <span>→</span>
                </button>

              </form>

              {/* DIVIDER */}
              <div className="cw-divider">

                <span></span>

                <p>OR CONTINUE WITH</p>

                <span></span>

              </div>

              {/* SOCIAL */}
              <div className="cw-social-buttons">

                <button type="button">
                  <strong>G</strong>
                  Google
                </button>

                <button type="button">
                  <strong>●</strong>
                  Apple
                </button>

                <button type="button">
                  <strong>▦</strong>
                  Microsoft
                </button>

              </div>

              {/* REGISTER */}
              <div className="cw-register">
                Don't have an account?
                <Link to="/register">
                  {" "}Register here
                </Link>
              </div>

            </div>

          </div>

        </section>

        {/* BENEFITS */}
        <section className="cw-benefits">

          <div className="cw-benefit">
            <div>📅</div>
            <section>
              <h3>Book Appointments</h3>
              <p>Schedule your visits easily.</p>
            </section>
          </div>

          <div className="cw-benefit">
            <div>📄</div>
            <section>
              <h3>Medical Records</h3>
              <p>Access your health history anytime.</p>
            </section>
          </div>

          <div className="cw-benefit">
            <div>💬</div>
            <section>
              <h3>Consult Doctors</h3>
              <p>Connect with healthcare experts.</p>
            </section>
          </div>

          <div className="cw-benefit">
            <div>❤️</div>
            <section>
              <h3>Manage Your Health</h3>
              <p>Take control of your well-being.</p>
            </section>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="cw-footer">

          <div>
            <div className="cw-footer-brand">
              <span>✚</span>

              <div>
                <h2>CareWell</h2>
                <small>HOSPITAL</small>
              </div>
            </div>

            <p>
              Compassionate care. Better health.
              <br />
              Your trusted partner in healthcare.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h3>Our Services</h3>

            <p>General Medicine</p>
            <p>Cardiology</p>
            <p>Orthopedics</p>
            <p>Pediatrics</p>
            <p>Emergency Care</p>
          </div>

          <div>
            <h3>Contact Us</h3>

            <p>📍 123 Health Street, New Delhi</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@carewellhospital.com</p>
          </div>

        </footer>

        <div className="cw-copyright">
          © 2026 CareWell Hospital. All rights reserved.
        </div>

      </main>
    </>
  );
}

export default Login;