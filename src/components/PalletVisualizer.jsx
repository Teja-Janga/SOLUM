import React from 'react';
import { PALLET_BOXES } from '../data/mockData';

const PalletVisualizer = ({ onBoxClick, searchQuery }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 my-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-800">Active Pallet Grid</h3>
                    <p className="text-sm text-slate-500">1 Pallet = 42 Boxes (Export Ready)</p>
                </div>
                <div className="flex gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-sm"></span> Passed
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-sm"></span> Suspicious
                    </div>
                </div>
            </div>

            {/* The 42-Box Grid */}
            <div className="grid grid-cols-6 md:grid-cols-7 lg:grid-cols-14 gap-3">
                {PALLET_BOXES.map((box) => {
                    const isMatched = searchQuery && box.identityScan.includes(searchQuery);
                    return (
                        <div 
                            key={box.id}
                            title={`ID: ${box.identityScan}`}
                            onClick={() => onBoxClick(box)}
                            className={`aspect-square rounded-md border-2 flex items-center justify-center text-[10px] font-bold cursor-pointer transition-transform hover:scale-110
                                ${
                                    box.status === 'Passed' 
                                    ? 'bg-green-50 border-green-200 text-green-700' 
                                    : 'bg-red-50 border-red-200 text-red-700 animate-pulse'
                                }
                                ${isMatched ? 'ring-2 ring-yellow-300 scale-105 z-20 shadow-lg' : 'opacity-100'}
                            `}
                        >
                            {box.id.split('-')[1]}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PalletVisualizer;