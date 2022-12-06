import React, { useState } from "react";
import { useId } from "react";
import { useContext } from "react";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setfirsName] = useState('');
    const [lastname, setlastName] = useState('');
    const [number, setNumber]= useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign Up Form</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
           
            <input value={firstname} firstname="firstname" id="firstname" placeholder="First Name" />
            <input value={lastname} lastname="lastname" id="lastname" placeholder="Last Name" />
            <input value={number} number="number" id="number" placeholder="00000000000" />
           
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Write Email Address" id="email" name="email" />
            
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}