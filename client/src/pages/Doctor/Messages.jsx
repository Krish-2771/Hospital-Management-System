import { useState } from "react";
import DoctorLayout from "./DoctorLayout";
import "./Messages.css";

function Messages() {
  const [selectedPatient, setSelectedPatient] = useState(0);

  const conversations = [
    {
      name: "Priya Mehta",
      message: "Doctor, my lab reports are ready.",
      time: "10:24 AM",
      unread: 2,
      online: true,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Amit Sharma",
      message: "Thank you Doctor, I feel much better.",
      time: "09:45 AM",
      unread: 0,
      online: true,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Neha Patel",
      message: "Can I reschedule my appointment?",
      time: "Yesterday",
      unread: 1,
      online: false,
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Rohit Verma",
      message: "I have attached my ECG report.",
      time: "Yesterday",
      unread: 0,
      online: false,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Sneha Kapoor",
      message: "Should I continue the medication?",
      time: "Monday",
      unread: 0,
      online: true,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const handleConversationClick = (index) => {
    setSelectedPatient(index);
  };

  const selected = conversations[selectedPatient];

  return (
    <DoctorLayout>
      <div className="messages-page">

        {/* HEADER */}
        <section className="messages-header">
          <div>
            <h1>Messages</h1>
            <p>
              Communicate securely with your patients and manage conversations.
            </p>
          </div>

          <button className="new-message-button">
            + New Message
          </button>
        </section>

        {/* MESSAGE CONTAINER */}
        <section className="messages-container">

          {/* CONVERSATION SIDEBAR */}
          <div className="conversation-sidebar">

            <div className="conversation-header">
              <div>
                <h2>Conversations</h2>
                <span>12 conversations</span>
              </div>

              <button>•••</button>
            </div>

            {/* SEARCH */}
            <div className="conversation-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search conversations..."
              />
            </div>

            {/* CONVERSATIONS */}
            <div className="conversation-list">

              {conversations.map((conversation, index) => (
                <button
                  className={`conversation-item ${
                    selectedPatient === index ? "active" : ""
                  }`}
                  key={conversation.name}
                  onClick={() => handleConversationClick(index)}
                >
                  <div className="conversation-image">
                    <img
                      src={conversation.image}
                      alt={conversation.name}
                    />

                    {conversation.online && (
                      <span className="online-dot"></span>
                    )}
                  </div>

                  <div className="conversation-content">

                    <div className="conversation-top">
                      <strong>{conversation.name}</strong>
                      <span>{conversation.time}</span>
                    </div>

                    <div className="conversation-bottom">
                      <p>{conversation.message}</p>

                      {/* HIDE UNREAD NUMBER FOR OPEN CHAT */}
                      {conversation.unread > 0 &&
                        selectedPatient !== index && (
                          <span className="unread-badge">
                            {conversation.unread}
                          </span>
                        )}
                    </div>

                  </div>
                </button>
              ))}

            </div>
          </div>

          {/* CHAT AREA */}
          <div className="chat-area">

            {/* CHAT HEADER */}
            <div className="chat-header">

              <div className="chat-patient">

                <div className="chat-patient-image">
                  <img
                    src={selected.image}
                    alt={selected.name}
                  />

                  {selected.online && (
                    <span className="chat-online-dot"></span>
                  )}
                </div>

                <div>
                  <strong>{selected.name}</strong>

                  <span>
                    {selected.online ? "Online" : "Offline"} • Patient
                  </span>
                </div>

              </div>

              <div className="chat-actions">
                <button>⌕</button>
                <button>⋮</button>
              </div>

            </div>

            {/* CHAT BODY */}
            <div className="chat-body">

              <div className="chat-date">
                <span>Today</span>
              </div>

              <div className="message received">
                <img
                  src={selected.image}
                  alt={selected.name}
                />

                <div>
                  <p>
                    Good morning Doctor. I wanted to let you know that
                    my lab reports are ready.
                  </p>

                  <span>10:18 AM</span>
                </div>
              </div>

              <div className="message sent">
                <div>
                  <p>
                    Good morning {selected.name}. Please send the reports
                    here so I can review them.
                  </p>

                  <span>10:20 AM</span>
                </div>
              </div>

              <div className="message received">
                <img
                  src={selected.image}
                  alt={selected.name}
                />

                <div>
                  <p>
                    Sure Doctor. I have attached them. Please let me know
                    if anything needs attention.
                  </p>

                  <span>10:24 AM</span>
                </div>
              </div>

              {/* FILE */}
              <div className="message-file">

                <div className="file-icon">
                  ▤
                </div>

                <div>
                  <strong>Lab_Report_September.pdf</strong>
                  <span>2.4 MB • PDF Document</span>
                </div>

                <button>↓</button>

              </div>

            </div>

            {/* MESSAGE INPUT */}
            <div className="message-input-area">

              <div className="message-input">

                <button>＋</button>

                <input
                  type="text"
                  placeholder="Type your message..."
                />

                <button>☺</button>

              </div>

              <button className="send-message-button">
                ➤
              </button>

            </div>

          </div>

        </section>

      </div>
    </DoctorLayout>
  );
}

export default Messages;