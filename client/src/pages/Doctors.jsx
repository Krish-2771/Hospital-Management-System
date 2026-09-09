import Navbar from "../components/Navbar";
import "./Doctors.css";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      experience: "12+ Years Experience",
      rating: "4.9",
      patients: "2,500+",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Neurologist",
      experience: "10+ Years Experience",
      rating: "4.8",
      patients: "2,100+",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      experience: "8+ Years Experience",
      rating: "4.9",
      patients: "1,800+",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. James Anderson",
      specialty: "Orthopedic Surgeon",
      experience: "15+ Years Experience",
      rating: "4.8",
      patients: "3,200+",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Olivia Martinez",
      specialty: "Dermatologist",
      experience: "9+ Years Experience",
      rating: "4.7",
      patients: "1,600+",
      image:
        "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Daniel Thomas",
      specialty: "General Physician",
      experience: "11+ Years Experience",
      rating: "4.9",
      patients: "2,700+",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="doctors-page">

        {/* =========================
            HERO SECTION
        ========================= */}

        <section className="doctors-hero">
          <div className="doctors-hero-content">

            <div className="doctors-hero-text">
              <p className="doctors-label">
                OUR MEDICAL TEAM
              </p>

              <h1>
                Expert Doctors
                <br />
                For A <span>Healthier You</span>
              </h1>

              <p className="doctors-hero-description">
                Meet our team of highly experienced and compassionate
                medical professionals dedicated to providing you with
                exceptional healthcare.
              </p>

              <div className="hero-actions">
                <button className="hero-primary-btn">
                  Find Your Doctor
                </button>

                <button className="hero-secondary-btn">
                  Book Appointment
                </button>
              </div>

              {/* Statistics */}

              <div className="doctor-stats">

                <div className="stat">
                  <div className="stat-icon">👨‍⚕️</div>

                  <div>
                    <h3>100+</h3>
                    <p>Expert Doctors</p>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-icon">🩺</div>

                  <div>
                    <h3>25+</h3>
                    <p>Specializations</p>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-icon">❤️</div>

                  <div>
                    <h3>50K+</h3>
                    <p>Happy Patients</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="doctors-hero-image">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                alt="CareWell medical team"
              />
            </div>

          </div>
        </section>


        {/* =========================
            SEARCH SECTION
        ========================= */}

        <section className="doctor-search-section">

          <div className="doctor-search">

            <div className="search-input">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search doctor or specialty..."
              />
            </div>

            <select>
              <option>All Specializations</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
              <option>General Medicine</option>
            </select>

            <select>
              <option>All Locations</option>
              <option>Main Hospital</option>
              <option>City Branch</option>
            </select>

            <select>
              <option>Availability</option>
              <option>Available Today</option>
              <option>Available This Week</option>
              <option>Online Consultation</option>
            </select>

            <button className="search-button">
              Search
            </button>

          </div>

        </section>


        {/* =========================
            DOCTORS DIRECTORY
        ========================= */}

        <section className="doctor-list-section">

          <div className="doctor-list-header">

            <div>
              <p className="doctors-label">
                OUR SPECIALISTS
              </p>

              <h2>
                Meet Our <span>Doctors</span>
              </h2>

              <p>
                Find the right specialist for your healthcare needs.
              </p>
            </div>

            <select className="sort-select">
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Most Experienced</option>
            </select>

          </div>


          {/* Doctor Cards */}

          <div className="doctors-container">

            {doctors.map((doctor, index) => (

              <div className="doctor-card" key={index}>

                <div className="doctor-image">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                  <span className="available-badge">
                    ● Available
                  </span>

                </div>

                <div className="doctor-info">

                  <div className="doctor-rating">
                    ⭐ {doctor.rating}
                  </div>

                  <h3>{doctor.name}</h3>

                  <p className="doctor-specialty">
                    {doctor.specialty}
                  </p>

                  <p className="doctor-experience">
                    {doctor.experience}
                  </p>

                  <p className="doctor-patients">
                    👥 {doctor.patients} Patients
                  </p>

                  <div className="doctor-actions">

                    <button className="profile-btn">
                      View Profile
                    </button>

                    <button className="appointment-btn">
                      Book Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =========================
            WHY CHOOSE OUR DOCTORS
        ========================= */}

        <section className="why-doctors">

          <div className="why-doctors-content">

            <div className="why-doctors-image">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80"
                alt="Doctor consulting patient"
              />
            </div>

            <div className="why-doctors-text">

              <p className="doctors-label">
                WHY CAREWELL
              </p>

              <h2>
                Healthcare From
                <br />
                People Who <span>Care</span>
              </h2>

              <p>
                At CareWell Hospital, our doctors combine experience,
                advanced technology, and compassionate care to give
                every patient the attention they deserve.
              </p>

              <div className="why-list">

                <div className="why-item">
                  <span>✓</span>
                  <div>
                    <h4>Experienced Specialists</h4>
                    <p>
                      Highly qualified doctors across multiple
                      medical specialties.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <span>✓</span>
                  <div>
                    <h4>Patient-Centered Care</h4>
                    <p>
                      Personalized treatment plans designed around
                      your individual needs.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <span>✓</span>
                  <div>
                    <h4>Modern Medical Technology</h4>
                    <p>
                      Advanced equipment for accurate diagnosis
                      and effective treatment.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            TESTIMONIALS
        ========================= */}

        <section className="testimonials">

          <div className="testimonials-header">

            <p className="doctors-label">
              PATIENT STORIES
            </p>

            <h2>
              What Our Patients <span>Say</span>
            </h2>

            <p>
              Thousands of patients trust CareWell Hospital for
              their healthcare needs.
            </p>

          </div>

          <div className="testimonial-container">

            <div className="testimonial-card">

              <div className="testimonial-stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p>
                "The doctors at CareWell were incredibly professional
                and caring. I felt comfortable throughout my treatment."
              </p>

              <div className="patient">
                <div className="patient-avatar">
                  R
                </div>

                <div>
                  <h4>Rahul Sharma</h4>
                  <span>Patient</span>
                </div>
              </div>

            </div>


            <div className="testimonial-card">

              <div className="testimonial-stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p>
                "Booking an appointment was simple and the doctor
                took the time to explain everything clearly."
              </p>

              <div className="patient">
                <div className="patient-avatar">
                  A
                </div>

                <div>
                  <h4>Ananya Patel</h4>
                  <span>Patient</span>
                </div>
              </div>

            </div>


            <div className="testimonial-card">

              <div className="testimonial-stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p>
                "Excellent healthcare service and very friendly staff.
                I would definitely recommend CareWell Hospital."
              </p>

              <div className="patient">
                <div className="patient-avatar">
                  V
                </div>

                <div>
                  <h4>Vikram Mehta</h4>
                  <span>Patient</span>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            APPOINTMENT CTA
        ========================= */}

        <section className="doctor-cta">

          <div className="doctor-cta-content">

            <div>
              <p>NEED MEDICAL CARE?</p>

              <h2>
                Find The Right Doctor
                <br />
                For You
              </h2>

              <span>
                Take the first step towards better health today.
              </span>
            </div>

            <div className="cta-buttons">

              <button className="cta-primary">
                Book Appointment
              </button>

              <button className="cta-secondary">
                Contact Us
              </button>

            </div>

          </div>

        </section>


        {/* =========================
            FOOTER
        ========================= */}

        <footer className="doctors-footer">

          <div className="footer-container">

            <div className="footer-brand">

              <div className="footer-logo">
                <div className="footer-logo-icon">
                  ✚
                </div>

                <div>
                  <h2>CareWell</h2>
                  <span>HOSPITAL</span>
                </div>
              </div>

              <p>
                Compassionate healthcare powered by experienced
                professionals and modern medical technology.
              </p>

            </div>


            <div className="footer-column">

              <h3>Quick Links</h3>

              <a href="/">Home</a>
              <a href="/doctors">Doctors</a>
              <a href="/services">Services</a>
              <a href="/about">About Us</a>

            </div>


            <div className="footer-column">

              <h3>Patient Care</h3>

              <a href="/login">Patient Login</a>
              <a href="/register">Register</a>
              <a href="/appointments">Appointments</a>
              <a href="/contact">Contact Us</a>

            </div>


            <div className="footer-column">

              <h3>Contact</h3>

              <p>📍 123 Health Avenue</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ info@carewellhospital.com</p>
              <p>🕐 Open 24/7</p>

            </div>

          </div>

          <div className="footer-bottom">
            © 2026 CareWell Hospital. All rights reserved.
          </div>

        </footer>

      </main>
    </>
  );
}

export default Doctors;