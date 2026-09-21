import "./Services.css";

function Services() {
  const services = [
    {
      icon: "❤️",
      title: "Cardiology",
      description:
        "Complete heart care with experienced specialists and modern technology.",
    },
    {
      icon: "🧠",
      title: "Neurology",
      description:
        "Advanced diagnosis and treatment for brain and nervous system conditions.",
    },
    {
      icon: "👶",
      title: "Pediatrics",
      description:
        "Specialized healthcare services designed for children of all ages.",
    },
    {
      icon: "🔬",
      title: "Laboratory",
      description:
        "Accurate and reliable diagnostic testing using modern equipment.",
    },
  ];

  return (
    <section className="services">

      <div className="services-header">
        <p className="section-label">OUR SERVICES</p>

        <h2>
          Healthcare You Can <span>Trust</span>
        </h2>

        <p className="section-description">
          We provide comprehensive healthcare services delivered by
          experienced professionals in a comfortable environment.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button className="service-button">
              Learn More →
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;