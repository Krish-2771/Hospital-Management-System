import DoctorLayout from "./DoctorLayout";
import "./Prescriptions.css";

function Prescriptions() {
  const prescriptions = [
    {
      id: "RX-1024",
      patient: "Amit Sharma",
      age: 34,
      date: "03 Sep 2026",
      diagnosis: "Hypertension",
      medicines: "Amlodipine, Losartan",
      duration: "30 Days",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "RX-1023",
      patient: "Priya Mehta",
      age: 28,
      date: "03 Sep 2026",
      diagnosis: "Migraine",
      medicines: "Sumatriptan, Naproxen",
      duration: "14 Days",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "RX-1022",
      patient: "Rohit Verma",
      age: 45,
      date: "02 Sep 2026",
      diagnosis: "Chest Pain",
      medicines: "Aspirin, Atorvastatin",
      duration: "30 Days",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "RX-1021",
      patient: "Sneha Kapoor",
      age: 31,
      date: "01 Sep 2026",
      diagnosis: "Diabetes",
      medicines: "Metformin, Glimepiride",
      duration: "60 Days",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "RX-1020",
      patient: "Vikram Singh",
      age: 52,
      date: "30 Aug 2026",
      diagnosis: "Heart Disease",
      medicines: "Clopidogrel, Atorvastatin",
      duration: "30 Days",
      status: "Expired",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <DoctorLayout>
      <div className="prescriptions-page">

        {/* HEADER */}
        <section className="prescriptions-header">
          <div>
            <h1>Prescriptions</h1>
            <p>
              Create, manage, and review patient prescriptions.
            </p>
          </div>

          <button className="prescription-add-button">
            + New Prescription
          </button>
        </section>

        {/* STATISTICS */}
        <section className="prescription-stats">

          <div className="prescription-stat-card blue">
            <div className="prescription-stat-icon">▤</div>
            <div>
              <h2>156</h2>
              <p>Total Prescriptions</p>
            </div>
          </div>

          <div className="prescription-stat-card green">
            <div className="prescription-stat-icon">✓</div>
            <div>
              <h2>124</h2>
              <p>Active</p>
            </div>
          </div>

          <div className="prescription-stat-card yellow">
            <div className="prescription-stat-icon">◷</div>
            <div>
              <h2>18</h2>
              <p>Expiring Soon</p>
            </div>
          </div>

          <div className="prescription-stat-card pink">
            <div className="prescription-stat-icon">✕</div>
            <div>
              <h2>14</h2>
              <p>Expired</p>
            </div>
          </div>

        </section>

        {/* MAIN CARD */}
        <section className="prescriptions-card">

          {/* CARD HEADER */}
          <div className="prescriptions-card-header">
            <div>
              <h2>Prescription History</h2>
              <p>
                View and manage prescriptions issued to your patients.
              </p>
            </div>

            <button className="prescription-filter-button">
              Filter
            </button>
          </div>

          {/* TOOLBAR */}
          <div className="prescriptions-toolbar">

            <div className="prescription-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search by patient or prescription ID..."
              />
            </div>

            <select defaultValue="All Status">
              <option>All Status</option>
              <option>Active</option>
              <option>Expired</option>
            </select>

            <select defaultValue="Latest">
              <option>Latest</option>
              <option>Oldest</option>
            </select>

          </div>

          {/* TABLE */}
          <div className="prescriptions-table-wrapper">

            <table className="prescriptions-table">

              <thead>
                <tr>
                  <th>PRESCRIPTION</th>
                  <th>PATIENT</th>
                  <th>DIAGNOSIS</th>
                  <th>MEDICINES</th>
                  <th>DURATION</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {prescriptions.map((prescription) => (
                  <tr key={prescription.id}>

                    <td>
                      <div className="prescription-id">
                        <strong>{prescription.id}</strong>
                        <span>{prescription.date}</span>
                      </div>
                    </td>

                    <td>
                      <div className="prescription-patient">

                        <img
                          src={prescription.image}
                          alt={prescription.patient}
                        />

                        <div>
                          <strong>{prescription.patient}</strong>
                          <span>{prescription.age} years</span>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="prescription-diagnosis">
                        {prescription.diagnosis}
                      </span>
                    </td>

                    <td>
                      <span className="prescription-medicines">
                        {prescription.medicines}
                      </span>
                    </td>

                    <td>
                      <span className="prescription-duration">
                        {prescription.duration}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`prescription-status ${prescription.status.toLowerCase()}`}
                      >
                        {prescription.status}
                      </span>
                    </td>

                    <td>
                      <div className="prescription-actions">
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

export default Prescriptions;