import React, { useState, useEffect } from 'react';
import { FACTORY_STAGES, INITIAL_STATS, RECENT_ACTIVITY } from './data/mockData';
import PalletVisualizer from './components/PalletVisualizer';
import BoxDetail from './components/BoxDetail';
import ActivityLog from './components/ActivityLog';
import ProductionCharts from './components/ProductionCharts';
import { playSound } from './data/sounds';
import WelcomeModal from './components/WelcomeModal';
import Footer from './components/Footer';
import logo from './assets/Logo.svg';

function App() {
    const [activeStage, setActiveStage] = useState(2);
    const [selectedBox, setSelectedBox] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activities, setActivities] = useState(() => {
        const saved = localStorage.getItem('factory_logs');
        return saved ? JSON.parse(saved) : RECENT_ACTIVITY;
    });

    useEffect(() => {
        localStorage.setItem('factory_logs', JSON.stringify(activities));
    }, [activities]);

    const [currentBoardId, setCurrentBoardId] = useState(`SN-B${Math.floor(1000 + Math.random() * 9000)}`);
    const [isBlocked, setIsBlocked] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const handleNextStage = () => {
        if (isBlocked) {
            playSound('fail');
            alert("This board is currently failed. Please 'Fix' or 'Reset' to continue.");
            return;
        }
        const isLastStage = activeStage === FACTORY_STAGES.length - 1;
        const nextIndex = isLastStage ? activeStage : activeStage + 1;
        const stageName = FACTORY_STAGES[nextIndex].label;
        const newLog = {
            id: Date.now(),
            boardId: currentBoardId, 
            stage: stageName,
            time: "Just now",
            status: isLastStage ? "Pass" : "Processing"
        };

        playSound('pass');

        setActivities([newLog, ...activities.slice(0, 4)]); // Keep the last 5 activities
        if (!isLastStage) {
            setActiveStage(nextIndex);
        } 
        else {
            alert(`Board ${currentBoardId} Completed Successfully!`);
            handleReset();
        }
    };

    const handleFail = () => {
        playSound('fail');
        const stageName = FACTORY_STAGES[activeStage].label;
        const failLog = {
            id: Date.now(),
            boardId: currentBoardId,
            stage: stageName,
            time: "Just now",
            status: "Failed (QC)"
        }

        setActiveStage([failLog, ...activities.slice(0, 4)]);
        setIsBlocked(true);
    };

    const handleRepair = () => {
        playSound('pass');
        setIsBlocked(false);
        const stageName = FACTORY_STAGES[activeStage].label;
        const repairLog = {
            id: Date.now(),
            boardId: currentBoardId,
            stage: stageName,
            time: "Just now",
            status: "Repaired"
        };
        setActivities([repairLog, ...activities.slice(0, 4)]);
    };

    const handleSelectActivity = (log) => {
        const stageIndex = FACTORY_STAGES.findIndex(s => s.label === log.stage);
        if (stageIndex !== -1) {
            setActiveStage(stageIndex);
            setCurrentBoardId(log.boardId);
            setIsBlocked(log.status.includes("Failed"));
        }
    }

    const handleReset = () => {
        setActiveStage(0);
        setCurrentBoardId(`SN-B${Math.floor(1000 + Math.random() * 9000)}`);
    };

    const exportToCSV = () => {
        const headers = ["ID, Board ID, Stage, Time, Status\n"];
        const rows = activities.map(log =>
            `${log.id}, ${log.boardId}, ${log.stage}, ${log.time}, ${log.status}`
        ).join("\n");

        const blob = new Blob([headers + rows], { type: 'type/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Production_Report_${new Date().toLocaleDateString()}.csv`;
        a.click();
    }

    return (
        <div className="min-h-screen bg-black/5 flex flex-col md:flex-row font-sans">
            <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />        
            {/* Simplified Side Area */}
            <aside className="w-full md:w-64 p-6 md:min-h-screen">
                <div className="flex justify-center">
                    <img src={logo} alt="Solum Logo" width={220} />                    
                </div>
                <div className="mt-5 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <p className="text-[12px] text-blue-600 font-black uppercase">Live System Status</p>
                    <p className="text-xs text-slate-700 font-semibold mt-1 italic">Unit: AP-SRI-01 Active</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-10"> 
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Serial Number..."
                            className="pl-10 pr-4 py-2 border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
                            onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
                        />
                        <span className="absolute left-2.5 top-2 text-slate-400">🔍</span>
                    </div>
                </header>

                {/* Stats Section */}
                <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
                    {INITIAL_STATS.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-blue-300 transition">
                            <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        {/* Production Flow */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-lg font-bold text-slate-800">Live Production Flow</h3>
                                <div className="flex gap-2">
                                    <button onClick={handleReset} className="px-4 py-2 text-xs cursor-pointer font-semibold bg-slate-200 border border-slate-400 rounded-lg">New Board</button>
                                    <button
                                        onClick={exportToCSV}
                                        className="px-4 py-2 text-xs font-bold text-blue-600 borderborder-blue-200 hover:bg-blue-50 rounded-lg transition-all"
                                    >
                                        Download Report 📥
                                    </button>
                                    {/* Dynamic Buttons */}
                                    {isBlocked ? (
                                        <button 
                                            onClick={handleRepair}
                                            className="px-4 py-2 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg animate-pulse"
                                        >
                                            Repair & Resume 🛠️
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={handleFail}
                                            className="px-4 py-2 text-xs font-semibold text-red-600 border border-red-200 hover:bg-red-100 cursor-pointer rounded-lg transition-colors"
                                        >
                                            Flag Failure ❌
                                        </button>
                                    )}

                                    <button 
                                        onClick={handleNextStage}
                                        className="px-4 py-2 text-xs cursor-pointer font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
                                    >
                                        {activeStage === FACTORY_STAGES.length - 1 ? "Finish & Pass ✅" : "Move to Next Stage →"}
                                    </button>
                                </div>
                            </div>

                            {/* Stepper Component*/}
                            <div className="relative flex justify-between items-start mt-3v">
                                {/* The Line Connector */}
                                <div className="absolute top-5 left-0 w-full h-1 bg-slate-300 z-0"></div>

                                {FACTORY_STAGES.map((stage, index) => (
                                    <div key={stage.id} className="relative z-10 flex flex-col items-center group flex-1">

                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-all duration-500 ${
                                            index === activeStage 
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600 scale-125 ring-3 ring-blue-300' 
                                                : index < activeStage ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'
                                            }`}>
                                            {index < activeStage ? '✓' : index + 1}
                                        </div>

                                        <span className={`text-sm font-bold text-center ${index <= activeStage ? 'text-slate-800' : "text-slate-400"}`}>
                                            {stage.label}
                                        </span>
                                        <span className="text-xs text-slate-500 max-w-25 text-center mt-1">
                                            {stage.detail}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    {/* Activity Log */}
                    <div className="lg:col-span-1">
                        <ActivityLog
                            activities={activities}
                            onSelectActivity={handleSelectActivity}
                        />
                    </div>
                </div>
                <section className="mt-8">
                    <PalletVisualizer onBoxClick={setSelectedBox} searchQuery={searchQuery} />
                </section> 
                <section className="pb-10">
                    <ProductionCharts activities={activities} />
                </section>  
                      
            </main>
            <BoxDetail
                box={selectedBox}
                onClose={() => setSelectedBox(null)}
            />
            <Footer /> 
        </div>
    );
}

export default App
