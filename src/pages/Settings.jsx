import "../styles/Page.css";

function Settings() {
  return (
    <div className="page-container">
      <h1 className="page-title">
        ⚙️ Settings
      </h1>

      <div className="card">
        <div className="settings-buttons">

          <button className="btn">
            Change Password
          </button>

          <button className="btn">
            Edit Profile
          </button>

          <button
            className="btn"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}

export default Settings;