import { useState } from "react";
import PatientLayout from "./PatientLayout";
import "./PatientMessages.css";

function PatientMessages() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: "General Physician",
      initials: "SW",
      time: "10:30 AM",
      message: "Your test results are ready. Please review them.",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Dr. Michael Brown",
      specialty: "Cardiologist",
      initials: "MB",
      time: "Yesterday",
      message: "Thank you for the update!",
      unread: 1,
      online: false,
    },
    {
      id: 3,
      name: "Dr. Emily Carter",
      specialty: "Dermatologist",
      initials: "EC",
      time: "25 Aug",
      message: "Please apply the cream as directed.",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "Dr. James Davis",
      specialty: "Orthopedic",
      initials: "JD",
      time: "20 Aug",
      message: "Your appointment is confirmed.",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      specialty: "Eye Specialist",
      initials: "LA",
      time: "15 Aug",
      message: "Let me know if you have any questions.",
      unread: 0,
      online: false,
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const chatMessages = [
    {
      id: 1,
      sender: "doctor",
      text: "Hello Alex, your test results are ready.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "doctor",
      text: "Please review the lab report and let me know if you have any questions.",
      time: "10:31 AM",
    },
    {
      id: 3,
      sender: "doctor",
      file: "Lab_Report_CBC.pdf",
      size: "2.4 MB",
      time: "10:32 AM",
    },
    {
      id: 4,
      sender: "patient",
      text: "Thank you, Doctor. I will review it and get back to you if I have any questions.",
      time: "10:35 AM",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    setMessage("");
  };

  return (
    <PatientLayout>
      <div className="patient-messages-page">

        {/* HEADER */}
        <div className="messages-page-header">
          <div>
            <h1>Messages</h1>
            <p>Chat with your doctors and healthcare team.</p>
          </div>

          <button className="new-message-button">
            <span>+</span>
            New Message
          </button>
        </div>

        {/* MESSAGES AREA */}
        <div className="messages-layout">

          {/* LEFT */}
          <section className="messages-list-panel">

            <div className="messages-search">
              <div className="search-input-wrapper">
                <span className="search-icon">⌕</span>

                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="doctor-conversations">
              {filteredDoctors.map((doctor) => (
                <button
                  key={doctor.id}
                  className={`doctor-conversation ${
                    selectedDoctor.id === doctor.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="conversation-avatar">
                    {doctor.initials}

                    {doctor.online && (
                      <span className="online-indicator"></span>
                    )}
                  </div>

                  <div className="conversation-content">
                    <div className="conversation-heading">
                      <strong>{doctor.name}</strong>
                      <span>{doctor.time}</span>
                    </div>

                    <div className="conversation-preview">
                      <p>{doctor.message}</p>

                      {doctor.unread > 0 && (
                        <span className="unread-count">
                          {doctor.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="connection-card">
              <div className="connection-icon">💬</div>

              <h3>Stay Connected</h3>

              <p>
                Message your doctors anytime and
                stay connected with your healthcare team.
              </p>
            </div>

          </section>

          {/* CENTER */}
          <section className="chat-panel">

            {/* CHAT HEADER */}
            <div className="chat-topbar">

              <div className="chat-doctor">
                <div className="chat-avatar">
                  {selectedDoctor.initials}

                  {selectedDoctor.online && (
                    <span className="online-indicator"></span>
                  )}
                </div>

                <div>
                  <h2>{selectedDoctor.name}</h2>

                  <p>
                    {selectedDoctor.specialty}

                    {selectedDoctor.online && (
                      <span className="online-label">
                        ● Online
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="chat-buttons">
                <button>☎</button>
                <button>▣</button>
                <button>⋮</button>
              </div>

            </div>

            {/* CHAT */}
            <div className="chat-body">

              <div className="today-label">
                Today
              </div>

              {chatMessages.map((item) => (
                <div
                  key={item.id}
                  className={`chat-message ${item.sender}`}
                >
                  {item.text && (
                    <div className="chat-bubble">
                      {item.text}
                    </div>
                  )}

                  {item.file && (
                    <div className="chat-file">

                      <div className="pdf-icon">
                        PDF
                      </div>

                      <div className="chat-file-info">
                        <strong>{item.file}</strong>
                        <span>{item.size}</span>
                      </div>

                      <button>↓</button>

                    </div>
                  )}

                  <span className="chat-time">
                    {item.time}

                    {item.sender === "patient" && (
                      <span className="read-status">
                        ✓✓
                      </span>
                    )}
                  </span>
                </div>
              ))}

            </div>

            {/* COMPOSER */}
            <form
              className="message-composer"
              onSubmit={handleSend}
            >
              <button
                type="button"
                className="composer-icon"
              >
                📎
              </button>

              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="button"
                className="composer-icon"
              >
                ☺
              </button>

              <button
                type="submit"
                className="send-message"
              >
                ➤
              </button>
            </form>

          </section>

          {/* RIGHT */}
          <aside className="doctor-details">

            <div className="doctor-details-card">

              <div className="large-doctor-avatar">
                {selectedDoctor.initials}
              </div>

              <h2>{selectedDoctor.name}</h2>

              <p>{selectedDoctor.specialty}</p>

              {selectedDoctor.online && (
                <div className="doctor-online-status">
                  <span></span>
                  Online
                </div>
              )}

              <div className="doctor-stat-row">

                <div>
                  <strong>120</strong>
                  <span>Patients</span>
                </div>

                <div>
                  <strong>4.8</strong>
                  <span>Rating</span>
                </div>

                <div>
                  <strong>5+</strong>
                  <span>Years Exp.</span>
                </div>

              </div>

              <button className="profile-button">
                View Profile
              </button>

              <button className="appointment-button">
                Book Appointment
              </button>

            </div>

            <div className="files-card">

              <h3>Recent Files</h3>

              <div className="recent-file">
                <div className="small-pdf">PDF</div>

                <div>
                  <strong>Lab_Report_CBC.pdf</strong>
                  <span>2.4 MB · 10:32 AM</span>
                </div>
              </div>

              <div className="recent-file">
                <div className="small-pdf">PDF</div>

                <div>
                  <strong>Prescription.pdf</strong>
                  <span>1.1 MB · 15 Aug</span>
                </div>
              </div>

              <div className="recent-file">
                <div className="small-pdf">PDF</div>

                <div>
                  <strong>Visit_Summary.pdf</strong>
                  <span>0.8 MB · 10 Aug</span>
                </div>
              </div>

            </div>

          </aside>

        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientMessages;