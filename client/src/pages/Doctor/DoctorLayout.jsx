import DoctorSidebar from "./DoctorSidebar";
import DoctorTopbar from "./DoctorTopbar";
import "./DoctorDashboard.css";

function DoctorLayout({ children }) {
  return (
    <div className="doctor-dashboard">
      <DoctorSidebar />

      <main className="doctor-main">
        <DoctorTopbar />

        {children}
      </main>
    </div>
  );
}

export default DoctorLayout;