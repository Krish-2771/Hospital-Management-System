import PatientLayout from "./PatientLayout";
import "./PatientPrescriptions.css";

function PatientPrescriptions() {
  const prescriptions = [
    {
      medicine: "Amoxicillin 500mg",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Physician",
      prescribed: "1 Sep 2026",
      dosage: "1 capsule",
      frequency: "Twice daily",
      instruction: "After meals",
      status: "Active",
      remaining: "5 days remaining",
      icon: "💊",
      type: "blue",
    },
    {
      medicine: "Paracetamol 500mg",
      doctor: "Dr. Michael Brown",
      specialty: "Cardiologist",
      prescribed: "25 Aug 2026",
      dosage: "1 tablet",
      frequency: "As needed",
      instruction: "For pain or fever",
      status: "Active",
      remaining: "10 tablets remaining",
      icon: "💊",
      type: "light-blue",
    },
    {
      medicine: "Vitamin D3 1000 IU",
      doctor: "Dr. Emily Carter",
      specialty: "Dermatologist",
      prescribed: "20 Aug 2026",
      dosage: "1 tablet",
      frequency: "Once daily",
      instruction: "With breakfast",
      status: "Active",
      remaining: "20 days remaining",
      icon: "💊",
      type: "yellow",
    },
    {
      medicine: "Atorvastatin 20mg",
      doctor: "Dr. James Davis",
      specialty: "Orthopedic",
      prescribed: "10 Jul 2026",
      dosage: "1 tablet",
      frequency: "Once daily",
      instruction: "In the evening",
      status: "Completed",
      remaining: "Completed on 10 Aug 2026",
      icon: "💊",
      type: "pink",
    },
    {
      medicine: "Cetirizine 10mg",
      doctor: "Dr. Lisa Anderson",
      specialty: "Eye Specialist",
      prescribed: "5 Jul 2026",
      dosage: "1 tablet",
      frequency: "Once daily",
      instruction: "At bedtime",
      status: "Completed",
      remaining: "Completed on 20 Jul 2026",
      icon: "💊",
      type: "green",
    },
  ];

  return (
    <PatientLayout>
      <div className="patient-prescriptions-page">
        <div className="patient-prescriptions-header">
          <div>
            <span className="patient-prescriptions-label">
              MEDICATION MANAGEMENT
            </span>

            <h1>My Prescriptions</h1>

            <p>
              Manage your medications and stay on track with your treatment.
            </p>
          </div>

          <button className="patient-upload-button">
            <span>+</span>
            Upload Prescription
          </button>
        </div>

        <div className="patient-prescription-stats">
          <div className="patient-prescription-stat active">
            <div className="prescription-stat-icon">💊</div>

            <div>
              <span>Active Prescriptions</span>
              <h2>3</h2>
              <p>Currently taking</p>
            </div>
          </div>

          <div className="patient-prescription-stat refill">
            <div className="prescription-stat-icon">◷</div>

            <div>
              <span>Refill Needed</span>
              <h2>1</h2>
              <p>Action required</p>
            </div>
          </div>

          <div className="patient-prescription-stat completed">
            <div className="prescription-stat-icon">✓</div>

            <div>
              <span>Completed</span>
              <h2>5</h2>
              <p>Past medications</p>
            </div>
          </div>

          <div className="patient-prescription-stat upcoming">
            <div className="prescription-stat-icon">▣</div>

            <div>
              <span>Upcoming</span>
              <h2>2</h2>
              <p>Starting soon</p>
            </div>
          </div>
        </div>

        <div className="patient-prescription-main">
          <div className="patient-prescription-left">
            <div className="patient-prescription-toolbar">
              <div className="patient-prescription-tabs">
                <button className="active">All Prescriptions</button>
                <button>Active</button>
                <button>Completed</button>
                <button>Expired</button>
              </div>

              <select defaultValue="newest">
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
              </select>
            </div>

            <div className="patient-prescription-list-card">
              {prescriptions.map((prescription, index) => (
                <div className="patient-prescription-row" key={index}>
                  <div
                    className={`patient-medicine-icon ${prescription.type}`}
                  >
                    {prescription.icon}
                  </div>

                  <div className="patient-prescription-medicine">
                    <h3>{prescription.medicine}</h3>

                    <p>
                      {prescription.doctor}
                      <span> | </span>
                      {prescription.specialty}
                    </p>

                    <span>▣ Prescribed on {prescription.prescribed}</span>
                  </div>

                  <div className="patient-prescription-dosage">
                    <strong>{prescription.dosage}</strong>
                    <span>{prescription.frequency}</span>
                    <small>{prescription.instruction}</small>
                  </div>

                  <div className="patient-prescription-status-box">
                    <span
                      className={`patient-prescription-status ${prescription.status.toLowerCase()}`}
                    >
                      {prescription.status}
                    </span>

                    <p>{prescription.remaining}</p>
                  </div>

                  <button className="patient-prescription-details">
                    View Details
                  </button>

                  <button className="patient-prescription-more">⋮</button>
                </div>
              ))}
            </div>

            <div className="patient-prescription-footer">
              <span>Showing 1 to 5 of 8 prescriptions</span>

              <div className="patient-prescription-pagination">
                <button>‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>›</button>
              </div>
            </div>
          </div>

          <aside className="patient-prescription-right">
            <div className="patient-new-prescription-card">
              <div className="patient-prescription-doctor">👩‍⚕️</div>

              <h2>Have a New Prescription?</h2>

              <p>
                Upload your prescription and get it reviewed by our
                pharmacists.
              </p>

              <button>+ Upload Prescription</button>
            </div>

            <div className="patient-reminder-card">
              <div className="patient-reminder-icon">🔔</div>

              <h3>Medication Reminder</h3>

              <p>
                Set reminders to never miss your medication.
              </p>

              <button>Set Reminder</button>

              <div className="patient-reminder-clock">◷</div>
            </div>

            <div className="patient-pharmacy-card">
              <div className="patient-pharmacy-icon">🏥</div>

              <h3>Pharmacy Support</h3>

              <p>
                Need help with your medications? Our pharmacists are here to
                help.
              </p>

              <button>Contact Pharmacy</button>
            </div>

            <div className="patient-prescription-tips">
              <h3>💡 Quick Tips</h3>

              <ul>
                <li>Take medications as prescribed</li>
                <li>Do not skip doses</li>
                <li>Complete the full course</li>
                <li>Store medicines properly</li>
                <li>Consult your doctor about side effects</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="patient-prescription-banner">
          <div className="patient-prescription-banner-icon">💊</div>

          <div>
            <span>Your Health, Our Priority</span>

            <p>
              Take your medications on time and stay healthy.
            </p>
          </div>

          <strong>
            Healthy Today
            <br />
            Happier Tomorrow
          </strong>

          <div className="patient-prescription-banner-heart">♥</div>
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientPrescriptions;