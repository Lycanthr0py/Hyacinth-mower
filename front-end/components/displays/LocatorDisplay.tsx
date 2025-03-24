import React, { useEffect, useRef } from "react";

const LocatorDisplay: React.FC = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const latitude = -25.747592;
  const longitude = 27.864435;
  const zoom = 14;

  return (
    <iframe
      ref={mapRef}
      width="70%"
      height="600px"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&z=${zoom}&output=embed`}
    ></iframe>
  );
};

export default LocatorDisplay;