import "../styles/page.css";

function Doubts() {
  return (
    <div className="page-container">
      <h1 className="page-title">❓ Doubts</h1>

      <div className="card">
        <h2>No Doubts Found</h2>

        <p>
          Ask your first doubt and get help
          from other students.
        </p>

        <button className="btn">
          Ask Doubt
        </button>
      </div>
    </div>
  );
}

export default Doubts;