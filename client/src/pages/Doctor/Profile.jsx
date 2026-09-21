import DoctorLayout from "./DoctorLayout";
import "./Profile.css";

function Profile() {
  return (
    <DoctorLayout>
      <div className="profile-page">

        {/* HEADER */}
        <section className="profile-header">
          <div>
            <h1>My Profile</h1>
            <p>
              View and manage your personal and professional information.
            </p>
          </div>

          <button className="profile-edit-button">
            ✎ Edit Profile
          </button>
        </section>

        {/* PROFILE SUMMARY */}
        <section className="profile-summary">

          <div className="profile-main-info">

            <div className="profile-photo-wrapper">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=90"
                alt="Doctor Profile"
              />

              <button className="profile-camera-button">
                ●
              </button>
            </div>

            <div className="profile-doctor-info">
              <h2>
                Dr. Riyan Khan <span>✓</span>
              </h2>

              <p className="profile-specialization">
                Cardiologist
              </p>

              <p className="profile-qualification">
                MBBS, MD (Cardiology)
              </p>

              <div className="profile-rating">
                <span>★★★★★</span>
                <strong>4.8</strong>
                <small>(120 reviews)</small>
              </div>

              <div className="profile-contact-row">
                <span>⌖ New Delhi, India</span>
                <span>✉ riyan.khan@medicare.com</span>
                <span>☎ +91 98765 43210</span>
              </div>
            </div>

          </div>

          <div className="profile-quote">
            <div>“</div>

            <p>
              Dedicated to providing compassionate care and building
              a healthier tomorrow.
            </p>

            <span>— Dr. Riyan Khan</span>
          </div>

        </section>

        {/* PROFILE TABS */}
        <section className="profile-tabs">

          <button className="active">
            ♙ Personal Info
          </button>

          <button>
            ▣ Professional Info
          </button>

          <button>
            ◷ Availability
          </button>

          <button>
            □ Documents
          </button>

          <button>
            🔒 Change Password
          </button>

        </section>

        {/* CONTENT */}
        <section className="profile-content">

          {/* PERSONAL INFORMATION */}
          <div className="profile-information-card">

            <div className="profile-card-heading">
              <div className="profile-heading-icon">
                ♙
              </div>

              <div>
                <h2>Personal Information</h2>
                <p>
                  Update your personal details and contact information.
                </p>
              </div>
            </div>

            <div className="profile-form">

              <div className="profile-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  defaultValue="Dr. Riyan Khan"
                />
              </div>

              <div className="profile-form-group">
                <label>Gender</label>

                <select defaultValue="Male">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="profile-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  defaultValue="riyan.khan@medicare.com"
                />
              </div>

              <div className="profile-form-group">
                <label>Address</label>
                <input
                  type="text"
                  defaultValue="123, Green Park, New Delhi"
                />
              </div>

              <div className="profile-form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  defaultValue="+91 98765 43210"
                />
              </div>

              <div className="profile-form-small-group">

                <div className="profile-form-group">
                  <label>City</label>
                  <input
                    type="text"
                    defaultValue="New Delhi"
                  />
                </div>

                <div className="profile-form-group">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    defaultValue="110016"
                  />
                </div>

              </div>

              <div className="profile-form-group">
                <label>Date of Birth</label>

                <div className="profile-date-input">
                  <input
                    type="text"
                    defaultValue="15 March 1990"
                  />
                  <span>▣</span>
                </div>
              </div>

            </div>

            <button className="profile-save-button">
              Save Changes
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="profile-right-column">

            <div className="profile-stat-card green">
              <div className="profile-stat-icon">
                ▣
              </div>

              <div>
                <strong>5+</strong>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="profile-stat-card blue">
              <div className="profile-stat-icon">
                ♟
              </div>

              <div>
                <strong>1,200+</strong>
                <span>Patients Treated</span>
              </div>
            </div>

            <div className="profile-stat-card purple">
              <div className="profile-stat-icon">
                ★
              </div>

              <div>
                <strong>4.8</strong>
                <span>Patient Rating</span>
              </div>
            </div>

            {/* VERIFICATION */}
            <div className="profile-verification-card">

              <div className="verification-icon">
                ✓
              </div>

              <div>
                <h3>Professional Verification</h3>
                <p>
                  Your profile is verified and active.
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>
    </DoctorLayout>
  );
}

export default Profile;