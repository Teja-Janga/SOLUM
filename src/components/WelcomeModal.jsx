import React from 'react';

const WelcomeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative bg-black/60 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden">
                
                {/* Header with Windows-style Close Button */}
                <div className="flex justify-between text-wrap items-center bg-slate-950 px-6 py-3 border-b border-slate-700">
                    <h2 className="text-white/70 font-semibold tracking-wider text-lg">SYSTEM INITIALIZED: WELCOME</h2>
                    <button 
                        onClick={onClose}
                        className="text-white hover:bg-red-600 cursor-pointer transition-colors duration-200 p-1 -mr-4 px-3 h-full flex items-center font-bold justify-center"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-8 text-white space-y-6 overflow-y-auto max-h-[80vh]">
                    {/* About Section */}
                    <section>
                        <h3 className="text-blue-400 text-sm font-black uppercase tracking-[0.2em] mb-2 underline decoration-blue-500/30 underline-offset-8">About</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            The <strong>SOLUM SmartFlow</strong> is a high-fidelity production monitoring system designed for the the company <strong>SOLUM</strong>. It tracks SMPS and PCB production lines in real-time, providing managers with instant visibility into yield rates, throughput, and quality control status.
                        </p>
                    </section>

                    {/* Instructions Section */}
                    <section>
                        <h3 className="text-blue-400 text-sm font-black uppercase tracking-[0.2em] mb-3 underline decoration-blue-500/30 underline-offset-8">Instructions</h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-blue-500 font-bold">01.</span>
                                <span>Use the <strong>"Move to Next Stage"</strong> button to progress the active board through the 6-stage production line.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-500 font-bold">02.</span>
                                <span>If a defect is spotted, hit <strong>"Flag Failure"</strong>. You must <strong>"Repair"</strong> the unit before continuing.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-500 font-bold">03.</span>
                                <span>Click any entry in the <strong>Activity Log</strong> to re-select a board and pick up where you left off.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">04.</span>
                                <span>Listen for <strong>Audio Cues</strong>: A "Ding" for success and a "Buzz" for failure/error notifications.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-500 font-bold">05.</span>
                                <span>Finalized data can be exported to <strong>.CSV format</strong> for official reporting via the Download button.</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;