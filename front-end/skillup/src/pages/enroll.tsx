import React, { useEffect, useState } from 'react';
import '../styles/styles.css';


const EnrollCourse: React.FC = () => {
    // State for form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    // Get the course name from the URL on component mount
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const courseName = urlParams.get('course');
        if (courseName) {
            setCourse(courseName);
        }
    }, []);

    // Form submission handler
    const handleEnrollment = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle enrollment logic (e.g., sending data to the server)
        console.log('Enrollment Details:', { firstName, lastName, age, email, course });
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img src="../images/logotransparent.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="home.tsx">Home</a></li>
                        <li><a href="profile.tsx">Profile</a></li>
                        <li><a href="courses.tsx">Courses</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="enrollment-form">
                    <h1>Enroll in <span id="course-name">{course}</span></h1>
                    <form onSubmit={handleEnrollment}>
                        <label htmlFor="first-name">First Name:</label>
                        <input
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        /><br />

                        <label htmlFor="last-name">Last Name:</label>
                        <input
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        /><br />

                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.valueAsNumber || '')}
                            min="14"
                            max="100"
                            required
                        /><br />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /><br />

                        <input type="hidden" name="course" value={course} />

                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>SkillUp © 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default EnrollCourse;
