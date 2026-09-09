import Navbar from "../components/Navbar";
import "./Services.css";

function Services() {
  const services = [
    ["🩺", "General Medicine", "Comprehensive care for all your health needs."],
    ["💓", "Cardiology", "Advanced heart care for a healthier life."],
    ["🦴", "Orthopedics", "Expert treatment for bones, joints, and muscles."],
    ["👶", "Pediatrics", "Specialized care for your little ones."],
    ["♀", "Gynecology", "Complete women's healthcare services."],
    ["✨", "Dermatology", "Expert care for healthy and glowing skin."],
    ["🧠", "Neurology", "Advanced treatment for brain and nervous system disorders."],
    ["🎗️", "Oncology", "Compassionate cancer care and support."],
    ["🫘", "Urology", "Specialized care for urinary tract health."],
    ["👂", "ENT", "Expert treatment for ear, nose, and throat conditions."],
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span>OUR SERVICES</span>

          <h1>
            Comprehensive Care for a Healthier Tomorrow
          </h1>

          <p>
            From preventive care to specialized treatment, we offer a wide
            range of medical services to meet all your healthcare needs.
          </p>

          <button>Book an Appointment →</button>
        </div>

        <div className="services-hero-image">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
            alt="Doctor caring for patient"
          />
        </div>
      </section>

      {/* Medical Services */}
      <section className="medical-services">
        <div className="section-heading">
          <span>OUR MEDICAL SERVICES</span>
          <h2>Care for Every Stage of Life</h2>
          <p>
            We provide a full spectrum of healthcare services, delivered by
            experienced professionals using advanced technology.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service[0]}</div>

              <h3>{service[1]}</h3>

              <p>{service[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency */}
      <section className="emergency-section">
        <div className="emergency-image">
          <img
            src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80"
            alt="Emergency care"
          />
        </div>

        <div className="emergency-content">
          <span>24/7 EMERGENCY CARE</span>

          <h2>Always Here When You Need Us</h2>

          <p>
            Our emergency team is available 24/7 to provide immediate and
            life-saving care. We are equipped with advanced facilities to
            handle critical emergencies.
          </p>

          <button>Emergency Services →</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-features">
        <div className="section-heading">
          <span>WHY CHOOSE OUR SERVICES</span>
          <h2>Your Health, Our Commitment</h2>
          <p>
            We go beyond treatment to provide a complete care experience.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">👨‍⚕️</div>
            <h3>Experienced Specialists</h3>
            <p>Highly qualified and caring medical professionals.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">⚙️</div>
            <h3>Advanced Technology</h3>
            <p>Latest equipment for accurate diagnosis and treatment.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Patient-Centered Approach</h3>
            <p>Your comfort and well-being are our priority.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">🕐</div>
            <h3>Comprehensive Care</h3>
            <p>From prevention to treatment and follow-up.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div>
          <h2>Let's Take the Next Step Towards a Healthier You</h2>

          <p>
            Book an appointment today and experience compassionate,
            world-class healthcare services.
          </p>

          <button>Book an Appointment →</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80"
          alt="Healthcare professional"
        />
      </section>

      {/* Footer */}
      <footer className="services-footer">
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
          <p>📍 123 Health Street, New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@carewellhospital.com</p>
        </div>
      </footer>

      <div className="services-copyright">
        © 2026 CareWell Hospital. All rights reserved.
      </div>
    </>
  );
}

export default Services;