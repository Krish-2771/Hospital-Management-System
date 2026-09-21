import { useNavigate, useLocation } from "react-router-dom";

function DoctorSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: "⌂",
      path: "/doctordashboard",
    },
    {
      name: "Appointments",
      icon: "▣",
      path: "/doctor/appointments",
    },
    {
      name: "Patients",
      icon: "♟",
      path: "/doctor/patients",
    },
    {
      name: "Prescriptions",
      icon: "▤",
      path: "/doctor/prescriptions",
    },
    {
      name: "Medical Records",
      icon: "□",
      path: "/doctor/records",
    },
    {
      name: "Messages",
      icon: "◌",
      path: "/doctor/messages",
      badge: 3,
    },
    {
      name: "Profile",
      icon: "●",
      path: "/doctor/profile",
    },
    {
      name: "Settings",
      icon: "⚙",
      path: "/doctor/settings",
    },
  ];

  return (
    <aside className="doctor-sidebar">
      <div className="doctor-logo">
        <div className="doctor-logo-icon">♥</div>

        <div>
          <h2>MediCare+</h2>
          <p>Care Today, Healthier Tomorrow</p>
        </div>
      </div>

      <nav className="doctor-navigation">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`doctor-nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            <span className="doctor-nav-icon">
              {item.icon}
            </span>

            <span>{item.name}</span>

            {item.badge && (
              <span className="doctor-message-badge">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="doctor-sidebar-quote">
        <div className="doctor-stethoscope">♧</div>

        <p>
          "Healing
          <br />
          People,
          <br />
          Changing
          <br />
          Lives."
        </p>
      </div>
    </aside>
  );
}

export default DoctorSidebar;