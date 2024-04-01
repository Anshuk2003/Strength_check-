import React, { useState } from 'react';
import "../Css/passvalidator.css"
const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [suggestUppercase, setSuggestUppercase] = useState(false);
    const [suggestLowercase, setSuggestLowercase] = useState(false);
    const [suggestDigit, setSuggestDigit] = useState(false);
    const [suggestSymbol, setSuggestSymbol] = useState(false);
    const [suggestLength, setSuggestLength] = useState(false);

    const handleChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        checkStrength(passwordValue);
    };
    const checkStrength = (password) => {
        let strength = 0;
        let hasUppercase = false;
        let hasLowercase = false;
        let hasDigit = false;
        let hasSymbol = false;

        // Check password strength criteria
        if (password.match(/(?=.*[A-Z])/)) {
            strength++;
            hasUppercase = true;
        }
        if (password.match(/(?=.*[a-z])/)) {
            strength++;
            hasLowercase = true;
        }
        if (password.match(/(?=.*[0-9])/)) {
            strength++;
            hasDigit = true;
        }
        if (password.match(/(?=.*[!@#$%^&*])/)) {
            strength++;
            hasSymbol = true;
        }
        if (password.length >= 9) strength++;

        // Update strength state
        setStrength(strength);
        // Set feedback messages based on strength
        setFeedback(getFeedbackMessage(strength));
        // Check if factors are missing and set suggestions accordingly
        setSuggestUppercase(!hasUppercase && password.length > 0);
        setSuggestLowercase(!hasLowercase && password.length > 0);
        setSuggestDigit(!hasDigit && password.length > 0);
        setSuggestSymbol(!hasSymbol && password.length > 0);
        setSuggestLength(password.length < 9 && password.length > 0);
        
    };

    const getFeedbackMessage = (strength) => {
        switch (strength) {
            case 0:
                return 'Weak';
            case 1:
                return 'Medium';
            case 2:
                return 'Fair';
            case 3:
                return 'Strong';
            case 4:
                return 'Very Strong';
            case 5:
                return 'Extremely Strong';
            default:
                return '';
        }
    };

    return (
        <div className="passcheck">
            <h1>Password <br />Strength Checker</h1>
            <div className="inp">
                <input
                    type="password"
                    id="Password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <h5>Password Strength: {feedback}</h5>
            {suggestUppercase && <p className="suggestion">Consider adding an uppercase letter to make your password stronger.</p>}
            {suggestLowercase && <p className="suggestion">Consider adding a lowercase letter to make your password stronger.</p>}
            {suggestDigit && <p className="suggestion">Consider adding a digit to make your password stronger.</p>}
            {suggestSymbol && <p className="suggestion">Consider adding a symbol to make your password stronger.</p>}
            {suggestLength && <p className="suggestion">Consider making your password at least 9 characters long.</p>}
            <div className="progress">
                <div id="bar" style={{ width: `${(strength / 5) * 100}%`, backgroundColor: getProgressBarColor(strength) }}></div>
            </div>
        </div>
    );
};

// Function to determine progress bar color based on strength
const getProgressBarColor = (strength) => {
    switch (strength) {
        case 0:
            return 'unset';
        case 1:
            return 'red';
        case 2:
            return 'orangered';
        case 3:
            return 'gold';
        case 4:
            return 'deepskyblue';
        case 5:
            return 'green';
        default:
            return 'unset';
    }
};

export default PasswordStrengthChecker;
