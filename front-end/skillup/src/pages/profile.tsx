import React, { useState } from 'react';
import '../styles/styles.css';


const Profile: React.FC = () => {
    // Example state for controlled inputs
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [password, setPassword] = useState('');

    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle profile update logic (e.g., sending the updated data to the server)
        console.log('Profile updated:', { name, email, password });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            // Handle file upload logic (e.g., setting the new profile picture)
            console.log('Profile picture selected:', e.target.files[0]);
        }
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img src="../images/logotransparent.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
                    </ul>
                </nav>
                <div className="auth-box">
                    <a href="home.html" className="auth-link">Logout</a>
                </div>
            </header>

            <main>
                <section className="profile-section">
                    <h2>Your Profile</h2>

                    {/* Profile Picture Update */}
                    <div className="profile-picture">
                        <img src="../images/default-profile.png" alt="Profile Picture" className="profile-pic" />
                        <form>
                            <label htmlFor="profile-pic">Change Profile Picture:</label>
                            <input type="file" id="profile-pic" name="profile-pic" accept="image/*" onChange={handleFileChange} />
                        </form>
                    </div>

                    {/* User Info Update */}
                    <div className="profile-info">
                        <form onSubmit={handleProfileUpdate}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            /><br />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            /><br />

                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            /><br />

                            <button type="submit">Update Profile</button>
                        </form>
                    </div>
                </section>

                {/* Dashboard Icon */}
                <section className="dashboard-icon">
                    <a href="dashboard.html">
                        <img src="../images/dashboard-icon.png" alt="Dashboard Icon" className="dashboard" />
                        <p>My Courses & Progress</p>
                    </a>
                </section>
            </main>

            <footer>
                <p>SkillUp © 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Profile;
