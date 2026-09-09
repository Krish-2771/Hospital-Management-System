import { useState } from "react";
import DoctorLayout from "./DoctorLayout";
import "./Settings.css";

function Settings() {
  const [activeSection, setActiveSection] = useState("Account Settings");

  const [notifications, setNotifications] = useState({
    appointments: true,
    messages: true,
    prescriptions: true,
    updates: false,
    email: true,
    sms: false,
  });

  const toggleNotification = (name) => {
    setNotifications({
      ...notifications,
      [name]: !notifications[name],
    });
  };

  const settingItems = [
    { name: "Account Settings", icon: "♙" },
    { name: "Notification Preferences", icon: "♧" },
    { name: "Appearance", icon: "◉" },
    { name: "Privacy & Security", icon: "♢" },
    { name: "Connected Accounts", icon: "↗" },
    { name: "Language & Region", icon: "◎" },
    { name: "Help & Support", icon: "?" },
  ];

  return (
    <DoctorLayout>
      <div className="settings-page">

        {/* HEADER */}
        <section className="settings-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your account settings and preferences.</p>
          </div>
        </section>

        <div className="settings-layout">

          {/* SETTINGS MENU */}
          <aside className="settings-menu">
            {settingItems.map((item) => (
              <button
                key={item.name}
                className={
                  activeSection === item.name
                    ? "settings-menu-item active"
                    : "settings-menu-item"
                }
                onClick={() => setActiveSection(item.name)}
              >
                <span>{item.icon}</span>
                {item.name}
              </button>
            ))}
          </aside>

          {/* SETTINGS CONTENT */}
          <main className="settings-content">

            {/* ACCOUNT */}
            {activeSection === "Account Settings" && (
              <>
                <section className="settings-card account-card">

                  <div className="settings-card-heading">
                    <div className="settings-heading-icon">
                      ♙
                    </div>

                    <div>
                      <h2>Account Settings</h2>
                      <p>
                        Update your account information and preferences.
                      </p>
                    </div>
                  </div>

                  <div className="account-settings-grid">

                    <div className="settings-form">
                      <div className="settings-form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          defaultValue="Dr. Riyan Khan"
                        />
                      </div>

                      <div className="settings-form-group">
                        <label>Specialization</label>
                        <input
                          type="text"
                          defaultValue="Cardiologist"
                        />
                      </div>

                      <div className="settings-form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          defaultValue="riyan.khan@medicare.com"
                        />
                      </div>

                      <div className="settings-form-group">
                        <label>License Number</label>
                        <input
                          type="text"
                          defaultValue="DOC123456"
                        />
                      </div>

                      <div className="settings-form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          defaultValue="+91 98765 43210"
                        />
                      </div>

                      <div className="settings-form-group">
                        <label>Hospital / Clinic</label>
                        <input
                          type="text"
                          defaultValue="CareWell Hospital, New Delhi"
                        />
                      </div>
                    </div>

                    <div className="settings-profile-photo">
                      <img
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=250&q=90"
                        alt="Doctor Profile"
                      />

                      <button className="settings-camera-button">
                        ●
                      </button>

                      <strong>Profile Photo</strong>
                      <span>JPG, PNG (Max 2MB)</span>

                      <button className="settings-save-button">
                        Save Changes
                      </button>
                    </div>

                  </div>
                </section>

                {/* LOWER CARDS */}
                <div className="settings-two-column">

                  {/* NOTIFICATIONS */}
                  <section className="settings-card">

                    <div className="settings-card-heading">
                      <div className="settings-heading-icon">
                        ♧
                      </div>

                      <div>
                        <h2>Notification Preferences</h2>
                        <p>Choose how you want to be notified.</p>
                      </div>
                    </div>

                    <div className="notification-list">

                      <div className="notification-row">
                        <span>New Appointments</span>

                        <button
                          className={
                            notifications.appointments
                              ? "toggle active"
                              : "toggle"
                          }
                          onClick={() =>
                            toggleNotification("appointments")
                          }
                        >
                          <span></span>
                        </button>
                      </div>

                      <div className="notification-row">
                        <span>Patient Messages</span>

                        <button
                          className={
                            notifications.messages
                              ? "toggle active"
                              : "toggle"
                          }
                          onClick={() =>
                            toggleNotification("messages")
                          }
                        >
                          <span></span>
                        </button>
                      </div>

                      <div className="notification-row">
                        <span>Prescription Requests</span>

                        <button
                          className={
                            notifications.prescriptions
                              ? "toggle active"
                              : "toggle"
                          }
                          onClick={() =>
                            toggleNotification("prescriptions")
                          }
                        >
                          <span></span>
                        </button>
                      </div>

                      <div className="notification-row">
                        <span>System Updates</span>

                        <button
                          className={
                            notifications.updates
                              ? "toggle active"
                              : "toggle"
                          }
                          onClick={() =>
                            toggleNotification("updates")
                          }
                        >
                          <span></span>
                        </button>
                      </div>

                      <div className="notification-row">
                        <span>Email Notifications</span>

                        <button
                          className={
                            notifications.email
                              ? "toggle active"
                              : "toggle"
                          }
                          onClick={() =>
                            toggleNotification("email")
                          }
                        >
                          <span></span>
                        </button>
                      </div>

                      <div className="notification-row">
                        <span>SMS Notifications</span>

                        <button
                          className={
                            notifications.sms
                              ? "toggle active"
                              : "toggle"
                          }
                          onClick={() =>
                            toggleNotification("sms")
                          }
                        >
                          <span></span>
                        </button>
                      </div>

                    </div>
                  </section>

                  {/* APPEARANCE */}
                  <section className="settings-card">

                    <div className="settings-card-heading">
                      <div className="settings-heading-icon">
                        ◉
                      </div>

                      <div>
                        <h2>Appearance</h2>
                        <p>Customize your dashboard appearance.</p>
                      </div>
                    </div>

                    <div className="appearance-section">

                      <label>Theme</label>

                      <div className="theme-options">
                        <button className="selected">
                          ☀ Light
                        </button>

                        <button>☾ Dark</button>

                        <button>▣ System</button>
                      </div>

                      <label>Primary Color</label>

                      <div className="color-options">
                        <span className="color blue"></span>
                        <span className="color green"></span>
                        <span className="color purple"></span>
                        <span className="color red"></span>
                        <span className="color orange"></span>
                        <span className="color teal"></span>
                      </div>

                      <label>Font Size</label>

                      <select defaultValue="Medium">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>

                    </div>
                  </section>

                </div>

                {/* SECURITY + CONNECTED */}
                <div className="settings-two-column">

                  <section className="settings-card">

                    <div className="settings-card-heading">
                      <div className="settings-heading-icon">
                        ♢
                      </div>

                      <div>
                        <h2>Privacy & Security</h2>
                        <p>
                          Manage your privacy and security settings.
                        </p>
                      </div>
                    </div>

                    <div className="security-list">

                      <div className="security-row">
                        <div>
                          <strong>Two-Factor Authentication</strong>
                          <span>
                            Add an extra layer of security to your account.
                          </span>
                        </div>

                        <button>Enable</button>
                      </div>

                      <div className="security-row">
                        <div>
                          <strong>Login Activity</strong>
                          <span>
                            View your recent login activity.
                          </span>
                        </div>

                        <button>View</button>
                      </div>

                      <div className="security-row">
                        <div>
                          <strong>Data Privacy</strong>
                          <span>
                            Manage how your data is used.
                          </span>
                        </div>

                        <button>Manage</button>
                      </div>

                    </div>
                  </section>

                  <section className="settings-card">

                    <div className="settings-card-heading">
                      <div className="settings-heading-icon">
                        ↗
                      </div>

                      <div>
                        <h2>Connected Accounts</h2>
                        <p>
                          Manage your connected accounts and integrations.
                        </p>
                      </div>
                    </div>

                    <div className="connected-list">

                      <div className="connected-row">
                        <div className="connected-icon google">
                          G
                        </div>

                        <div>
                          <strong>Google Calendar</strong>
                          <span>Sync your appointments</span>
                        </div>

                        <button>Connect</button>
                      </div>

                      <div className="connected-row">
                        <div className="connected-icon outlook">
                          O
                        </div>

                        <div>
                          <strong>Outlook Calendar</strong>
                          <span>Sync your appointments</span>
                        </div>

                        <button>Connect</button>
                      </div>

                      <div className="connected-row">
                        <div className="connected-icon zoom">
                          Z
                        </div>

                        <div>
                          <strong>Zoom</strong>
                          <span>For video consultations</span>
                        </div>

                        <button>Connect</button>
                      </div>

                    </div>
                  </section>

                </div>

              </>
            )}

            {/* OTHER SECTIONS */}
            {activeSection !== "Account Settings" && (
              <section className="settings-placeholder">
                <div className="settings-placeholder-icon">
                  ⚙
                </div>

                <h2>{activeSection}</h2>

                <p>
                  This section is prepared for future configuration.
                </p>
              </section>
            )}

          </main>
        </div>
      </div>
    </DoctorLayout>
  );
}

export default Settings;