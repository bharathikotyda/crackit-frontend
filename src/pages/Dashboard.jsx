import "./../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name") || "Student";

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>🚀 CrackIT</h2>

        <ul>
          <li onClick={() => navigate("/dashboard")}>
            📊 Dashboard
          </li>

          <li onClick={() => navigate("/doubts")}>
            ❓ Doubts
          </li>

          <li onClick={() => navigate("/posts")}>
            📝 Posts
          </li>

          <li onClick={() => navigate("/profile")}>
            👨‍🎓 Profile
          </li>

          <li onClick={() => navigate("/settings")}>
            ⚙️ Settings
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="welcome-card">
          <h1>Welcome, {userName} 👋</h1>
          <p>
            Learn, share knowledge, solve doubts,
            and help other students grow.
          </p>
        </div>

        <div className="stats">
          <div className="card">
            <h2>12</h2>
            <p>Your Posts</p>
          </div>

          <div className="card">
            <h2>35</h2>
            <p>Doubts Solved</p>
          </div>

          <div className="card">
            <h2>8</h2>
            <p>Active Discussions</p>
          </div>
        </div>

        <div className="actions">
          <button onClick={() => navigate("/posts")}>
            Create Post
          </button>

          <button onClick={() => navigate("/doubts")}>
            View Doubts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;