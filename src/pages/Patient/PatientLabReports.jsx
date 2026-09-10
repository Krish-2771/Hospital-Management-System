import PatientLayout from "./PatientLayout";
import "./PatientLabReports.css";

function PatientLabReports() {
  const reports = [
    {
      icon: "🧪",
      name: "Complete Blood Count (CBC)",
      description: "Blood test to check overall health",
      date: "12 Sep 2026",
      type: "Blood Test",
      result: "Normal",
      doctor: "Dr. Michael Brown",
      specialty: "Cardiologist",
      style: "green",
    },
    {
      icon: "🩸",
      name: "Lipid Panel",
      description: "Cholesterol and triglycerides",
      date: "5 Sep 2026",
      type: "Blood Test",
      result: "High",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Physician",
      style: "red",
    },
    {
      icon: "🧪",
      name: "Liver Function Test (LFT)",
      description: "Check liver health",
      date: "28 Aug 2026",
      type: "Blood Test",
      result: "Normal",
      doctor: "Dr. Emily Carter",
      specialty: "Dermatologist",
      style: "blue",
    },
    {
      icon: "🔬",
      name: "Thyroid Function Test (TFT)",
      description: "Check thyroid hormone levels",
      date: "20 Aug 2026",
      type: "Blood Test",
      result: "Normal",
      doctor: "Dr. Sarah Wilson",
      specialty: "General Physician",
      style: "purple",
    },
    {
      icon: "💧",
      name: "Vitamin D Test",
      description: "Check vitamin D levels",
      date: "15 Aug 2026",
      type: "Blood Test",
      result: "Low",
      doctor: "Dr. James Davis",
      specialty: "Orthopedic",
      style: "orange",
    },
    {
      icon: "🧪",
      name: "Urine Analysis",
      description: "Check kidney and urinary health",
      date: "10 Aug 2026",
      type: "Urine Test",
      result: "Normal",
      doctor: "Dr. Lisa Anderson",
      specialty: "Eye Specialist",
      style: "blue",
    },
    {
      icon: "🩸",
      name: "HbA1c Test",
      description: "Average blood sugar level",
      date: "5 Aug 2026",
      type: "Blood Test",
      result: "Normal",
      doctor: "Dr. Michael Brown",
      specialty: "Cardiologist",
      style: "red",
    },
    {
      icon: "🔬",
      name: "C-Reactive Protein (CRP)",
      description: "Check for inflammation",
      date: "25 Jul 2026",
      type: "Blood Test",
      result: "Pending",
      doctor: "Dr. Robert King",
      specialty: "Neurologist",
      style: "purple",
    },
  ];

  return (
    <PatientLayout>
      <div className="patient-lab-page">
        <div className="patient-lab-header">
          <div>
            <span className="patient-lab-label">LAB TEST RESULTS</span>

            <h1>Lab Reports</h1>

            <p>
              View your test results and track your health progress.
            </p>
          </div>

          <button className="patient-upload-lab-button">
            <span>+</span>
            Upload Lab Report
          </button>
        </div>

        <div className="patient-lab-stats">
          <div className="patient-lab-stat total">
            <div className="patient-lab-stat-icon">▤</div>

            <div>
              <span>Total Reports</span>
              <h2>8</h2>
              <p>+1 this month</p>
            </div>
          </div>

          <div className="patient-lab-stat normal">
            <div className="patient-lab-stat-icon">✓</div>

            <div>
              <span>Normal Results</span>
              <h2>5</h2>
              <p>Within range</p>
            </div>
          </div>

          <div className="patient-lab-stat abnormal">
            <div className="patient-lab-stat-icon">!</div>

            <div>
              <span>Abnormal Results</span>
              <h2>2</h2>
              <p>Need attention</p>
            </div>
          </div>

          <div className="patient-lab-stat pending">
            <div className="patient-lab-stat-icon">◷</div>

            <div>
              <span>Pending Results</span>
              <h2>1</h2>
              <p>Awaiting review</p>
            </div>
          </div>
        </div>

        <div className="patient-lab-main">
          <div className="patient-lab-left">
            <div className="patient-lab-toolbar">
              <div className="patient-lab-search">
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search by test name, date, or doctor..."
                />
              </div>

              <select defaultValue="all">
                <option value="all">All Test Types</option>
                <option value="blood">Blood Test</option>
                <option value="urine">Urine Test</option>
                <option value="imaging">Imaging Test</option>
                <option value="pathology">Pathology Test</option>
              </select>

              <select defaultValue="all-dates">
                <option value="all-dates">All Dates</option>
                <option value="this-month">This Month</option>
                <option value="last-month">Last Month</option>
                <option value="last-3-months">Last 3 Months</option>
              </select>
            </div>

            <div className="patient-lab-list-card">
              <div className="patient-lab-table-header">
                <span>Test Name</span>
                <span>Date</span>
                <span>Type</span>
                <span>Results</span>
                <span>Ordered By</span>
                <span>Actions</span>
              </div>

              {reports.map((report, index) => (
                <div className="patient-lab-row" key={index}>
                  <div className="patient-lab-test">
                    <div className={`patient-lab-icon ${report.style}`}>
                      {report.icon}
                    </div>

                    <div>
                      <h3>{report.name}</h3>
                      <p>{report.description}</p>
                    </div>
                  </div>

                  <span className="patient-lab-date">
                    {report.date}
                  </span>

                  <span className={`patient-lab-type ${report.style}`}>
                    {report.type}
                  </span>

                  <span
                    className={`patient-lab-result ${report.result
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {report.result}
                  </span>

                  <div className="patient-lab-doctor">
                    <strong>{report.doctor}</strong>
                    <span>{report.specialty}</span>
                  </div>

                  <div className="patient-lab-actions">
                    <button>View</button>
                    <button>⋮</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="patient-lab-footer">
              <span>Showing 1 to 8 of 8 reports</span>

              <div className="patient-lab-pagination">
                <button>‹</button>
                <button className="active">1</button>
                <button>›</button>
              </div>
            </div>
          </div>

          <aside className="patient-lab-right">
            <div className="patient-upload-lab-card">
              <div className="patient-lab-doctor-icon">👨‍⚕️</div>

              <h2>Upload New Lab Report</h2>

              <p>
                Upload your lab reports and get them reviewed by our
                healthcare team.
              </p>

              <div className="patient-lab-upload-box">
                <span>↑</span>
                <strong>Drag and drop files here</strong>
                <small>or click to browse</small>
              </div>

              <small>Supports PDF, JPG, PNG (Max 10MB)</small>
            </div>

            <div className="patient-test-categories">
              <h3>Test Categories</h3>

              <div>
                <span>🩸 Blood Tests</span>
                <strong>6</strong>
              </div>

              <div>
                <span>🧪 Urine Tests</span>
                <strong>2</strong>
              </div>

              <div>
                <span>🖼️ Imaging Tests</span>
                <strong>0</strong>
              </div>

              <div>
                <span>⚗ Pathology Tests</span>
                <strong>0</strong>
              </div>

              <div>
                <span>□ Other Tests</span>
                <strong>0</strong>
              </div>
            </div>

            <div className="patient-lab-help">
              <div>🎧</div>

              <h3>Need Help?</h3>

              <p>
                Have questions about your lab results?
              </p>

              <button>Contact Support</button>
            </div>

            <div className="patient-lab-note">
              <div>💡</div>

              <div>
                <h3>Important Note</h3>

                <p>
                  Lab results should always be discussed with your doctor
                  for proper interpretation.
                </p>

                <span>Learn More →</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="patient-lab-banner">
          <div className="patient-lab-banner-icon">🧪</div>

          <div>
            <span>Your Health Insights</span>

            <p>
              Stay informed, stay healthy. Regular testing helps catch
              issues early.
            </p>
          </div>

          <strong>
            Healthy Today
            <br />
            Brighter Tomorrow
          </strong>

          <div className="patient-lab-banner-heart">♥</div>
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientLabReports;