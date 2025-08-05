import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Dummy Data
const internData = {
  name: "Jaya Gupta",
  referralCode: "jayagupta2025",
  totalDonations: 5000,
  rewards: ["Gift Card", "T-shirt", "Certificate"]
};

const leaderboard = [
  { name: "Jaya Gupta", donations: 5000 },
  { name: "Rahul Mehta", donations: 4500 },
  { name: "Sneha Sharma", donations: 4000 }
];

// API Routes
app.get("/api/intern", (req, res) => res.json(internData));
app.get("/api/leaderboard", (req, res) => res.json(leaderboard));

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
