# Intern Dashboard

A simple full-stack Intern Dashboard built using HTML, CSS, JavaScript (Frontend) and Node.js with Express (Backend).  
This project demonstrates frontend-backend integration with dummy API data and includes an optional Leaderboard page.

---

## Features

### Frontend
- Dummy Login Page (redirects to dashboard)
- Dashboard showing:
  - Intern Name
  - Referral Code
  - Total Donations Raised
  - Rewards / Unlockables
- Leaderboard Page (optional) displaying top interns
- Consistent gradient theme across all pages

### Backend
- Built using Node.js + Express
- Provides two dummy API endpoints:
  - `/api/intern` → Intern details
  - `/api/leaderboard` → Leaderboard data

---
## Folder Structure
intern-dashboard/
│
├── backend/
│ ├── server.js
│ ├── package.json
│
├── frontend/
│ ├── index.html (Login Page)
│ ├── dashboard.html (Dashboard Page)
│ ├── leaderboard.html (Leaderboard Page)
│ ├── style.css (Styling for all pages)
│ └── script.js (Fetches API data & updates UI)
│
└── README.md

##Run Backend
bash
Copy
Edit
cd backend
npm install
npm start
Backend will run on http://localhost:5000

##Run Frontend
Open frontend/index.html directly in browser
(Or use Live Server in VS Code)
