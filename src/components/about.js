import React from 'react';
import "../Css/about.css"

const About = () => {
    return (
        <div className="container">
            <div className="box">
                <h1>About Us</h1>
                <p>Welcome to our Password Strength Checker application!</p>
                <p>We built this application to learn and practice React concepts, as well as to gain hands-on experience with React development.</p>
                <p>The tech stack we used in this application includes:</p>
                <ul> 
                    <li>React</li>
                </ul>
                <p>We created this app to help users evaluate the strength of their passwords and receive suggestions on how to improve them. Security is essential in today's digital age, and having a strong password is crucial for protecting personal and sensitive information.</p>
                <p>We hope you find our Password Strength Checker useful and informative!</p>
            </div>
        </div>
    );
};

export default About;
