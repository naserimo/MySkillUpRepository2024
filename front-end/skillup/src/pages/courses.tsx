import React from 'react';
import '../styles/styles.css';


const Courses: React.FC = () => {
    // List of courses
    const courses = [
        {
            title: "AI for everyone",
            imgSrc: "../images/course1.jpg",
            videoLink: "https://youtu.be/ad79nYk2keg?si=N00Ruqq_-EEzRqqe",
        },
        {
            title: "Advanced Java Programming",
            imgSrc: "../images/course2.jpg",
            videoLink: "https://youtu.be/xk4_1vDrzzo?si=iNTZzuWLnJAGN_CV",
        },
        {
            title: "Web Development with React",
            imgSrc: "../images/course3.jpg",
            videoLink: "https://youtu.be/SqcY0GlETPk?si=EL7cE3HgkqRxTp-9",
        },
        {
            title: "Data Structures and Algorithms",
            imgSrc: "../images/course4.jpg",
            videoLink: "https://youtu.be/2ZLl8GAk1X4?si=JoBkwkH23klDyzwd",
        },
        {
            title: "Introduction to Cloud Computing",
            imgSrc: "../images/course5.jpg",
            videoLink: "https://youtu.be/RWgW-CgdIk0?si=Mvu0fqDjb-ZUiVwP",
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
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="courses.html">Courses</a></li>
                    </ul>
                </nav>
                <div className="Intro">Available Courses</div>
            </header>

            <main>
                <section className="courses-container">
                    {courses.map((course, index) => (
                        <div key={index} className="course-box">
                            <a href={course.videoLink} target="_blank" rel="noopener noreferrer">
                                <img src={course.imgSrc} alt={`${course.title} Image`} />
                                <h3>{course.title}</h3>
                            </a>
                            <button
                                className="enroll-btn"
                                onClick={() => window.location.href = `enroll.html?course=${encodeURIComponent(course.title)}`}
                            >
                                Enroll me
                            </button>
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

export default Courses;
