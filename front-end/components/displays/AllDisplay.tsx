import React, { useRef } from "react";
import { motion } from "framer-motion";

interface AllDisplayProps {
    battery: number;
}

const getColor = (battery: number) => {
    if (battery > 50) return "#4CAF50"; // Green
    if (battery > 20) return "#FFC107"; // Yellow
    return "#F44336"; // Red
};

const AllDisplay: React.FC<AllDisplayProps> = ({ battery }) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const latitude = -25.747592;
  const longitude = 27.864435;
  const zoom = 14;

  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - battery) / 100) * circumference;

  return (
    <div className="p-4 w-full" style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
      {/* Map Container - takes 60% width */}
      <div style={{ flex: '0 0 60%', minWidth: 0 }}>
        <iframe
          ref={mapRef}
          style={{ 
            width: '100%',
            height: '600px',
            border: '0',
            minWidth: '0' // Critical to prevent overflow
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=${zoom}&output=embed`}
        />
      </div>

      {/* Battery Container - takes 5% width */}
      <div style={{ 
        flex: '0 0 5%',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
      }}>
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
            stroke={getColor(battery)}
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
            <tspan x="50%" dy="1.2em">{battery}%</tspan>
          </text>
        </svg>
      </div>
  </div>   
  );
};

export default AllDisplay;