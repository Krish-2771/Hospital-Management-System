import PatientSidebar from "./PatientSidebar";
import "./PatientLayout.css";

function PatientLayout({ children }) {
  return (
    <div className="patient-layout">
      <PatientSidebar />

      <main className="patient-main">
        <header className="patient-topbar">
          <div className="patient-topbar-left">
            <h2>Patient Portal</h2>
            <p>Manage your health, appointments and records</p>
          </div>

          <div className="patient-topbar-right">
            <button className="patient-notification-button">🔔</button>

            <div className="patient-user">
              <div className="patient-user-avatar">AK</div>

              <div className="patient-user-info">
                <strong>Alex Kumar</strong>
                <span>Patient</span>
              </div>
            </div>
          </div>
        </header>

        <div className="patient-content">{children}</div>
      </main>
    </div>
  );
}

export default PatientLayout;