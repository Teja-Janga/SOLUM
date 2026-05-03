import React from 'react';

const BoxDetail = ({ box, onClose }) => {
    if (!box) return null;

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-96 bg-white h-full shadow-2xl p-8 animate-in slide-in-from-right duration-300">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-slate-800">Box {box.id}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Identity Number</p>
                        <p className="text-lg font-mono font-bold text-blue-600">{box.identityScan}</p>
                    </div>
 
                    <div className={`p-4 rounded-lg border ${box.status === 'Passed' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1">Status</p>
                        <p className={`font-bold ${box.status === 'Passed' ? 'text-green-700' : 'text-red-700'}`}>
                            {box.status.toUpperCase()}
                        </p>
                    </div>

                    {/* Stages in PBA Line */}
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">QC Checklist</p>
                        <ul className="space-y-3">
                        {[
                            { label: 'Heat Sink Attachment', passed: true },
                            { label: 'Image Inspection', passed: true },
                            { label: 'Screwing Position', passed: true },
                            { label: 'Holders Alignment', passed: true },
                            { label: 'Set Inspection', passed: box.status === 'Passed' },
                            { label: 'Visual Inspection', passed: box.status === 'Passed' },
                            { label: 'Live TV Test', passed: box.status === 'Passed' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-center justify-between text-sm">
                                <span className="text-slate-600">{item.label}</span>
                                <span className={item.passed ? "text-green-500" : "text-red-500"}>
                                    {item.passed ? "✓ Pass" : "✕ Fail"}
                                </span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxDetail;