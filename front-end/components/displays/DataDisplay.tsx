import React from "react";
import { motion } from "framer-motion";

interface DataDisplay {
    percentage: number;
}

const getColor = (percentage: number) => {
    if (percentage > 50) return "#4CAF50"; // Green
    if (percentage > 20) return "#FFC107"; // Yellow
    return "#F44336"; // Red
};

const DataDisplay: React.FC<DataDisplay> = ({ percentage }) => {
    const radius = 75;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = ((100 - percentage) / 100) * circumference;
  
    return (
        <section className="flex flex-row items-center gap-4">
            {/* Displays battery */}
            <div className="">
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

            {/* Distance travelled today */}
            <div>
                <h2>Distance travelled today: [placeholder]</h2>
            </div>
        </section>
    );
};

export default DataDisplay;