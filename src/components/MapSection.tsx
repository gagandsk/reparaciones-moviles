// src/components/MapSection.tsx
import React from "react";

const MapSection: React.FC = () => {
  return (
    <section id="map-section">
      <div className="ratio ratio-16x9" style={{ height: "650px" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.028939996019!2d2.123326476317926!3d41.39517787129887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49869e1b71325%3A0xdab637b60fb34dde!2zQWNjZXNzIFN0b3JlLCBNw7N2aWxlcyBBcnTDs3MsIFNhcnJpw6A!5e0!3m2!1ses!2ses!4v1756062516017!5m2!1ses!2ses"></iframe>
      </div>
    </section>
  );
};

export default MapSection;
