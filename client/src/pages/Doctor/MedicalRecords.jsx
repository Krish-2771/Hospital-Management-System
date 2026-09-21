import DoctorLayout from "./DoctorLayout";
import "./MedicalRecords.css";

function MedicalRecords() {
  const records = [
    {
      id: "MR-2048",
      patient: "Amit Sharma",
      age: 34,
      recordType: "Consultation",
      diagnosis: "Hypertension",
      doctor: "Dr. Riyan Khan",
      date: "03 Sep 2026",
      status: "Reviewed",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "MR-2047",
      patient: "Priya Mehta",
      age: 28,
      recordType: "Lab Report",
      diagnosis: "Migraine",
      doctor: "Dr. Riyan Khan",
      date: "03 Sep 2026",
      status: "Reviewed",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "MR-2046",
      patient: "Rohit Verma",
      age: 45,
      recordType: "ECG Report",
      diagnosis: "Chest Pain",
      doctor: "Dr. Riyan Khan",
      date: "02 Sep 2026",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "MR-2045",
      patient: "Sneha Kapoor",
      age: 31,
      recordType: "Blood Test",
      diagnosis: "Diabetes",
      doctor: "Dr. Riyan Khan",
      date: "01 Sep 2026",
      status: "Reviewed",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "MR-2044",
      patient: "Vikram Singh",
      age: 52,
      recordType: "Consultation",
      diagnosis: "Heart Disease",
      doctor: "Dr. Riyan Khan",
      date: "30 Aug 2026",
      status: "Reviewed",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "MR-2043",
      patient: "Neha Patel",
      age: 26,
      recordType: "Follow-up",
      diagnosis: "Fever",
      doctor: "Dr. Riyan Khan",
      date: "28 Aug 2026",
      status: "Archived",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <DoctorLayout>
      <div className="medical-records-page">

        {/* HEADER */}
        <section className="medical-records-header">
          <div>
            <h1>Medical Records</h1>
            <p>
              View and manage medical records, reports, and patient history.
            </p>
          </div>

          <button className="medical-records-add-button">
            + Add Record
          </button>
        </section>

        {/* STATISTICS */}
        <section className="medical-records-stats">

          <div className="medical-record-stat-card blue">
            <div className="medical-record-stat-icon">□</div>

            <div>
              <h2>324</h2>
              <p>Total Records</p>
            </div>
          </div>

          <div className="medical-record-stat-card green">
            <div className="medical-record-stat-icon">✓</div>

            <div>
              <h2>286</h2>
              <p>Reviewed</p>
            </div>
          </div>

          <div className="medical-record-stat-card yellow">
            <div className="medical-record-stat-icon">◷</div>

            <div>
              <h2>24</h2>
              <p>Pending Review</p>
            </div>
          </div>

          <div className="medical-record-stat-card pink">
            <div className="medical-record-stat-icon">▤</div>

            <div>
              <h2>14</h2>
              <p>Reports</p>
            </div>
          </div>

        </section>

        {/* MAIN CARD */}
        <section className="medical-records-card">

          {/* CARD HEADER */}
          <div className="medical-records-card-header">
            <div>
              <h2>Medical Records</h2>
              <p>
                Patient medical history and recently uploaded records.
              </p>
            </div>

            <button className="medical-record-filter-button">
              Filter
            </button>
          </div>

          {/* TOOLBAR */}
          <div className="medical-records-toolbar">

            <div className="medical-record-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search patient, record, or diagnosis..."
              />
            </div>

            <select defaultValue="All Types">
              <option>All Types</option>
              <option>Consultation</option>
              <option>Lab Report</option>
              <option>ECG Report</option>
              <option>Blood Test</option>
              <option>Follow-up</option>
            </select>

            <select defaultValue="All Status">
              <option>All Status</option>
              <option>Reviewed</option>
              <option>Pending</option>
              <option>Archived</option>
            </select>

          </div>

          {/* TABLE */}
          <div className="medical-records-table-wrapper">

            <table className="medical-records-table">

              <thead>
                <tr>
                  <th>RECORD</th>
                  <th>PATIENT</th>
                  <th>TYPE</th>
                  <th>DIAGNOSIS</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {records.map((record) => (
                  <tr key={record.id}>

                    <td>
                      <div className="medical-record-id">
                        <strong>{record.id}</strong>
                        <span>{record.doctor}</span>
                      </div>
                    </td>

                    <td>
                      <div className="medical-record-patient">

                        <img
                          src={record.image}
                          alt={record.patient}
                        />

                        <div>
                          <strong>{record.patient}</strong>
                          <span>{record.age} years</span>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="medical-record-type">
                        {record.recordType}
                      </span>
                    </td>

                    <td>
                      <span className="medical-record-diagnosis">
                        {record.diagnosis}
                      </span>
                    </td>

                    <td>
                      <span className="medical-record-date">
                        {record.date}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`medical-record-status ${record.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {record.status}
                      </span>
                    </td>

                    <td>
                      <div className="medical-record-actions">
                        <button>View</button>
                        <button>•••</button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </section>

      </div>
    </DoctorLayout>
  );
}

export default MedicalRecords;