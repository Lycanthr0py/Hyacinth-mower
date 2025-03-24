import React, { useEffect, useRef } from "react";

const LocatorDisplay: React.FC = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);

  return (
    <iframe
      ref={mapRef}
      width="50%"
      height="600px"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.368172629298!2d4.706057776901822!3d50.86424685900107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c161e601108ce1%3A0xa8a406e7e0b2ae8d!2sHertogstraat%20178%2C%203001%20Leuven%2C%20Belgium!5e0!3m2!1sen!2s!4v1711584000000"
    ></iframe>
  );
};

export default LocatorDisplay;
