import { useState } from "react";

function DoctorTopbar() {
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const messages = [
    {
      name: "Priya Mehta",
      message: "Lab reports are ready",
      time: "10 min ago",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Amit Sharma",
      message: "Appointment rescheduled",
      time: "1 hour ago",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Neha Patel",
      message: "Thank you, Doctor!",
      time: "3 hours ago",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <header className="doctor-topbar">
      <div className="doctor-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search patients, appointments, or records..."
        />

        <span className="doctor-search-shortcut">
          Ctrl + K
        </span>
      </div>

      <div className="doctor-top-profile-wrapper">
        {/* NOTIFICATIONS */}
        <button
          className="doctor-notification"
          onClick={() => {
            setShowMessages(!showMessages);
            setShowProfile(false);
          }}
        >
          ♧
          <span>3</span>
        </button>

        {/* MESSAGE POPUP */}
        {showMessages && (
          <div className="doctor-message-popup">
            <div className="doctor-popup-header">
              <h3>Messages</h3>

              <button>View All</button>
            </div>

            {messages.map((message) => (
              <div
                className="doctor-popup-message"
                key={message.name}
              >
                <img
                  src={message.image}
                  alt={message.name}
                />

                <div>
                  <strong>{message.name}</strong>
                  <p>{message.message}</p>
                </div>

                <span>{message.time}</span>
              </div>
            ))}
          </div>
        )}

        {/* PROFILE */}
        <button
          className="doctor-profile-button"
          onClick={() => {
            setShowProfile(!showProfile);
            setShowMessages(false);
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=90"
            alt="Doctor Profile"
          />

          <div>
            <strong>Dr. Riyan Khan</strong>
            <p>Cardiologist</p>
          </div>

          <span className="doctor-dropdown">
            ⌄
          </span>
        </button>

        {/* PROFILE DROPDOWN */}
        {showProfile && (
          <div className="doctor-profile-dropdown">
            <button>
              <span>♙</span>
              My Profile
            </button>

            <button>
              <span>⚙</span>
              Settings
            </button>

            <button>
              <span>?</span>
              Help & Support
            </button>

            <div className="doctor-dropdown-divider"></div>

            <button className="doctor-logout">
              <span>⇥</span>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default DoctorTopbar;