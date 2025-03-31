import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  time: string;  // "xx:xx" format
  distance: number; // in meters
}

interface StatisticDisplayProps {
  data: DataPoint[];
}

const StatisticDisplay: React.FC<StatisticDisplayProps> = ({ data }) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Distance Traveled Over Time</h2>
            <div className="p-4 bg-white rounded-2xl shadow-md" style={{flex: '0 0 40%', display: 'flex'}}>
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
        </>
    );
};

export default StatisticDisplay;