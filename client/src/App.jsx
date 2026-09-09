import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Doctor Module
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Appointments from "./pages/doctor/Appointments";
import Patients from "./pages/doctor/Patients";
import Prescriptions from "./pages/doctor/Prescriptions";
import MedicalRecords from "./pages/doctor/MedicalRecords";
import Messages from "./pages/doctor/Messages";
import Profile from "./pages/doctor/Profile";
import Settings from "./pages/doctor/Settings";

// Patient Module
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientAppointments from "./pages/patient/PatientAppointments";
import PatientDoctors from "./pages/patient/PatientDoctors";
import PatientPrescriptions from "./pages/patient/PatientPrescriptions";
import PatientMedicalRecords from "./pages/patient/PatientMedicalRecords";
import PatientLabReports from "./pages/patient/PatientLabReports";
import PatientMessages from "./pages/patient/PatientMessages";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientSettings from "./pages/patient/PatientSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN WEBSITE */}
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DOCTOR MODULE */}
        <Route
          path="/doctordashboard"
          element={<DoctorDashboard />}
        />

        <Route
          path="/doctor/appointments"
          element={<Appointments />}
        />

        <Route
          path="/doctor/patients"
          element={<Patients />}
        />

        <Route
          path="/doctor/prescriptions"
          element={<Prescriptions />}
        />

        <Route
          path="/doctor/records"
          element={<MedicalRecords />}
        />

        <Route
          path="/doctor/messages"
          element={<Messages />}
        />

        <Route
          path="/doctor/profile"
          element={<Profile />}
        />

        <Route
          path="/doctor/settings"
          element={<Settings />}
        />

        {/* PATIENT MODULE */}
        <Route
          path="/patientdashboard"
          element={<PatientDashboard />}
        />

        <Route
          path="/patient/appointments"
          element={<PatientAppointments />}
        />

        <Route
          path="/patient/doctors"
          element={<PatientDoctors />}
        />

        <Route
          path="/patient/prescriptions"
          element={<PatientPrescriptions />}
        />

        <Route
          path="/patient/records"
          element={<PatientMedicalRecords />}
        />

        <Route
          path="/patient/lab-reports"
          element={<PatientLabReports />}
        />

        <Route
          path="/patient/messages"
          element={<PatientMessages />}
        />

        <Route
          path="/patient/profile"
          element={<PatientProfile />}
        />

        <Route
          path="/patient/settings"
          element={<PatientSettings />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;