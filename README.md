#Hospital Management System (HMS)

A modern, secure, full-stack Hospital Management System with role-based dashboards for Admin, Doctor, and Patient. Built as a scalable, modular MERN-stack application suitable for real-world hospital operations.

-> ##Objectives## :
Manage hospital, department, and facility information.
Manage doctors, their profiles, schedules, and availability.
Manage patient registration, profiles, and medical history.
Enable patients to search doctors and book appointments.
Enable doctors to manage appointments, records, and prescriptions.
Provide secure, role-based authentication and authorization.
Provide statistics, analytics, and reporting for administrators.
Provide notifications for key events across the system.
Ensure secure handling of sensitive medical information at every layer.

-> Features :
Role-based dashboards (Admin / Doctor / Patient)
Doctor and patient CRUD management
Doctor availability & schedule configuration (days, hours, breaks, leave)
Appointment booking with real-time slot availability
Appointment lifecycle management (pending → confirmed → completed / cancelled / rescheduled / no-show)
Medical history and medical records
Digital prescriptions (multi-medicine support)
Medical document uploads (lab reports, X-rays, discharge summaries, etc.)
Public hospital information pages (departments, services, facilities, contact)
Notification center per user
Admin reports & analytics with charts and filters, CSV/PDF export
Search, filter, sort, and pagination across doctors, patients, and appointments
Audit logging for administrative actions
Fully responsive UI (desktop, tablet, mobile)

-> User Roles

Admin

Full system control — manages doctors, patients, departments, hospital information, appointments (oversight), reports, audit logs, and system users.

Doctor

Manages their own profile, schedule/availability, appointments, patient medical records, and prescriptions. Cannot access other doctors' data or admin functions.

Patient

Manages their own profile, searches and books appointments with doctors, and views (read-only) their medical records, prescriptions, and documents. Cannot access other patients' data.

Technology Stack

Frontend

React.js + Vite
React Router
Tailwind CSS / Bootstrap
Axios
Chart.js / Recharts
React Hook Form

Backend

Node.js + Express.js
REST API architecture
JWT authentication
bcrypt (password hashing)
express-validator / Zod / Joi (validation)

Database

MongoDB with Mongoose ODM (Architecture designed to be adaptable to MySQL/PostgreSQL if required.)

Tooling

VS Code, MongoDB Compass, Postman, Git, GitHub
