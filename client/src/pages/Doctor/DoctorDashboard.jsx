import DoctorLayout from "./DoctorLayout";

function DoctorDashboard() {
  const appointments = [
    {
      time: "09:00 AM",
      name: "Amit Sharma",
      type: "General Checkup",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "10:30 AM",
      name: "Priya Mehta",
      type: "Follow-up",
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "12:00 PM",
      name: "Rohit Verma",
      type: "Chest Pain",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "02:00 PM",
      name: "Sneha Kapoor",
      type: "Consultation",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
      time: "04:00 PM",
      name: "Vikram Singh",
      type: "ECG Review",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const recentPatients = [
    {
      name: "Neha Patel",
      type: "Fever",
      time: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Arjun Malhotra",
      type: "Follow-up",
      time: "4 hours ago",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Kavita Singh",
      type: "Consultation",
      time: "6 hours ago",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const chartData = [20, 26, 18, 26, 34, 23, 18];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <DoctorLayout>
      {/* WELCOME */}
      <section className="doctor-welcome">
        <div>
          <h1>
            Welcome Back, <span>Dr. Riyan!</span>
          </h1>

          <p>
            Your care makes a difference. Here's what's happening today.
          </p>
        </div>

        <div className="doctor-welcome-quote">
          "Good doctors treat diseases,
          <br />
          <strong>Great doctors treat people.</strong>"
        </div>
      </section>

      {/* STATISTICS */}
      <section className="doctor-stat-grid">
        <div className="doctor-stat-card blue">
          <div className="doctor-stat-icon">▣</div>

          <div>
            <h2>12</h2>
            <p>Appointments</p>
            <span>Today</span>
          </div>
        </div>

        <div className="doctor-stat-card green">
          <div className="doctor-stat-icon">♟</div>

          <div>
            <h2>28</h2>
            <p>Total Patients</p>
            <span>This Month</span>
          </div>
        </div>

        <div className="doctor-stat-card yellow">
          <div className="doctor-stat-icon">▤</div>

          <div>
            <h2>16</h2>
            <p>Prescriptions</p>
            <span>This Week</span>
          </div>
        </div>

        <div className="doctor-stat-card pink">
          <div className="doctor-stat-icon">♥</div>

          <div>
            <h2>98%</h2>
            <p>Patient Satisfaction</p>
            <span>This Month</span>
          </div>
        </div>
      </section>

      {/* MIDDLE */}
      <section className="doctor-middle-grid">
        {/* APPOINTMENTS */}
        <div className="doctor-card appointments-card">
          <div className="doctor-card-header">
            <h2>Today's Appointments</h2>

            <button>View All</button>
          </div>

          <div className="appointment-list">
            {appointments.map((appointment) => (
              <div
                className="appointment-row"
                key={appointment.time}
              >
                <div className="appointment-time">
                  {appointment.time}
                </div>

                <img
                  src={appointment.image}
                  alt={appointment.name}
                />

                <div className="appointment-patient">
                  <strong>{appointment.name}</strong>
                  <p>{appointment.type}</p>
                </div>

                <span
                  className={`appointment-status ${appointment.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PATIENT OVERVIEW */}
        <div className="doctor-card overview-card">
          <div className="doctor-card-header">
            <h2>Patients Overview</h2>

            <select defaultValue="This Month">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="chart">
            <div className="chart-lines">
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>

            <div className="chart-bars">
              {chartData.map((value, index) => (
                <div
                  className="chart-column"
                  key={days[index]}
                >
                  <div
                    className="chart-bar"
                    style={{
                      height: `${value * 3}px`,
                    }}
                  ></div>

                  <span>{days[index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overview-stats">
            <div>
              <span>●</span>

              <div>
                <strong>125</strong>
                <p>New Patients</p>
              </div>
            </div>

            <div>
              <span>●</span>

              <div>
                <strong>320</strong>
                <p>Total Visits</p>
              </div>
            </div>

            <div>
              <span>♥</span>

              <div>
                <strong>98%</strong>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="doctor-bottom-grid">
        {/* RECENT PATIENTS */}
        <div className="doctor-card recent-card">
          <div className="doctor-card-header">
            <h2>Recent Patients</h2>

            <button>View All</button>
          </div>

          <div className="recent-patient-list">
            {recentPatients.map((patient) => (
              <div
                className="recent-patient"
                key={patient.name}
              >
                <img
                  src={patient.image}
                  alt={patient.name}
                />

                <div>
                  <strong>{patient.name}</strong>
                  <p>{patient.type}</p>
                </div>

                <span>{patient.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="doctor-card quick-card">
          <div className="doctor-card-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="quick-actions">
            <button className="quick-blue">
              <span>♟</span>
              Add Patient
            </button>

            <button className="quick-green">
              <span>▤</span>
              New Prescription
            </button>

            <button className="quick-yellow">
              <span>▥</span>
              View Reports
            </button>

            <button className="quick-pink">
              <span>▣</span>
              Send Message
            </button>
          </div>
        </div>

        {/* TASKS */}
        <div className="doctor-card tasks-card">
          <div className="doctor-card-header">
            <h2>Tasks & Reminders</h2>

            <button>View All</button>
          </div>

          <div className="task-list">
            <label>
              <input type="checkbox" />
              <span>Review lab reports (3)</span>
            </label>

            <label>
              <input
                type="checkbox"
                defaultChecked
              />
              <span>Follow up with Priya Mehta</span>
            </label>

            <label>
              <input type="checkbox" />
              <span>Update patient records</span>
            </label>

            <label>
              <input type="checkbox" />
              <span>Prepare for tomorrow's cases</span>
            </label>

            <label>
              <input type="checkbox" />
              <span>Read new medical guidelines</span>
            </label>
          </div>
        </div>
      </section>
    </DoctorLayout>
  );
}

export default DoctorDashboard;