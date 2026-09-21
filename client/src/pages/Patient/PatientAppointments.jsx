import PatientLayout from "./PatientLayout";
import "./PatientAppointments.css";

function PatientAppointments() {
  const appointments = [
    {
      day: "07",
      month: "SEP",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Physician",
      hospital: "CareWell Hospital",
      time: "10:30 AM",
      date: "Mon, 7 Sep 2026",
      status: "Confirmed",
    },
    {
      day: "14",
      month: "SEP",
      doctor: "Dr. Michael Brown",
      specialty: "Cardiologist",
      hospital: "CareWell Hospital",
      time: "03:00 PM",
      date: "Mon, 14 Sep 2026",
      status: "Pending",
    },
    {
      day: "22",
      month: "AUG",
      doctor: "Dr. Emily Carter",
      specialty: "Dermatologist",
      hospital: "SkinCare Clinic",
      time: "11:00 AM",
      date: "Sat, 22 Aug 2026",
      status: "Completed",
    },
    {
      day: "05",
      month: "AUG",
      doctor: "Dr. James Davis",
      specialty: "Orthopedic",
      hospital: "City Health Center",
      time: "04:00 PM",
      date: "Tue, 5 Aug 2026",
      status: "Completed",
    },
    {
      day: "28",
      month: "JUL",
      doctor: "Dr. Lisa Anderson",
      specialty: "Eye Specialist",
      hospital: "VisionCare Hospital",
      time: "09:30 AM",
      date: "Mon, 28 Jul 2026",
      status: "Cancelled",
    },
  ];

  return (
    <PatientLayout>
      <div className="patient-appointments-page">
        <div className="patient-appointments-header">
          <div>
            <span className="patient-appointments-label">
              APPOINTMENT MANAGEMENT
            </span>

            <h1>My Appointments</h1>

            <p>
              Manage your appointments and stay on top of your health.
            </p>
          </div>

          <button className="patient-book-button">
            <span>+</span>
            Book New Appointment
          </button>
        </div>

        <div className="patient-appointment-stats">
          <div className="patient-appointment-stat total">
            <div className="appointment-stat-icon">▣</div>
            <div>
              <span>Total Appointments</span>
              <h2>5</h2>
              <p>+2 this month</p>
            </div>
          </div>

          <div className="patient-appointment-stat upcoming">
            <div className="appointment-stat-icon">✓</div>
            <div>
              <span>Upcoming</span>
              <h2>2</h2>
              <p>View upcoming →</p>
            </div>
          </div>

          <div className="patient-appointment-stat pending">
            <div className="appointment-stat-icon">◷</div>
            <div>
              <span>Pending</span>
              <h2>1</h2>
              <p>Awaiting confirmation</p>
            </div>
          </div>

          <div className="patient-appointment-stat completed">
            <div className="appointment-stat-icon">×</div>
            <div>
              <span>Completed</span>
              <h2>2</h2>
              <p>Past appointments</p>
            </div>
          </div>
        </div>

        <div className="patient-appointment-main">
          <div className="patient-appointment-left">
            <div className="patient-appointment-toolbar">
              <div className="patient-appointment-tabs">
                <button className="active">All Appointments</button>
                <button>Upcoming</button>
                <button>Past</button>
                <button>Cancelled</button>
              </div>

              <select defaultValue="newest">
                <option value="newest">Sort by: Date (Newest)</option>
                <option value="oldest">Sort by: Date (Oldest)</option>
              </select>
            </div>

            <div className="patient-appointment-list-card">
              {appointments.map((appointment, index) => (
                <div className="patient-appointment-row" key={index}>
                  <div className="patient-appointment-date-box">
                    <strong>{appointment.day}</strong>
                    <span>{appointment.month}</span>
                  </div>

                  <div className="patient-doctor-avatar">
                    {appointment.doctor
                      .split(" ")
                      .slice(1, 3)
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div className="patient-appointment-doctor-info">
                    <h3>{appointment.doctor}</h3>
                    <p>{appointment.specialty}</p>
                    <span>{appointment.hospital}</span>
                  </div>

                  <div className="patient-appointment-time">
                    <strong>◷ {appointment.time}</strong>
                    <span>{appointment.date}</span>
                  </div>

                  <span
                    className={`patient-appointment-status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>

                  <button className="patient-details-button">
                    View Details
                  </button>

                  <button className="patient-more-button">⋮</button>
                </div>
              ))}
            </div>

            <div className="patient-appointment-footer">
              <span>Showing 1 to 5 of 5 appointments</span>

              <div className="patient-pagination">
                <button>‹</button>
                <button className="active">1</button>
                <button>›</button>
              </div>
            </div>
          </div>

          <aside className="patient-appointment-right">
            <div className="patient-book-card">
              <div className="patient-book-illustration">👨‍⚕️</div>

              <h2>Need to See a Doctor?</h2>

              <p>
                Book an appointment with our trusted doctors in just a few
                clicks.
              </p>

              <button>+ Book Appointment</button>
            </div>

            <div className="patient-calendar-card">
              <div className="patient-calendar-header">
                <h3>September 2026</h3>

                <div>
                  <button>‹</button>
                  <button>›</button>
                </div>
              </div>

              <div className="patient-calendar-days">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              <div className="patient-calendar-dates">
                <span className="muted">30</span>
                <span className="muted">31</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>

                <span>6</span>
                <span className="selected">7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>

                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>

                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>

                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span className="muted">1</span>
                <span className="muted">2</span>
                <span className="muted">3</span>
              </div>
            </div>

            <div className="patient-tips-card">
              <h3>💡 Quick Tips</h3>

              <ul>
                <li>Arrive 10 minutes early</li>
                <li>Bring previous medical records</li>
                <li>Keep your ID and insurance card ready</li>
                <li>Reschedule if you can't make it</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="patient-appointment-banner">
          <div className="patient-banner-icon">📅</div>

          <div>
            <span>Your Health Journey Matters</span>
            <p>
              Manage your appointments, get reminders and never miss a
              checkup again.
            </p>
          </div>

          <strong>
            Healthy Today
            <br />
            Happier Tomorrow
          </strong>

          <div className="patient-banner-heart">♥</div>
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientAppointments;