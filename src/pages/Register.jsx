import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Register.css";

function Register() {
  const [role, setRole] = useState("Patient");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Navbar />

      <main className="cw-register-page">

        {/* =========================
            HERO
        ========================== */}
        <section className="cw-register-hero">

          <div className="cw-register-layout">

            {/* LEFT SIDE */}
            <div className="cw-register-welcome">

              <div className="cw-register-content">

                <span className="cw-register-label">
                  JOIN CAREWELL
                </span>

                <h1>
                  Your Health
                  <br />
                  Journey Starts
                  <br />
                  <span>Here</span>
                </h1>

                <p className="cw-register-description">
                  Create your account and take the first step towards
                  better health with CareWell Hospital.
                  Quick, easy and secure registration.
                </p>

                {/* FEATURES */}
                <div className="cw-register-features">

                  <div className="cw-register-feature">
                    <div className="cw-register-feature-icon">
                      👥
                    </div>

                    <div>
                      <h3>Trusted Healthcare</h3>
                      <p>Access to experienced doctors</p>
                    </div>
                  </div>

                  <div className="cw-register-feature">
                    <div className="cw-register-feature-icon">
                      🛡️
                    </div>

                    <div>
                      <h3>Safe & Secure</h3>
                      <p>Your data is always protected</p>
                    </div>
                  </div>

                  <div className="cw-register-feature">
                    <div className="cw-register-feature-icon">
                      ❤️
                    </div>

                    <div>
                      <h3>Personalized Care</h3>
                      <p>Better health for a brighter tomorrow</p>
                    </div>
                  </div>

                </div>

                {/* QUOTE */}
                <div className="cw-register-quote">

                  <span>“</span>

                  <div>
                    <p>
                      A healthier tomorrow begins
                      <br />
                      with a simple step today.
                    </p>

                    <small>— CareWell Hospital</small>
                  </div>

                </div>

              </div>

              {/* DOCTOR IMAGE */}
              <div className="cw-register-doctor">

                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=90"
                  alt="CareWell Doctor"
                />

              </div>

            </div>

            {/* =========================
                REGISTER CARD
            ========================== */}
            <div className="cw-register-card">

              {/* BRAND */}
              <div className="cw-register-brand">

                <div className="cw-register-cross">
                  ✚
                </div>

                <h2>CareWell</h2>

                <span>HOSPITAL</span>

              </div>

              <h1>Create Your Account</h1>

              <p className="cw-register-subtitle">
                Join us and be a part of a healthier tomorrow
              </p>

              {/* ROLE */}
              <div className="cw-register-roles">

                <button
                  type="button"
                  className={
                    role === "Patient"
                      ? "active"
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
                      ? "active"
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
                      ? "active"
                      : ""
                  }
                  onClick={() => setRole("Admin")}
                >
                  <span>🛡️</span>
                  Admin
                </button>

              </div>

              {/* FORM */}
              <form className="cw-register-form">

                {/* ROW 1 */}
                <div className="cw-form-row">

                  <div className="cw-register-group">

                    <label>Full Name</label>

                    <div className="cw-register-input">
                      <span>👤</span>

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                  </div>

                  <div className="cw-register-group">

                    <label>Email Address</label>

                    <div className="cw-register-input">
                      <span>✉</span>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                  </div>

                </div>

                {/* ROW 2 */}
                <div className="cw-form-row">

                  <div className="cw-register-group">

                    <label>Phone Number</label>

                    <div className="cw-register-input">
                      <span>📱</span>

                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                  </div>

                  <div className="cw-register-group">

                    <label>Date of Birth</label>

                    <div className="cw-register-input">
                      <span>📅</span>

                      <input
                        type="date"
                        required
                      />
                    </div>

                  </div>

                </div>

                {/* ROW 3 */}
                <div className="cw-form-row">

                  <div className="cw-register-group">

                    <label>Password</label>

                    <div className="cw-register-input">

                      <span>🔒</span>

                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Create a password"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword ? "🙈" : "👁"}
                      </button>

                    </div>

                  </div>

                  <div className="cw-register-group">

                    <label>Confirm Password</label>

                    <div className="cw-register-input">

                      <span>🔒</span>

                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Confirm your password"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                      >
                        {showConfirmPassword ? "🙈" : "👁"}
                      </button>

                    </div>

                  </div>

                </div>

                {/* TERMS */}
                <label className="cw-terms">

                  <input
                    type="checkbox"
                    required
                  />

                  <span>
                    I agree to the{" "}
                    <a href="#">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#">
                      Privacy Policy
                    </a>
                  </span>

                </label>

                {/* CREATE ACCOUNT */}
                <button
                  type="submit"
                  className="cw-create-account"
                >
                  Create Account
                  <span>→</span>
                </button>

              </form>

              {/* DIVIDER */}
              <div className="cw-register-divider">

                <span></span>

                <p>OR SIGN UP WITH</p>

                <span></span>

              </div>

              {/* SOCIAL */}
              <div className="cw-register-social">

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

              {/* LOGIN */}
              <div className="cw-login-link">

                Already have an account?

                <Link to="/login">
                  {" "}Login here
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            BENEFITS
        ========================== */}
        <section className="cw-register-benefits">

          <div className="cw-register-benefit">

            <div>📅</div>

            <section>
              <h3>Easy Registration</h3>
              <p>Get started in just a few minutes</p>
            </section>

          </div>

          <div className="cw-register-benefit">

            <div>📄</div>

            <section>
              <h3>Access All Services</h3>
              <p>Book appointments and view records</p>
            </section>

          </div>

          <div className="cw-register-benefit">

            <div>💬</div>

            <section>
              <h3>Expert Support</h3>
              <p>Our team is always here to help</p>
            </section>

          </div>

          <div className="cw-register-benefit">

            <div>❤️</div>

            <section>
              <h3>A Healthier You</h3>
              <p>Join us for a better tomorrow</p>
            </section>

          </div>

        </section>

        {/* =========================
            FOOTER
        ========================== */}
        <footer className="cw-register-footer">

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

        <div className="cw-register-copyright">
          © 2026 CareWell Hospital. All rights reserved.
        </div>

      </main>
    </>
  );
}

export default Register;