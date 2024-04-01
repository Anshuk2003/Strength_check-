import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/Home.css"
const Home = () => {
  return (
    
    <div className="home-container">
      <h1>Welcome to Password Strength Checker</h1>
      <p>
        Secure your online accounts with strong passwords! Our Password Strength Checker helps you evaluate the strength of your passwords and provides recommendations for making them stronger.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Check the strength of your password</li>
        <li>Get recommendations to improve your password's strength</li>
        <li>Ensure your password meets security requirements</li>
      </ul>
      <p>
        Don't compromise your online security. Use our Password Strength Checker to protect your sensitive information.
      </p>
       {/* Link to the password checker page */}
      <Link to="/PassValidator" className="btn">Go to Password Checker</Link>
    </div>
  );
}
export default Home;
