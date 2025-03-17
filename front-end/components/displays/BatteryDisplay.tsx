import React from "react";
import { motion } from "framer-motion";

interface BatteryDisplay {
  percentage: number;
}

const getColor = (percentage: number) => {
  if (percentage > 50) return "#4CAF50"; // Green
  if (percentage > 20) return "#FFC107"; // Yellow
  return "#F44336"; // Red
};

const BatteryDisplay: React.FC<BatteryDisplay> = ({ percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - percentage) / 100) * circumference;
  
  return (
    <div className="flex justify-center items-center w-24 h-24">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#E0E0E0"
          strokeWidth="8"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#333"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default BatteryDisplay;