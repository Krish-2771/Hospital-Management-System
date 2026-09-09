import PatientLayout from "./PatientLayout";
import "./PatientDoctors.css";

function PatientDoctors() {
  const doctors = [
    {
      initials: "SW",
      name: "Dr. Sarah Wilson",
      specialty: "General Physician",
      hospital: "CareWell Hospital",
      experience: "12 Years Experience",
      patients: "2,400+ Patients",
      nextAppointment: "07 Sep 2026",
      status: "Available",
    },
    {
      initials: "MB",
      name: "Dr. Michael Brown",
      specialty: "Cardiologist",
      hospital: "CareWell Hospital",
      experience: "15 Years Experience",
      patients: "3,100+ Patients",
      nextAppointment: "14 Sep 2026",
      status: "Available",
    },
    {
      initials: "EC",
      name: "Dr. Emily Carter",
      specialty: "Dermatologist",
      hospital: "SkinCare Clinic",
      experience: "10 Years Experience",
      patients: "1,800+ Patients",
      nextAppointment: "22 Aug 2026",
      status: "Offline",
    },
    {
      initials: "JD",
      name: "Dr. James Davis",
      specialty: "Orthopedic Specialist",
      hospital: "City Health Center",
      experience: "14 Years Experience",
      patients: "2,700+ Patients",
      nextAppointment: "05 Aug 2026",
      status: "Available",
    },
    {
      initials: "LA",
      name: "Dr. Lisa Anderson",
      specialty: "Eye Specialist",
      hospital: "VisionCare Hospital",
      experience: "9 Years Experience",
      patients: "1,500+ Patients",
      nextAppointment: "28 Jul 2026",
      status: "Available",
    },
    {
      initials: "RK",
      name: "Dr. Robert King",
      specialty: "Neurologist",
      hospital: "CareWell Hospital",
      experience: "16 Years Experience",
      patients: "3,500+ Patients",
      nextAppointment: "20 Sep 2026",
      status: "Available",
    },
  ];

  return (
    <PatientLayout>
      <div className="patient-doctors-page">
        <div className="patient-doctors-header">
          <div>
            <span className="patient-doctors-label">YOUR HEALTHCARE TEAM</span>
            <h1>My Doctors</h1>
            <p>View and manage the doctors who take care of your health.</p>
          </div>

          <button className="patient-find-doctor-button">
            <span>+</span>
            Find a Doctor
          </button>
        </div>

        <div className="patient-doctor-stats">
          <div className="patient-doctor-stat">
            <div className="patient-doctor-stat-icon">👨‍⚕️</div>
            <div>
              <span>My Doctors</span>
              <h2>4</h2>
              <p>Healthcare providers</p>
            </div>
          </div>

          <div className="patient-doctor-stat">
            <div className="patient-doctor-stat-icon">📅</div>
            <div>
              <span>Upcoming Visits</span>
              <h2>2</h2>
              <p>Scheduled appointments</p>
            </div>
          </div>

          <div className="patient-doctor-stat">
            <div className="patient-doctor-stat-icon">❤️</div>
            <div>
              <span>Primary Doctor</span>
              <h2>1</h2>
              <p>Dr. Sarah Wilson</p>
            </div>
          </div>

          <div className="patient-doctor-stat">
            <div className="patient-doctor-stat-icon">⭐</div>
            <div>
              <span>Care Visits</span>
              <h2>18</h2>
              <p>Total consultations</p>
            </div>
          </div>
        </div>

        <div className="patient-doctors-toolbar">
          <div className="patient-doctor-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
            />
          </div>

          <select defaultValue="all">
            <option value="all">All Specialties</option>
            <option value="general">General Physician</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="orthopedic">Orthopedic</option>
          </select>

          <select defaultValue="all-hospitals">
            <option value="all-hospitals">All Hospitals</option>
            <option value="carewell">CareWell Hospital</option>
            <option value="city">City Health Center</option>
            <option value="vision">VisionCare Hospital</option>
          </select>
        </div>

        <div className="patient-doctors-section-header">
          <div>
            <span>YOUR DOCTORS</span>
            <h2>Healthcare Providers</h2>
          </div>

          <p>4 doctors connected to your care</p>
        </div>

        <div className="patient-doctors-grid">
          {doctors.map((doctor, index) => (
            <div className="patient-doctor-card" key={index}>
              <div className="patient-doctor-card-top">
                <div className="patient-large-avatar">{doctor.initials}</div>

                <span
                  className={`patient-doctor-availability ${
                    doctor.status === "Available" ? "available" : "offline"
                  }`}
                >
                  {doctor.status}
                </span>
              </div>

              <div className="patient-doctor-card-info">
                <h3>{doctor.name}</h3>
                <p className="patient-doctor-specialty">
                  {doctor.specialty}
                </p>
                <span className="patient-doctor-hospital">
                  📍 {doctor.hospital}
                </span>
              </div>

              <div className="patient-doctor-details">
                <div>
                  <span>Experience</span>
                  <strong>{doctor.experience}</strong>
                </div>

                <div>
                  <span>Patients</span>
                  <strong>{doctor.patients}</strong>
                </div>
              </div>

              <div className="patient-next-appointment">
                <div>
                  <span>Next Appointment</span>
                  <strong>{doctor.nextAppointment}</strong>
                </div>

                <span>📅</span>
              </div>

              <div className="patient-doctor-actions">
                <button className="patient-view-doctor">View Profile</button>
                <button className="patient-book-doctor">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="patient-doctors-bottom-banner">
          <div className="patient-doctors-banner-icon">👨‍⚕️</div>

          <div>
            <span>Looking for a Specialist?</span>
            <h2>Find the right doctor for your healthcare needs.</h2>
            <p>
              Explore our network of trusted healthcare professionals and
              choose the specialist that's right for you.
            </p>
          </div>

          <button>Find a Doctor →</button>
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientDoctors;