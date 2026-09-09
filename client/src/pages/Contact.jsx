import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>

          <h1>We're Here for You</h1>

          <p>
            Have a question, need assistance, or want to book an appointment?
            Our team is always ready to help you. Your health and well-being
            are our top priority.
          </p>

          <div className="contact-highlights">
            <div>
              <strong>💬</strong>
              <span>Quick<br />Response</span>
            </div>

            <div>
              <strong>🛡️</strong>
              <span>Trusted<br />Support</span>
            </div>

            <div>
              <strong>👥</strong>
              <span>Patient-First<br />Approach</span>
            </div>
          </div>
        </div>

        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=90"
            alt="Professional doctor"
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="contact-info-card">
          <div className="contact-icon">📍</div>
          <div>
            <h3>Our Location</h3>
            <p>123 Health Street,<br />New Delhi, India - 110001</p>
            <a href="#location">Get Directions →</a>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">📞</div>
          <div>
            <h3>Call Us</h3>
            <p>+91 98765 43210<br />+91 11 2345 6789</p>
            <a href="tel:+919876543210">Call Now →</a>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">✉️</div>
          <div>
            <h3>Email Us</h3>
            <p>info@carewellhospital.com<br />support@carewellhospital.com</p>
            <a href="mailto:info@carewellhospital.com">Send Email →</a>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">🕐</div>
          <div>
            <h3>Working Hours</h3>
            <p>Mon - Sat: 8:00 AM - 8:00 PM<br />Sunday: 9:00 AM - 5:00 PM</p>
            <strong className="emergency-text">🔴 24/7 Emergency Care</strong>
          </div>
        </div>
      </section>

      {/* Message + Facility */}
      <section className="contact-main">
        <div className="contact-form-box">
          <span>SEND US A MESSAGE</span>

          <h2>We'd Love to Hear from You</h2>

          <p>
            Fill out the form below and our team will get back to you as soon
            as possible.
          </p>

          <form>
            <div className="form-row">
              <div>
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              <div>
                <label>Subject</label>
                <select>
                  <option>Select a subject</option>
                  <option>Appointment</option>
                  <option>General Enquiry</option>
                  <option>Doctor Information</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>

            <label>Message *</label>

            <textarea
              rows="5"
              placeholder="Write your message here..."
            ></textarea>

            <button type="submit">➤ Send Message</button>
          </form>
        </div>

        <div className="contact-side">
          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=90"
              alt="Modern hospital building"
            />

            <div className="facility-overlay">
              <h2>Visit CareWell</h2>
              <p>
                Experience world-class healthcare in our modern facility.
              </p>

              <button>▶ Watch Facility Tour</button>
            </div>
          </div>

          <div className="location-card" id="location">
            <div className="fake-map">
              <div className="map-pin">📍</div>
              <div className="map-label">CareWell Hospital</div>
            </div>

            <h2>Find Us Here</h2>
            <p>123 Health Street, New Delhi, India - 110001</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-content">
          <span>FAQ</span>
          <h2>Quick Answers</h2>
          <p>Here are some common questions.</p>

          <details>
            <summary>How can I book an appointment?</summary>
            <p>
              You can book an appointment online or contact our hospital
              directly.
            </p>
          </details>

          <details>
            <summary>Do you have emergency services?</summary>
            <p>
              Yes. Our emergency department operates 24 hours a day,
              7 days a week.
            </p>
          </details>

          <details>
            <summary>What are your visiting hours?</summary>
            <p>
              Visiting hours are generally from 8:00 AM to 8:00 PM.
            </p>
          </details>

          <details>
            <summary>How can I reach the hospital?</summary>
            <p>
              Our hospital is located at 123 Health Street, New Delhi.
            </p>
          </details>
        </div>

        <div className="patient-voice">
          <span>PATIENT VOICES</span>
          <h2>What Our Patients Say</h2>

          <div className="testimonial">
            <div className="quote">"</div>

            <p>
              The staff at CareWell Hospital were incredibly supportive and
              caring. The facilities are excellent and the doctors are truly
              experts in their field.
            </p>

            <div className="patient">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                alt="Patient"
              />

              <div>
                <strong>Priya Sharma</strong>
                <small>Patient</small>
              </div>

              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="ambulance-image">
          <img
            src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=900&q=90"
            alt="Emergency ambulance"
          />
        </div>

        <div className="emergency-content">
          <span>24/7 EMERGENCY CARE</span>

          <h2>We're Always Ready</h2>

          <p>
            Our emergency team is available around the clock to provide
            immediate and life-saving care.
          </p>
        </div>

        <a href="tel:112" className="emergency-button">
          📞 Call Emergency Now
        </a>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div>
          <h2>CareWell</h2>
          <p>Compassionate care. Better health.</p>
          <p>Your trusted partner in healthcare.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Doctors</p>
          <p>Services</p>
          <p>Contact</p>
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

      <div className="contact-copyright">
        © 2026 CareWell Hospital. All rights reserved.
      </div>
    </>
  );
}

export default Contact;