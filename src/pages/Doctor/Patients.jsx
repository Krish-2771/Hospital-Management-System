import DoctorLayout from "./DoctorLayout";
import "./Patients.css";

function Patients() {
  const patients = [
    {
      name: "Amit Sharma",
      age: 34,
      gender: "Male",
      blood: "O+",
      condition: "Hypertension",
      lastVisit: "Today",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Priya Mehta",
      age: 28,
      gender: "Female",
      blood: "B+",
      condition: "Migraine",
      lastVisit: "Today",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Rohit Verma",
      age: 45,
      gender: "Male",
      blood: "A+",
      condition: "Chest Pain",
      lastVisit: "Yesterday",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Sneha Kapoor",
      age: 31,
      gender: "Female",
      blood: "AB+",
      condition: "Diabetes",
      lastVisit: "2 days ago",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Vikram Singh",
      age: 52,
      gender: "Male",
      blood: "O-",
      condition: "Heart Disease",
      lastVisit: "3 days ago",
      status: "Follow-up",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Neha Patel",
      age: 26,
      gender: "Female",
      blood: "B-",
      condition: "Fever",
      lastVisit: "5 days ago",
      status: "Recovered",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <DoctorLayout>
      <div className="patients-page">

        {/* HEADER */}
        <section className="patients-header">
          <div>
            <h1>Patients</h1>
            <p>
              Manage your patients and access their medical information.
            </p>
          </div>

          <button className="patients-add-button">
            + Add Patient
          </button>
        </section>

        {/* STATISTICS */}
        <section className="patients-stats">

          <div className="patient-stat-card blue">
            <div className="patient-stat-icon">♟</div>
            <div>
              <h2>248</h2>
              <p>Total Patients</p>
            </div>
          </div>

          <div className="patient-stat-card green">
            <div className="patient-stat-icon">●</div>
            <div>
              <h2>186</h2>
              <p>Active Patients</p>
            </div>
          </div>

          <div className="patient-stat-card yellow">
            <div className="patient-stat-icon">◷</div>
            <div>
              <h2>42</h2>
              <p>Follow-ups</p>
            </div>
          </div>

          <div className="patient-stat-card pink">
            <div className="patient-stat-icon">♥</div>
            <div>
              <h2>20</h2>
              <p>Recovered</p>
            </div>
          </div>

        </section>

        {/* PATIENT LIST */}
        <section className="patients-card">

          <div className="patients-card-header">
            <div>
              <h2>All Patients</h2>
              <p>Recently added and active patients</p>
            </div>

            <button className="patients-filter-button">
              Filter
            </button>
          </div>

          {/* SEARCH */}
          <div className="patients-toolbar">

            <div className="patients-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search patients by name..."
              />
            </div>

            <select defaultValue="All Patients">
              <option>All Patients</option>
              <option>Active</option>
              <option>Follow-up</option>
              <option>Recovered</option>
            </select>

            <select defaultValue="All Conditions">
              <option>All Conditions</option>
              <option>Hypertension</option>
              <option>Diabetes</option>
              <option>Heart Disease</option>
              <option>Migraine</option>
            </select>

          </div>

          {/* TABLE */}
          <div className="patients-table-wrapper">

            <table className="patients-table">

              <thead>
                <tr>
                  <th>PATIENT</th>
                  <th>AGE / GENDER</th>
                  <th>BLOOD GROUP</th>
                  <th>CONDITION</th>
                  <th>LAST VISIT</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.name}>

                    <td>
                      <div className="patient-info">

                        <img
                          src={patient.image}
                          alt={patient.name}
                        />

                        <div>
                          <strong>{patient.name}</strong>
                          <span>Patient ID: CW-{patient.age}21</span>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="patient-basic-info">
                        {patient.age} / {patient.gender}
                      </span>
                    </td>

                    <td>
                      <span className="blood-group">
                        {patient.blood}
                      </span>
                    </td>

                    <td>
                      <span className="patient-condition">
                        {patient.condition}
                      </span>
                    </td>

                    <td>
                      <span className="patient-last-visit">
                        {patient.lastVisit}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`patient-status ${patient.status
                          .toLowerCase()
                          .replace("-", "")}`}
                      >
                        {patient.status}
                      </span>
                    </td>

                    <td>
                      <button className="patient-view-button">
                        View
                      </button>
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

export default Patients;