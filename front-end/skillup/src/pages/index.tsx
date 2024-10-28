import React from 'react';


const Home: React.FC = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="../images/logotransparent.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="index.tsx">Home</a></li>
                        <li><a href="profile.tsx">Profile</a></li>
                        <li><a href="courses.tsx">Courses</a></li>
                    </ul>
                </nav>
                <div className="auth-box">
                    <a href="login.html" className="auth-link">Login</a>
                    <a href="signup.html" className="auth-link">Sign Up</a>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero">
                    <h1>Empower Your Learning Journey</h1>
                    <p>Access top-notch courses designed to elevate your technology skills and advance your career.</p>
                    <a href="courses.html" className="cta-button">Explore Courses</a>
                </section>

                {/* About Section */}
                <section className="about">
                    <h2>About SkillUp</h2>
                    <p>SkillUp is a continuous learning platform focused on empowering individuals with the knowledge and tools to succeed in technology fields. Whether you're looking to deepen your understanding of data structures, master algorithms, or explore the latest in web development, SkillUp provides carefully curated courses that fit your learning style.</p>
                </section>

                <section>
                    {/* Your other main content can go here */}
                </section>
            </main>

            <footer>
                <p>SkillUp © 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
