import React from 'react';
import '../styles/styles.css';

const Dashboard: React.FC = () => {
    // Sample user progress data, could be dynamic from a database
    const courses = [
        {
            title: "Advanced Java Programming",
            progress: 40,
        },
        {
            title: "Data Structures and Algorithms",
            progress: 60,
        }
    ];

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
                    <a href="logout.html" className="auth-link">Logout</a>
                </div>
            </header>

            <main>
                <section className="dashboard-section">
                    <h2>My Courses & Progress</h2>

                    {courses.map((course, index) => (
                        <div key={index} className="course-progress">
                            <h3>{course.title}</h3>
                            <p>Progress: {course.progress}%</p>
                        </div>
                    ))}
                </section>
            </main>

            <footer>
                <p>SkillUp © 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
