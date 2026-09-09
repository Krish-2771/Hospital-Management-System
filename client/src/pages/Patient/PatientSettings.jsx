import { useState } from "react";
import PatientLayout from "./PatientLayout";
import "./PatientSettings.css";

function PatientSettings() {
  const [notifications, setNotifications] = useState({
    appointments: true,
    prescriptions: true,
    labReports: true,
    messages: true,
    healthTips: false,
  });

  const toggleNotification = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <PatientLayout>
      <div className="patient-settings-page">

        {/* HEADER */}
        <div className="settings-page-header">
          <div>
            <h1>Settings</h1>
            <p>
              Manage your account preferences and security settings.
            </p>
          </div>
        </div>

        {/* SETTINGS LAYOUT */}
        <div className="settings-layout">

          {/* LEFT SETTINGS MENU */}
          <aside className="settings-menu">

            <button className="settings-menu-item active">
              <span>⚙</span>
              <div>
                <strong>General</strong>
                <small>Basic account settings</small>
              </div>
            </button>

            <button className="settings-menu-item">
              <span>♧</span>
              <div>
                <strong>Notifications</strong>
                <small>Manage your preferences</small>
              </div>
            </button>

            <button className="settings-menu-item">
              <span>♙</span>
              <div>
                <strong>Privacy & Security</strong>
                <small>Protect your data</small>
              </div>
            </button>

            <button className="settings-menu-item">
              <span>↗</span>
              <div>
                <strong>Connected Accounts</strong>
                <small>Manage integrations</small>
              </div>
            </button>

            <button className="settings-menu-item">
              <span>◎</span>
              <div>
                <strong>Language & Region</strong>
                <small>Set your language and location</small>
              </div>
            </button>

            <button className="settings-menu-item">
              <span>♿</span>
              <div>
                <strong>Accessibility</strong>
                <small>Personalize your experience</small>
              </div>
            </button>

            <button className="settings-menu-item">
              <span>?</span>
              <div>
                <strong>Help & Support</strong>
                <small>Get help and resources</small>
              </div>
            </button>

            <div className="settings-privacy-card">
              <div className="privacy-shield">✚</div>

              <h3>Your Privacy</h3>
              <h3>Our Priority</h3>

              <p>
                We keep your personal information
                safe and secure.
              </p>
            </div>

          </aside>

          {/* CENTER */}
          <main className="settings-main">

            {/* ACCOUNT INFORMATION */}
            <section className="settings-card account-settings-card">

              <div className="settings-card-header">
                <div className="settings-title">
                  <span>♙</span>
                  <h2>Account Information</h2>
                </div>

                <button className="settings-edit-button">
                  Edit
                </button>
              </div>

              <div className="settings-profile">

                <div className="settings-avatar">
                  AK
                  <button>📷</button>
                </div>

                <div>
                  <h3>Alex Kumar</h3>
                  <p>Patient ID: PT001245</p>
                </div>

              </div>

              <div className="account-details-grid">

                <div>
                  <span>✉</span>
                  <label>Email</label>
                  <strong>alex.kumar@email.com</strong>
                </div>

                <div>
                  <span>☎</span>
                  <label>Phone</label>
                  <strong>+91 98765 43210</strong>
                </div>

                <div>
                  <span>▣</span>
                  <label>Date of Birth</label>
                  <strong>15 March 1996</strong>
                </div>

                <div>
                  <span>♙</span>
                  <label>Gender</label>
                  <strong>Male</strong>
                </div>

              </div>

            </section>

            {/* NOTIFICATION PREFERENCES */}
            <section className="settings-card notification-card">

              <div className="settings-title">
                <span>♧</span>

                <div>
                  <h2>Notification Preferences</h2>
                  <p>
                    Choose what notifications you want to receive.
                  </p>
                </div>
              </div>

              <div className="notification-list">

                <div className="notification-item">
                  <div className="notification-icon">▣</div>

                  <div className="notification-text">
                    <strong>Appointment Reminders</strong>
                    <span>
                      Get notified about upcoming appointments
                    </span>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.appointments ? "on" : ""
                    }`}
                    onClick={() =>
                      toggleNotification("appointments")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon">▤</div>

                  <div className="notification-text">
                    <strong>Prescription Updates</strong>
                    <span>
                      Receive alerts for new prescriptions
                    </span>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.prescriptions ? "on" : ""
                    }`}
                    onClick={() =>
                      toggleNotification("prescriptions")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon">♧</div>

                  <div className="notification-text">
                    <strong>Lab Report Results</strong>
                    <span>
                      Get notified when lab results are available
                    </span>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.labReports ? "on" : ""
                    }`}
                    onClick={() =>
                      toggleNotification("labReports")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon">✉</div>

                  <div className="notification-text">
                    <strong>Messages</strong>
                    <span>
                      Receive notifications for new messages
                    </span>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.messages ? "on" : ""
                    }`}
                    onClick={() =>
                      toggleNotification("messages")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon">♡</div>

                  <div className="notification-text">
                    <strong>Health Tips & Updates</strong>
                    <span>
                      Get personalized health tips and updates
                    </span>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.healthTips ? "on" : ""
                    }`}
                    onClick={() =>
                      toggleNotification("healthTips")
                    }
                  >
                    <span></span>
                  </button>
                </div>

              </div>

            </section>

            {/* LANGUAGE */}
            <section className="settings-card language-card">

              <div className="settings-title">
                <span>◎</span>

                <div>
                  <h2>Language & Region</h2>
                </div>
              </div>

              <div className="language-fields">

                <div>
                  <label>Language</label>

                  <select defaultValue="English (US)">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Hindi</option>
                    <option>Gujarati</option>
                  </select>
                </div>

                <div>
                  <label>Time Zone</label>

                  <select defaultValue="India Standard Time">
                    <option>India Standard Time</option>
                    <option>GMT +05:30</option>
                    <option>UTC</option>
                  </select>
                </div>

              </div>

            </section>

          </main>

          {/* RIGHT */}
          <aside className="settings-right">

            {/* CHANGE PASSWORD */}
            <section className="settings-card password-card">

              <div className="settings-title">
                <span>♙</span>

                <div>
                  <h2>Change Password</h2>
                  <p>
                    Keep your account secure with a strong password.
                  </p>
                </div>
              </div>

              <div className="password-fields">

                <label>Current Password</label>

                <div className="password-input">
                  <input
                    type="password"
                    placeholder="Enter current password"
                  />
                  <span>◉</span>
                </div>

                <label>New Password</label>

                <div className="password-input">
                  <input
                    type="password"
                    placeholder="Enter new password"
                  />
                  <span>◉</span>
                </div>

                <label>Confirm New Password</label>

                <div className="password-input">
                  <input
                    type="password"
                    placeholder="Confirm new password"
                  />
                  <span>◉</span>
                </div>

                <button className="update-password-button">
                  Update Password
                </button>

              </div>

            </section>

            {/* PRIVACY */}
            <section className="settings-card security-card">

              <div className="settings-title">
                <span>♙</span>

                <div>
                  <h2>Privacy & Security</h2>
                  <p>
                    Manage your privacy settings and data.
                  </p>
                </div>
              </div>

              <button className="security-item">
                <span>◉</span>

                <div>
                  <strong>Profile Visibility</strong>
                  <small>
                    Make your profile visible to doctors only
                  </small>
                </div>

                <b>›</b>
              </button>

              <button className="security-item">
                <span>▣</span>

                <div>
                  <strong>Data Sharing</strong>
                  <small>
                    Manage how your data is shared
                  </small>
                </div>

                <b>›</b>
              </button>

              <button className="security-item">
                <span>♢</span>

                <div>
                  <strong>Two-Factor Authentication</strong>
                  <small>
                    Add an extra layer of security
                  </small>
                </div>

                <em>Disabled</em>
                <b>›</b>
              </button>

              <button className="security-item">
                <span>↓</span>

                <div>
                  <strong>Download My Data</strong>
                  <small>
                    Get a copy of your personal data
                  </small>
                </div>

                <b>›</b>
              </button>

              <button className="security-item delete">
                <span>♙</span>

                <div>
                  <strong>Delete Account</strong>
                  <small>
                    Permanently delete your account
                  </small>
                </div>

                <b>›</b>
              </button>

            </section>

            {/* QUICK ACTIONS */}
            <section className="settings-card quick-actions">

              <div className="settings-title">
                <span>ϟ</span>
                <h2>Quick Actions</h2>
              </div>

              <div className="quick-action-buttons">

                <button>
                  ↓ Download My Data
                </button>

                <button className="delete-action">
                  ♙ Delete Account
                </button>

              </div>

            </section>

          </aside>

        </div>

      </div>
    </PatientLayout>
  );
}

export default PatientSettings;