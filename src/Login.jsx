import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Log in Form</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Write Email Address" id="email" name="email" />
                
                <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('Signup')}>Don't have an account?   SIGNUP HERE!</button>
        </div>
    )
}