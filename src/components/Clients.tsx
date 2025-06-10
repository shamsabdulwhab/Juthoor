import React from 'react';

const Clients: React.FC = () => {
  return (
    <section className="clients-section">
      <div className="clients-grid">
        {/* Replace with actual client logos */}
        <img src="/path/to/spotify-logo.svg" alt="Spotify" className="client-logo" />
        <img src="/path/to/coca-cola-logo.svg" alt="Coca Cola" className="client-logo" />
        <img src="/path/to/lego-logo.svg" alt="Lego" className="client-logo" />
        <img src="/path/to/samsung-logo.svg" alt="Samsung" className="client-logo" />
      </div>
    </section>
  );
};

export default Clients; 