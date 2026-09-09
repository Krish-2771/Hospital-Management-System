
import hospitalVideo from "../hospital-video.mp4";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-small-title">
            YOUR HEALTH, OUR PRIORITY
          </p>

          <h1>
            Compassionate Care,
            <br />
            <span>Better Health</span>
          </h1>

          <p className="hero-description">
            We provide exceptional healthcare services with
            experienced doctors and modern technology.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              📅 Book Appointment
            </button>

            <button className="secondary-btn">
              👨‍⚕️ Find a Doctor
            </button>
          </div>
        </div>

        <div className="hero-image">
          <video
            src={hospitalVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;