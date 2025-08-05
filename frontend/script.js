// Fetch intern data for dashboard
if (window.location.pathname.includes("dashboard.html")) {
  fetch("http://localhost:5000/api/intern")
    .then(res => res.json())
    .then(data => {
      document.getElementById("internName").textContent = data.name;
      document.getElementById("referralCode").textContent = data.referralCode;
      document.getElementById("totalDonations").textContent = data.totalDonations;

      const rewardsList = document.getElementById("rewardsList");
      data.rewards.forEach(reward => {
        const li = document.createElement("li");
        li.textContent = reward;
        rewardsList.appendChild(li);
      });
    });
}

// Fetch leaderboard data
if (window.location.pathname.includes("leaderboard.html")) {
  fetch("http://localhost:5000/api/leaderboard")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("leaderboardTable");
      data.forEach(item => {
        const row = `<tr><td>${item.name}</td><td>₹${item.donations}</td></tr>`;
        table.innerHTML += row;
      });
    });
}
