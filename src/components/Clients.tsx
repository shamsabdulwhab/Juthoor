import React from 'react';

const Clients: React.FC = () => {
  const logos = [
    { src: "/wecam.png", alt: "WeCam" },
    { src: "/Sbc.png", alt: "SBC" },
    { src: "/logo-19.png", alt: "Logo 19" },
    { src: "/taxes.png", alt: "Taxes" },
    { src: "/Tarfeeh.png", alt: "Tarfeeh" },
    { src: "/taxes.png", alt: "WeCam" },
    { src: "/Employeebrand.png", alt: "Employee Brand" },
    { src: "/سول-.png.webp", alt: "Soll" }
  ];

  // Duplicate the logos array to create seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="clients-section">
      <div className="clients-wrapper">
        <div className="clients-grid">
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 