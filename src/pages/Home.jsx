import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">

      <nav className="navbar">
        <h2 className="logo">🚀 CrackIT</h2>

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
        <h1>
          Learn Together.
          <br />
          Solve Doubts.
          <br />
          Grow Faster.
        </h1>

        <p>
          CrackIT is a modern peer-learning platform
          where students can ask doubts, share notes,
          create posts, collaborate and learn together.
        </p>

        <Link to="/register">
          <button className="hero-btn">
            🚀 Get Started
          </button>
        </Link>
      </section>

      <section className="features">

        <div className="feature-card">
          <h2>❓ Ask Doubts</h2>

          <p>
            Get answers from students and mentors.
          </p>
        </div>

        <div className="feature-card">
          <h2>📝 Share Notes</h2>

          <p>
            Upload study materials and help others.
          </p>
        </div>

        <div className="feature-card">
          <h2>👨‍🎓 Community</h2>

          <p>
            Connect with learners around the world.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;