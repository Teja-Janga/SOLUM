export const FACTORY_STAGES = [
    { id: 'import', label: 'SMPS import', status: 'Completed', detail: 'Vietnam Origin' },
    { id: 'smd', label: 'SMD Unit', status: 'Active', detail: 'PCB / Visual Board Fab' },
    { id: 'pba', label: 'PBA Assembly', status: 'Pending', detail: 'HeatSink & Image Inspection' },
    { id: 'screwing', label: 'Screwing Station', status: 'Pending', detail: 'SMPS + Visual Board Integration' },
    { id: 'inspection', label: 'Final Inspection', status: 'Pending', detail: 'Set Inspection & Visual Check' },
    { id: 'warehouse', label: 'QC & Warehouse', status: 'Pending', detail: 'Live TV Test - 42 Box Pallets' }
];

export const INITIAL_STATS = [
    { label: 'Boards Processed', value: '1,240', color: 'text-blue-600' },
    { label: 'QC Pass Rate', value: '98.4%', color: 'text-green-600' },
    { label: 'Active Pallets', value: '14', color: 'text-purple-600' },
    { label: 'Flagged (Suspicious)', value: '3', color: 'text-red-600' },
]

export const PALLET_BOXES = Array.from({ length: 42 }, (_, i) => ({
    id: `BOX-${1 + i}`,
    status: Math.random() > 0.1 ? 'Passed' : 'Flagged',
    identityScan: `SN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}));

export const RECENT_ACTIVITY = [
    { id: 1, boardId: "SN-V8921", stage: "Warehouse", time: "2 mins ago", status: "Packed" },
    { id: 2, boardId: "SN-K4432", stage: "Visual Inspection", time: "5 mins ago", status: "Failed - DC Connector Damaged" },
    { id: 3, boardId: "SN-X7710", stage: "Set Inspection", time: "12 mins ago", status: "Passed" },
    { id: 4, boardId: "SN-A1102", stage: "Warehouse", time: "15 mins ago", status: "Packed" }
];