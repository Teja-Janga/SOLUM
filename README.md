# 🏭 SOLUM Solution Provider

A high-fidelity production monitoring system designed for the **Sri City Hub**. This dashboard provides real-time visibility into SMPS and PCB production lines, tracking yield rates, throughput, and quality control status.

### 🌐 [Live Demo](https://solum-pearl.vercel.app/)

---

## ✨ Features

*   **Live Production Flow:** 6-stage interactive stepper tracking boards from import to warehouse.
*   **Quality Control (QC) Logic:** Ability to flag failures, block production, and perform repairs.
*   **Interactive Activity Log:** Real-time logging with the ability to re-select and resume previous boards.
*   **Data Visualization:** Live charts (Yield Rate & Hourly Output) powered by **Recharts**.
*   **Audio Feedback:** Web Audio API integration for success "dings" and error "buzzes."
*   **Persistence:** Data stays saved in the browser using `localStorage`.
*   **Export Support:** Download production logs directly to `.csv` format.
*   **Fully Responsive:** Optimized for desktop, tablet, and mobile viewing using Tailwind CSS.

## 🛠️ Tech Stack

*   **Frontend:** React.js (Vite)
*   **Styling:** Tailwind CSS
*   **Charts:** Recharts
*   **Deployment:** Vercel

## 📂 Folder Structure
```text
solum-pearl/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ActivityLog.jsx
│   │   ├── BoxDetail.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductionCharts.jsx
│   │   ├── PalletVisualizer.jsx
│   │   └── WelcomeModal.jsx
│   ├── data/            # Static data & utility logic
│   │   ├── mockData.js
│   │   └── sounds.js    # Web Audio API logic
│   ├── App.jsx          # Main app logic and layout
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind & global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## ✍️ Author

_Developed as a Digital Twin simulation for industrial manufacturing workflows._

* Developed by Teja Janga - [GitHub](https://github.com/Teja-Janga)