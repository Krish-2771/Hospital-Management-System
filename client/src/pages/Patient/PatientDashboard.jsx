import PatientLayout from "./PatientLayout";
import "./PatientDashboard.css";

function PatientDashboard() {
  return (
    <PatientLayout>
      <div className="patient-dashboard">
        <div className="patient-welcome">
          <div>
            <p className="patient-small-title">Patient Dashboard</p>
            <h1>Good Morning, Alex 👋</h1>
            <p>
              Welcome back! Here's an overview of your health and upcoming
              appointments.
            </p>
          </div>

          <div className="patient-welcome-date">
            <span>Today</span>
            <strong>September 5, 2026</strong>
          </div>
        </div>

        <div className="patient-stats-grid">
          <div className="patient-stat-card">
            <div className="patient-stat-icon">📅</div>
            <div>
              <span>Upcoming Appointments</span>
              <h2>2</h2>
              <p>Next appointment in 2 days</p>
            </div>
          </div>

          <div className="patient-stat-card">
            <div className="patient-stat-icon">👨‍⚕️</div>
            <div>
              <span>My Doctors</span>
              <h2>4</h2>
              <p>Doctors taking care of you</p>
            </div>
          </div>

          <div className="patient-stat-card">
            <div className="patient-stat-icon">💊</div>
            <div>
              <span>Active Prescriptions</span>
              <h2>3</h2>
              <p>Current medications</p>
            </div>
          </div>

          <div className="patient-stat-card">
            <div className="patient-stat-icon">📋</div>
            <div>
              <span>Medical Records</span>
              <h2>12</h2>
              <p>Total health records</p>
            </div>
          </div>
        </div>

        <div className="patient-dashboard-grid">
          <section className="patient-card patient-appointments-card">
            <div className="patient-card-header">
              <div>
                <span className="patient-section-label">YOUR SCHEDULE</span>
                <h2>Upcoming Appointments</h2>
              </div>

              <button className="patient-view-button">View All</button>
            </div>

            <div className="patient-appointment-list">
              <div className="patient-appointment">
                <div className="patient-appointment-date">
                  <strong>07</strong>
                  <span>SEP</span>
                </div>

                <div className="patient-appointment-info">
                  <h3>General Consultation</h3>
                  <p>Dr. Sarah Wilson</p>
                  <span>10:30 AM • CareWell Hospital</span>
                </div>

                <span className="patient-status confirmed">Confirmed</span>
              </div>

              <div className="patient-appointment">
                <div className="patient-appointment-date">
                  <strong>14</strong>
                  <span>SEP</span>
                </div>

                <div className="patient-appointment-info">
                  <h3>Cardiology Follow-up</h3>
                  <p>Dr. Michael Brown</p>
                  <span>03:00 PM • CareWell Hospital</span>
                </div>

                <span className="patient-status pending">Pending</span>
              </div>
            </div>
          </section>

          <section className="patient-card patient-doctor-card">
            <div className="patient-card-header">
              <div>
                <span className="patient-section-label">HEALTHCARE TEAM</span>
                <h2>My Doctors</h2>
              </div>

              <button className="patient-view-button">View All</button>
            </div>

            <div className="patient-doctor-list">
              <div className="patient-doctor">
                <div className="patient-doctor-avatar">SW</div>
                <div>
                  <h3>Dr. Sarah Wilson</h3>
                  <p>General Physician</p>
                </div>
                <button>View</button>
              </div>

              <div className="patient-doctor">
                <div className="patient-doctor-avatar">MB</div>
                <div>
                  <h3>Dr. Michael Brown</h3>
                  <p>Cardiologist</p>
                </div>
                <button>View</button>
              </div>

              <div className="patient-doctor">
                <div className="patient-doctor-avatar">JD</div>
                <div>
                  <h3>Dr. James Davis</h3>
                  <p>Dermatologist</p>
                </div>
                <button>View</button>
              </div>
            </div>
          </section>
        </div>

        <div className="patient-dashboard-grid bottom">
          <section className="patient-card">
            <div className="patient-card-header">
              <div>
                <span className="patient-section-label">HEALTH INFORMATION</span>
                <h2>Recent Medical Records</h2>
              </div>

              <button className="patient-view-button">View All</button>
            </div>

            <div className="patient-record-list">
              <div className="patient-record">
                <div className="patient-record-icon">📋</div>
                <div>
                  <h3>General Health Checkup</h3>
                  <p>Dr. Sarah Wilson • September 1, 2026</p>
                </div>
                <span>View</span>
              </div>

              <div className="patient-record">
                <div className="patient-record-icon">🩺</div>
                <div>
                  <h3>Blood Pressure Review</h3>
                  <p>Dr. Michael Brown • August 22, 2026</p>
                </div>
                <span>View</span>
              </div>

              <div className="patient-record">
                <div className="patient-record-icon">🧪</div>
                <div>
                  <h3>Blood Test Report</h3>
                  <p>Laboratory Department • August 18, 2026</p>
                </div>
                <span>View</span>
              </div>
            </div>
          </section>

          <section className="patient-card patient-prescription-card">
            <div className="patient-card-header">
              <div>
                <span className="patient-section-label">MEDICATIONS</span>
                <h2>Active Prescriptions</h2>
              </div>

              <button className="patient-view-button">View All</button>
            </div>

            <div className="patient-prescription">
              <div className="patient-medicine-icon">💊</div>
              <div>
                <h3>Amoxicillin 500mg</h3>
                <p>1 capsule • Twice daily</p>
                <span>5 days remaining</span>
              </div>
            </div>

            <div className="patient-prescription">
              <div className="patient-medicine-icon">💊</div>
              <div>
                <h3>Paracetamol 500mg</h3>
                <p>1 tablet • As needed</p>
                <span>10 tablets remaining</span>
              </div>
            </div>

            <div className="patient-prescription">
              <div className="patient-medicine-icon">💊</div>
              <div>
                <h3>Vitamin D3</h3>
                <p>1 tablet • Once daily</p>
                <span>20 days remaining</span>
              </div>
            </div>
          </section>
        </div>

        <section className="patient-health-banner">
          <div>
            <span>YOUR HEALTH, OUR PRIORITY</span>
            <h2>Stay on top of your health</h2>
            <p>
              Keep track of your appointments, medical records and
              prescriptions all in one place.
            </p>
          </div>

          <div className="patient-health-icon">♥</div>
        </section>
      </div>
    </PatientLayout>
  );
}

export default PatientDashboard;