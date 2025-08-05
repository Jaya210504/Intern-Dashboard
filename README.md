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
| Folder/File            | Description                                           |
| ---------------------- | ----------------------------------------------------- |
|   backend/             | Contains server-side code (Node.js + Express)         |
| ├── `server.js`        | Main server file with API routes                      |
| ├── `package.json`     | Backend dependencies and scripts                      |
|   frontend/            | Contains client-side code (HTML/CSS/JS)               |
| ├── `index.html`       | Dummy Login Page                                      |
| ├── `dashboard.html`   | Dashboard displaying intern data                      |
| ├── `leaderboard.html` | Leaderboard displaying top interns                    |
| ├── `style.css`        | Styling for all pages (login, dashboard, leaderboard) |
| └── `script.js`        | Fetches data from backend APIs and updates UI         |
|      README.md         | Project documentation and setup instructions          |


##Run Backend
cd backend
npm install
npm start
Backend will run on http://localhost:5000

##Run Frontend
Open frontend/index.html directly in browser
(Or use Live Server in VS Code)

##  OUTPUT

## screenshots

### login Page
![login Page](screenshots/login.png)

### dashboard
![dashboard Page](screenshots/dashboard.png)

### leaderboard
![leaderboard Page](screenshots/leaderboard.png)

