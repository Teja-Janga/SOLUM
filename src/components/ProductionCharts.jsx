import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const ProductionCharts = ({ activities }) => {
    // Logic to calculate Pass vs Fail from the activities state
    const passCount = activities.filter(a => a.status === 'Pass').length;
    const failCount = activities.filter(a => a.status.includes('Failed')).length;

    const pieData = [
        { name: 'Pass', value: passCount || 1, color: '#22c55e' }, // Green
        { name: 'Fail', value: failCount, color: '#ef4444' }      // Red
    ];

    const barData = [
        { hour: '09:00', count: 12 },
        { hour: '10:00', count: 18 },
        { hour: '11:00', count: passCount + 10 }, 
        { hour: '12:00', count: 5 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Hourly Volume Bar Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase">Hourly Output</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <XAxis dataKey="hour" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis hide />
                            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Yield Pie Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase">Current Yield (Pass vs Fail)</h3>
                <div className="h-64 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-2xl font-bold text-slate-800">
                            {passCount + failCount > 0 
                                ? Math.round((passCount / (passCount + failCount)) * 100) 
                                : 100}%
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">YIELD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionCharts;