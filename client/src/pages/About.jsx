import Navbar from "../components/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT US</span>
          <h1>Compassionate Care.<br />Better Health.</h1>
          <p>
            At CareWell Hospital, we believe that healthcare is not just
            about treatment — it's about people. We are committed to
            providing high-quality, patient-centered care with compassion,
            innovation, and excellence.
          </p>

          <button>Our Story →</button>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"
            alt="CareWell Hospital"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
            alt="Doctor caring for patient"
          />
        </div>

        <div className="story-content">
          <span>WHO WE ARE</span>
          <h2>Our Journey, Our Purpose</h2>

          <p>
            CareWell Hospital was founded with a simple yet powerful vision —
            to make quality healthcare accessible to everyone. Over the years,
            we have grown into a trusted healthcare institution, known for
            medical excellence, modern technology, and compassionate care.
          </p>

          <div className="mission-vision">
            <div className="info-box">
              <div className="info-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide affordable, high-quality healthcare with
                compassion and integrity.
              </p>
            </div>

            <div className="info-box">
              <div className="info-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be a leading healthcare provider, creating healthier
                communities for a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="section-heading">
          <span>WHY CHOOSE CAREWELL</span>
          <h2>A Healthier Tomorrow, Together</h2>
          <p>
            We go beyond treatment to provide a complete care experience
            for every patient.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">👨‍⚕️</div>
            <h3>Experienced Doctors</h3>
            <p>
              Our team of skilled and caring doctors are experts in their
              fields.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚙️</div>
            <h3>Advanced Technology</h3>
            <p>
              We use the latest medical technology for accurate diagnosis
              and treatment.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🕐</div>
            <h3>24/7 Emergency Care</h3>
            <p>
              We are always ready to serve you, any time, any day.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">❤️</div>
            <h3>Patient-Centered Care</h3>
            <p>
              Your health, comfort, and well-being are always our top
              priority.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="section-heading">
          <span>OUR VALUES</span>
          <h2>What Drives Us</h2>
          <p>Our values guide everything we do and shape the care we provide.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div>❤️</div>
            <h3>Compassion</h3>
            <p>We care for every patient with kindness and respect.</p>
          </div>

          <div className="value-card">
            <div>⭐</div>
            <h3>Excellence</h3>
            <p>We strive for the highest standards in healthcare.</p>
          </div>

          <div className="value-card">
            <div>🛡️</div>
            <h3>Integrity</h3>
            <p>We are honest, ethical, and transparent in all we do.</p>
          </div>

          <div className="value-card">
            <div>💡</div>
            <h3>Innovation</h3>
            <p>We embrace new ideas for a healthier future.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats">
        <div>
          <h2>25+</h2>
          <p>Years of Experience</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Expert Doctors</p>
        </div>

        <div>
          <h2>50K+</h2>
          <p>Happy Patients</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Emergency Care</p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <span>YOUR HEALTH IS OUR PRIORITY</span>
          <h2>Let's Build a Healthier Tomorrow</h2>
          <p>
            Whether you need expert advice, a consultation, or immediate
            care — we are here for you.
          </p>

          <div className="cta-buttons">
            <button>Book an Appointment →</button>
            <button className="outline-btn">Find a Doctor</button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
          alt="Doctor"
        />
      </section>

      {/* Footer */}
      <footer className="about-footer">
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

      <div className="copyright">
        © 2026 CareWell Hospital. All rights reserved.
      </div>
    </>
  );
}

export default About;