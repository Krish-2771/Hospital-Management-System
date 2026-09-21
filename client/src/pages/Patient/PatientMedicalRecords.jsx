import PatientLayout from "./PatientLayout";
import "./PatientMedicalRecords.css";

function PatientMedicalRecords() {
  const records = [
    {
      icon: "📋",
      title: "Annual Health Checkup",
      description: "Complete health examination report",
      type: "Visit Summary",
      date: "15 Sep 2026",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Physician",
      style: "green",
    },
    {
      icon: "🧪",
      title: "Blood Test Report",
      description: "Complete blood count (CBC)",
      type: "Lab Report",
      date: "12 Sep 2026",
      doctor: "Dr. Michael Brown",
      specialty: "Cardiologist",
      style: "blue",
    },
    {
      icon: "🩻",
      title: "Chest X-Ray",
      description: "Chest radiography results",
      type: "Imaging",
      date: "5 Sep 2026",
      doctor: "Dr. James Davis",
      specialty: "Orthopedic",
      style: "purple",
    },
    {
      icon: "💊",
      title: "Prescription - Amoxicillin",
      description: "Antibiotic medication prescription",
      type: "Prescription",
      date: "1 Sep 2026",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Physician",
      style: "red",
    },
    {
      icon: "🧪",
      title: "Skin Allergy Report",
      description: "Allergy test results",
      type: "Lab Report",
      date: "25 Aug 2026",
      doctor: "Dr. Emily Carter",
      specialty: "Dermatologist",
      style: "blue",
    },
    {
      icon: "💊",
      title: "Prescription - Paracetamol",
      description: "Pain relief medication",
      type: "Prescription",
      date: "20 Aug 2026",
      doctor: "Dr. Emily Carter",
      specialty: "Dermatologist",
      style: "red",
    },
    {
      icon: "🩻",
      title: "MRI Scan Report",
      description: "Brain MRI results",
      type: "Imaging",
      date: "15 Aug 2026",
      doctor: "Dr. Robert King",
      specialty: "Neurologist",
      style: "purple",
    },
    {
      icon: "📋",
      title: "Visit Summary",
      description: "Follow-up consultation notes",
      type: "Visit Summary",
      date: "10 Aug 2026",
      doctor: "Dr. James Davis",
      specialty: "Orthopedic",
      style: "green",
    },
  ];

  return (
    <PatientLayout>
      <div className="patient-records-page">
        <div className="patient-records-header">
          <div>
            <span className="patient-records-label">
              HEALTH INFORMATION
            </span>

            <h1>Medical Records</h1>

            <p>
              Keep track of your medical history and important health
              information.
            </p>
          </div>

          <button className="patient-upload-record-button">
            <span>+</span>
            Upload Record
          </button>
        </div>

        <div className="patient-record-stats">
          <div className="patient-record-stat">
            <div className="patient-record-stat-icon blue">▣</div>

            <div>
              <span>Total Records</span>
              <h2>12</h2>
              <p>+2 this month</p>
            </div>
          </div>

          <div className="patient-record-stat">
            <div className="patient-record-stat-icon blue">▤</div>

            <div>
              <span>Reports</span>
              <h2>5</h2>
              <p>Lab & Diagnostic</p>
            </div>
          </div>

          <div className="patient-record-stat">
            <div className="patient-record-stat-icon red">▤</div>

            <div>
              <span>Prescriptions</span>
              <h2>4</h2>
              <p>Medical history</p>
            </div>
          </div>

          <div className="patient-record-stat">
            <div className="patient-record-stat-icon green">▣</div>

            <div>
              <span>Visit Summaries</span>
              <h2>3</h2>
              <p>Consultation notes</p>
            </div>
          </div>
        </div>

        <div className="patient-record-main">
          <div className="patient-record-left">
            <div className="patient-record-toolbar">
              <div className="patient-record-tabs">
                <button className="active">All Records</button>
                <button>Lab Reports</button>
                <button>Prescriptions</button>
                <button>Visit Summaries</button>
                <button>Imaging</button>
                <button>Others</button>
              </div>

              <select defaultValue="newest">
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
              </select>
            </div>

            <div className="patient-record-list-card">
              <div className="patient-record-table-header">
                <span>Document Name</span>
                <span>Type</span>
                <span>Date</span>
                <span>Doctor</span>
                <span>Actions</span>
              </div>

              {records.map((record, index) => (
                <div className="patient-record-row" key={index}>
                  <div className="patient-record-name">
                    <div className={`patient-record-icon ${record.style}`}>
                      {record.icon}
                    </div>

                    <div>
                      <h3>{record.title}</h3>
                      <p>{record.description}</p>
                    </div>
                  </div>

                  <span
                    className={`patient-record-type ${record.style}`}
                  >
                    {record.type}
                  </span>

                  <span className="patient-record-date">
                    {record.date}
                  </span>

                  <div className="patient-record-doctor">
                    <strong>{record.doctor}</strong>
                    <span>{record.specialty}</span>
                  </div>

                  <div className="patient-record-actions">
                    <button>View</button>
                    <button>⋮</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="patient-record-footer">
              <span>Showing 1 to 8 of 12 records</span>

              <div className="patient-record-pagination">
                <button>‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>›</button>
              </div>
            </div>
          </div>

          <aside className="patient-record-right">
            <div className="patient-quick-upload">
              <div className="patient-upload-icon">☁</div>

              <h2>Quick Upload</h2>

              <p>
                Upload medical records, documents, test results or reports.
              </p>

              <div className="patient-upload-box">
                <span>↑</span>
                <strong>Drag and drop files here</strong>
                <small>or click to browse</small>
              </div>

              <small>Supports PDF, JPG, PNG (Max 10MB)</small>
            </div>

            <div className="patient-record-categories">
              <h3>Record Categories</h3>

              <div>
                <span>⚗ Lab Reports</span>
                <strong>5</strong>
              </div>

              <div>
                <span>💊 Prescriptions</span>
                <strong>4</strong>
              </div>

              <div>
                <span>▣ Visit Summaries</span>
                <strong>3</strong>
              </div>

              <div>
                <span>🩻 Imaging Reports</span>
                <strong>2</strong>
              </div>

              <div>
                <span>□ Other Documents</span>
                <strong>1</strong>
              </div>
            </div>

            <div className="patient-record-help">
              <div>🎧</div>

              <h3>Need Help?</h3>

              <p>
                Have questions about your medical records?
              </p>

              <button>Contact Support</button>
            </div>

            <div className="patient-record-security">
              <div>🛡️</div>

              <div>
                <h3>Privacy & Security</h3>
                <p>
                  Your medical records are secure and confidential.
                </p>
                <span>Learn More →</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="patient-record-banner">
          <div className="patient-record-banner-icon">📋</div>

          <div>
            <span>Better Information. Healthier Tomorrow.</span>

            <p>
              Keep your medical records organized and accessible whenever you
              need them.
            </p>
          </div>

          <strong>
            Your Health
            <br />
            Our Priority
          </strong>

          <div className="patient-record-banner-heart">♥</div>
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientMedicalRecords;