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
    const radius = 75;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = ((100 - percentage) / 100) * circumference;
  
    return (
        <div className="flex justify-center items-center w-24 h-24">
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
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
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