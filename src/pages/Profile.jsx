import "../styles/Page.css";
import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    college: "",
    course: "",
    bio: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">
        👨‍🎓 My Profile
      </h1>

      <div className="card">
        <div className="profile-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={user.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={user.course}
            onChange={handleChange}
          />

          <textarea
            name="bio"
            placeholder="About Yourself"
            value={user.bio}
            onChange={handleChange}
          />

          <button className="btn">
            Save Profile
          </button>

        </div>
      </div>
    </div>
  );
}

export default Profile;