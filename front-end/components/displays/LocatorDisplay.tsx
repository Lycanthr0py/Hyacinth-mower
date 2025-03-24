import React, { useEffect, useRef } from "react";

const LocatorDisplay: React.FC = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const latitude = 50.86424685900107;
  const longitude = 4.706057776901822;

  return (
    <iframe
      ref={mapRef}
      width="100%"
      height="400px"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
    ></iframe>
  );
};

export default LocatorDisplay;