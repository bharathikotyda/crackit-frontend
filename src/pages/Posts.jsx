import "../styles/page.css";

function Posts() {
  return (
    <div className="page-container">
      <h1 className="page-title">📝 Community Posts</h1>

      <div className="card">
        <h2>No Posts Available</h2>

        <p>
          You haven't created any posts yet.
        </p>

        <button className="btn">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default Posts;