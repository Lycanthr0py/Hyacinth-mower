import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type MachineStatus = "operational" | "obstructed" | "malfunction";

interface DataPoint {
  time: string;  // "xx:xx" format
  distance: number; // in meters
}

interface AllDisplayProps {
    battery: number;
    data: DataPoint[];
    status: MachineStatus;
}

const getBatteryColor = (battery: number) => {
    if (battery > 50) return "#4CAF50"; // Green
    if (battery > 20) return "#FFC107"; // Yellow
    return "#F44336"; // Red
};

const AllDisplay: React.FC<AllDisplayProps> = ({ battery, data, status }) => {
  // Map parameters
  const mapRef = useRef<HTMLIFrameElement>(null);
  const latitude = -25.747592;
  const longitude = 27.864435;
  const zoom = 14;

  // Battery parameters
  const batteryRadius = 75;
  const batteryCircumference = 2 * Math.PI * batteryRadius;
  const batteryStrokeDashoffset = ((100 - battery) / 100) * batteryCircumference;

  // Status parameters
  const statusRadius = 75
  const statusCircumference = 2 * Math.PI * statusRadius;
  const statusStrokeDashoffset = 0; // Always full, so offset = 0

  const getStatusColor = (status: MachineStatus) => {
    switch (status) {
      case "operational":
        return "#4CAF50"; // Green
      case "obstructed":
        return "#FFC107"; // Yellow
      case "malfunction":
        return "#F44336"; // Red
      default:
        return "#E0E0E0"; // Grey fallback
    }
  };

  const getStatusText = (status: MachineStatus) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "obstructed":
        return "Obstructed";
      case "malfunction":
        return "Malfunction";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 w-full" style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
      {/* Map Container - takes 60% width */}
      <div style={{ flex: '0 0 50%', minWidth: 0 }}>
        <iframe
          ref={mapRef}
          style={{
            width: '100%',
            height: '800px',
            border: '0',
            minWidth: '0'
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=${zoom}&output=embed`}
        />
      </div>
  
      {/* Right Side: Battery on top, Chart below */}
      <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Battery Container */}
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'left' }}>
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r={batteryRadius}
              fill="none"
              stroke="#E0E0E0"
              strokeWidth="8"
            />
            <motion.circle
              cx="100"
              cy="100"
              r={batteryRadius}
              fill="none"
              stroke={getBatteryColor(battery)}
              strokeWidth="10"
              strokeDasharray={batteryCircumference}
              strokeDashoffset={batteryStrokeDashoffset}
              strokeLinecap="round"
              initial={{ strokeDashoffset: batteryCircumference }}
              animate={{ strokeDashoffset: batteryStrokeDashoffset }}
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

          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r={statusRadius}
              fill="none"
              stroke="#E0E0E0"
              strokeWidth="8"
            />
                
            {/* Animated status circle */}
            <motion.circle
              cx="100"
              cy="100"
              r={statusRadius}
              fill="none"
              stroke={getStatusColor(status)}
              strokeWidth="10"
              strokeDasharray={statusCircumference}
              strokeDashoffset={statusStrokeDashoffset}
              strokeLinecap="round"
              initial={{ strokeDashoffset: statusCircumference }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          
            {/* Status Text */}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="24"
              fontWeight="bold"
              fill="#333"
            >
              <tspan x="50%" dy="0">{getStatusText(status)}</tspan>
            </text>
          </svg>
        </div>
  
        {/* Distance Chart Container */}
        <div
          className="p-4 bg-white rounded-2xl shadow-md"
          style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
        >
          <h2 className="text-xl font-semibold mb-4">Distance Traveled Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" label={{ value: "Time", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Distance (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Bar dataKey="distance" fill="#8884d8" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AllDisplay;