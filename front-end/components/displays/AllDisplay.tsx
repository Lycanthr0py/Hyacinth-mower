import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AllDisplay {
    percentage: number;
}

const getColor = (percentage: number) => {
    if (percentage > 50) return "#4CAF50"; // Green
    if (percentage > 20) return "#FFC107"; // Yellow
    return "#F44336"; // Red
};

const AllDisplay: React.FC<AllDisplay> = ({ percentage }) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const latitude = -25.747592;
  const longitude = 27.864435;
  const zoom = 14;

  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - percentage) / 100) * circumference;

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8 p-4 w-full">
        {/* Displays map */}
        <div className="w-1/2 max-w-2xl">
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
        </div>

        {/* Displays battery */}
        <div className="flex flex-col items-center gap-8 w-1/2 max-w-md">
          <div className="w-full flex justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="8"
              />
              <motion.circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={getColor(percentage)}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <text
                x="50%"
                y="45%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="24"
                fontWeight="bold"
                fill="#333"
              >
                <tspan x="50%" dy="0">Battery:</tspan>
                <tspan x="50%" dy="1.2em">{percentage}%</tspan>
              </text>
            </svg>
          </div>
        </div>

        {/* Distance travelled today */}
        <div className="w-full text-center">
            <h2>Distance travelled today: [placeholder]</h2>
        </div>
      </div>
    </>
  );
}

export default AllDisplay;