import PatientLayout from "./PatientLayout";
import "./PatientProfile.css";

function PatientProfile() {
  return (
    <PatientLayout>
      <div className="patient-profile-page">

        {/* HEADER */}
        <div className="profile-page-header">
          <div>
            <h1>Profile</h1>
            <p>Manage your personal information and account settings.</p>
          </div>

          <button className="edit-profile-button">
            ✎ Edit Profile
          </button>
        </div>

        {/* PROFILE HEADER CARD */}
        <div className="profile-overview-card">

          <div className="profile-main-info">

            <div className="profile-photo-wrapper">
              <div className="profile-photo">
                AK
              </div>

              <button className="camera-button">
                📷
              </button>
            </div>

            <div className="profile-basic-info">
              <h2>Alex Kumar</h2>

              <p className="patient-id">
                Patient ID: PT001245
              </p>

              <div className="profile-contact-row">
                <span>♙ 28 years</span>
                <span>♂ Male</span>
                <span>☎ +91 98765 43210</span>
                <span>✉ alex.kumar@email.com</span>
                <span>⌖ Bangalore, Karnataka</span>
              </div>
            </div>

          </div>

          <div className="profile-quote">
            <div className="quote-mark">“</div>

            <p>
              Good health is the foundation
              for a brighter tomorrow.
            </p>

            <span></span>
          </div>

        </div>

        {/* TABS */}
        <div className="profile-tabs">

          <button className="profile-tab active">
            ♙ Personal Information
          </button>

          <button className="profile-tab">
            ♡ Medical Information
          </button>

          <button className="profile-tab">
            ☎ Emergency Contacts
          </button>

          <button className="profile-tab">
            ♢ Insurance Details
          </button>

          <button className="profile-tab">
            ⚙ Account Settings
          </button>

        </div>

        {/* CONTENT */}
        <div className="profile-content-grid">

          {/* LEFT CONTENT */}
          <div className="profile-left-column">

            {/* PERSONAL INFORMATION */}
            <div className="profile-card personal-information-card">

              <div className="card-header">
                <h2>Personal Information</h2>

                <button className="small-edit-button">
                  Edit
                </button>
              </div>

              <div className="personal-info-grid">

                <div className="info-column">

                  <div className="info-item">
                    <span className="info-icon">♙</span>

                    <div>
                      <label>Full Name</label>
                      <strong>Alex Kumar</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">▣</span>

                    <div>
                      <label>Date of Birth</label>
                      <strong>15 March 1996</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">♂</span>

                    <div>
                      <label>Gender</label>
                      <strong>Male</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">☎</span>

                    <div>
                      <label>Phone Number</label>
                      <strong>+91 98765 43210</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">✉</span>

                    <div>
                      <label>Email Address</label>
                      <strong>alex.kumar@email.com</strong>
                    </div>
                  </div>

                </div>

                <div className="info-column">

                  <div className="info-item">
                    <span className="info-icon">⌖</span>

                    <div>
                      <label>Address</label>
                      <strong>
                        123, Green Park Apartments,
                        Koramangala, Bangalore - 560034
                      </strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">⌂</span>

                    <div>
                      <label>City</label>
                      <strong>Bangalore</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">◎</span>

                    <div>
                      <label>State</label>
                      <strong>Karnataka</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">◎</span>

                    <div>
                      <label>Country</label>
                      <strong>India</strong>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">▣</span>

                    <div>
                      <label>ZIP Code</label>
                      <strong>560034</strong>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* BOTTOM CARDS */}
            <div className="profile-bottom-grid">

              {/* PROFILE PICTURE */}
              <div className="profile-card picture-card">

                <h2>Profile Picture</h2>

                <div className="picture-content">

                  <div className="picture-preview">
                    AK

                    <button>
                      📷
                    </button>
                  </div>

                  <div className="picture-details">
                    <p>Update your profile picture</p>

                    <span>
                      JPG, PNG or GIF. Max size 5MB.
                    </span>

                    <div className="picture-buttons">
                      <button className="upload-button">
                        ↑ Upload Photo
                      </button>

                      <button className="remove-button">
                        ♙ Remove
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* ACCOUNT */}
              <div className="profile-card account-card">

                <div className="card-header">
                  <h2>Account Information</h2>

                  <button className="small-edit-button">
                    Edit
                  </button>
                </div>

                <div className="account-info">

                  <div>
                    <span>♙</span>
                    <label>Username</label>
                    <strong>alexkumar96</strong>
                  </div>

                  <div>
                    <span>◷</span>
                    <label>Member Since</label>
                    <strong>12 January 2024</strong>
                  </div>

                  <div>
                    <span>◷</span>
                    <label>Last Login</label>
                    <strong>26 August 2024, 10:30 AM</strong>
                  </div>

                  <div>
                    <span>✓</span>
                    <label>Account Status</label>
                    <strong className="active-status">
                      Active
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="profile-right-column">

            {/* COMPLETION */}
            <div className="profile-card completion-card">

              <h2>Profile Completion</h2>

              <div className="completion-content">

                <div className="completion-circle">
                  <strong>100%</strong>
                </div>

                <div>
                  <h3>Your profile is complete!</h3>

                  <p>
                    All information has been provided.
                  </p>
                </div>

              </div>

              <div className="completion-message">
                <span>✓</span>

                <div>
                  <strong>Great job!</strong>

                  <p>
                    A complete profile helps provide
                    better and more personalized care.
                  </p>
                </div>
              </div>

            </div>

            {/* QUICK ACTIONS */}
            <div className="profile-card quick-actions-card">

              <h2>Quick Actions</h2>

              <button>
                <span>♧</span>
                Update Medical Information
                <b>›</b>
              </button>

              <button>
                <span>☎</span>
                Manage Emergency Contacts
                <b>›</b>
              </button>

              <button>
                <span>◎</span>
                View Insurance Details
                <b>›</b>
              </button>

              <button>
                <span>▣</span>
                Change Password
                <b>›</b>
              </button>

            </div>

          </div>

        </div>

        {/* HELP */}
        <div className="profile-help-banner">

          <div className="help-icon">
            ♧
          </div>

          <div>
            <h3>Need Help?</h3>

            <p>
              If you need to update any sensitive information,
              please contact our support team.
            </p>
          </div>

          <button>
            Contact Support
          </button>

        </div>

      </div>
    </PatientLayout>
  );
}

export default PatientProfile;