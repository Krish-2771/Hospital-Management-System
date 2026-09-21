import DoctorLayout from "./DoctorLayout";
import "./Appointments.css";

function Appointments() {
  const appointments = [
    {
      time: "09:00 AM",
      name: "Amit Sharma",
      age: "34",
      gender: "Male",
      type: "General Checkup",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "10:30 AM",
      name: "Priya Mehta",
      age: "28",
      gender: "Female",
      type: "Follow-up",
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "12:00 PM",
      name: "Rohit Verma",
      age: "45",
      gender: "Male",
      type: "Chest Pain",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "02:00 PM",
      name: "Sneha Kapoor",
      age: "31",
      gender: "Female",
      type: "Consultation",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "04:00 PM",
      name: "Vikram Singh",
      age: "52",
      gender: "Male",
      type: "ECG Review",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "05:30 PM",
      name: "Kavita Singh",
      age: "39",
      gender: "Female",
      type: "Blood Pressure",
      status: "Cancelled",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <DoctorLayout>
      <div className="appointments-page">

        {/* PAGE HEADER */}
        <section className="appointments-header">
          <div>
            <h1>Appointments</h1>
            <p>
              Manage your appointments, view patient details, and stay on
              schedule.
            </p>
          </div>

          <button className="appointments-add-button">
            + Add Appointment
          </button>
        </section>

        {/* STATISTICS */}
        <section className="appointments-stats">

          <div className="appointment-stat-card blue">
            <div className="appointment-stat-icon">▣</div>

            <div>
              <h2>12</h2>
              <p>Today's Appointments</p>
            </div>
          </div>

          <div className="appointment-stat-card green">
            <div className="appointment-stat-icon">✓</div>

            <div>
              <h2>8</h2>
              <p>Completed</p>
            </div>
          </div>

          <div className="appointment-stat-card yellow">
            <div className="appointment-stat-icon">◷</div>

            <div>
              <h2>3</h2>
              <p>Upcoming</p>
            </div>
          </div>

          <div className="appointment-stat-card pink">
            <div className="appointment-stat-icon">✕</div>

            <div>
              <h2>1</h2>
              <p>Cancelled</p>
            </div>
          </div>

        </section>

        {/* APPOINTMENT CARD */}
        <section className="appointments-card">

          {/* TABS */}
          <div className="appointments-tabs">
            <button className="active">All Appointments</button>
            <button>Today</button>
            <button>Upcoming</button>
            <button>Completed</button>
            <button>Cancelled</button>

            <select defaultValue="Mon, 3 Sep 2025">
              <option>Mon, 3 Sep 2025</option>
              <option>Tue, 4 Sep 2025</option>
              <option>Wed, 5 Sep 2025</option>
            </select>
          </div>

          {/* FILTERS */}
          <div className="appointments-filters">

            <div className="appointment-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search by patient name..."
              />
            </div>

            <select defaultValue="All Status">
              <option>All Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Upcoming</option>
              <option>Cancelled</option>
            </select>

            <select defaultValue="All Types">
              <option>All Types</option>
              <option>General Checkup</option>
              <option>Follow-up</option>
              <option>Consultation</option>
              <option>ECG Review</option>
            </select>

          </div>

          {/* TABLE */}
          <div className="appointments-table-wrapper">

            <table className="appointments-table">

              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PATIENT</th>
                  <th>TYPE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.time}>

                    <td>
                      <strong>{appointment.time}</strong>
                    </td>

                    <td>
                      <div className="appointment-patient-info">

                        <img
                          src={appointment.image}
                          alt={appointment.name}
                        />

                        <div>
                          <strong>{appointment.name}</strong>

                          <span>
                            {appointment.age} • {appointment.gender}
                          </span>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="appointment-type">
                        {appointment.type}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`appointment-status ${appointment.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td>
                      <div className="appointment-actions">
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

export default Appointments;