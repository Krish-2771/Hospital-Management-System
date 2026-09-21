import { useLocation, useNavigate } from "react-router-dom";

function PatientSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: "⌂", path: "/patientdashboard" },
    { name: "Appointments", icon: "▣", path: "/patient/appointments" },
    { name: "My Doctors", icon: "♟", path: "/patient/doctors" },
    { name: "Prescriptions", icon: "▤", path: "/patient/prescriptions" },
    { name: "Medical Records", icon: "□", path: "/patient/records" },
    { name: "Lab Reports", icon: "⚗", path: "/patient/lab-reports" },
    { name: "Messages", icon: "◌", path: "/patient/messages", badge: 2 },
    { name: "My Profile", icon: "●", path: "/patient/profile" },
    { name: "Settings", icon: "⚙", path: "/patient/settings" },
  ];

  return (
    <aside className="patient-sidebar">
      <div className="patient-logo">
        <div className="patient-logo-icon">♥</div>

        <div>
          <h2>MediCare+</h2>
          <p>Patient Portal</p>
        </div>
      </div>

      <nav className="patient-navigation">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`patient-nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            <span className="patient-nav-icon">{item.icon}</span>

            <span>{item.name}</span>

            {item.badge && (
              <span className="patient-message-badge">{item.badge}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="patient-sidebar-quote">
        <div className="patient-heart-icon">♥</div>

        <p>
          "Your Health,
          <br />
          Our Priority."
        </p>
      </div>
    </aside>
  );
}

export default PatientSidebar;