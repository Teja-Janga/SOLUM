import React from 'react';

const ActivityLog = ({ activities, onSelectActivity }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-blue-200 border border-slate-100 h-full my-2">
            <h3 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                Live Activity Log
            </h3>
            <div className="space-y-4">
                {activities.map((log) => (
                    <div
                        key={log.id}
                        onClick={() => onSelectActivity(log)}
                        className={`p-3 border-l-4 transition-all cursor-pointer rounded-r-lg mb-2 ${
                            log.status.includes('Failed') 
                            ? 'border-red-500 bg-red-50 hover:bg-red-100' 
                            : 'border-slate-100 hover:border-blue-500 hover:bg-blue-50'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className={`font-mono font-bold cursor-pointer ${log.status.includes('Failed') ? 'text-red-700' : 'text-blue-600'}`}>
                                {log.boardId}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">{log.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">{log.stage}</p>
                        <p className={`text-[10px] mt-1 font-black uppercase tracking-wider ${
                            log.status === 'Pass' ? 'text-green-600' : 
                            log.status.includes('Failed') ? 'text-red-600' : 'text-blue-400'
                        }`}>
                            {log.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLog;