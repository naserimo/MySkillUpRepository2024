import React, { useState } from 'react';
import './styles.css'; // Assuming styles.css is in the same folder

const Login: React.FC = () => {
    // State for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Form submission handler
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic (e.g., sending data to the server)
        console.log('Login Details:', { username, password });
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
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="courses.html">Courses</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="auth-container">
                    <div className="auth-box">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer>
                <p>SkillUp © 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Login;
