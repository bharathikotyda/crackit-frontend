import { Routes, Route, Link } from "react-router-dom";
import "./styles/Home.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Doubts from "./pages/Doubts";
import Posts from "./pages/Posts";
import Settings from "./pages/Settings";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2>🚀 CrackIT</h2>

        <div className="nav-links">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Peer Learning & Doubt Solving Platform</h1>

        <p>
          Ask questions, share knowledge, solve doubts,
          and learn together with students from everywhere.
        </p>

        <Link to="/register">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doubts" element={<Doubts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;