import React, { useState } from 'react';
import '../Pages/LoginSignup.css';

import user_icon from '../Images/person.png';
import email_icon from '../Images/email.png';
import password_icon from '../Images/password.png';

export const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='login_container'>
            <div className='login_header'>
                <div className='login_text'>{action}</div>
                <div className='login_underline'></div>
            </div>
            <div className="login_inputs">
                {action === "Login" ? <div></div> : 
                    <div className="login_input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                    </div>}
                
                <div className="login_input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="login_input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up"? <div></div>: <div className="login_forgot-password">Forgot Password? <span>Click Here</span></div>}
            
            <div className="login_submit-container">
                <div className={action === "Login" ? "login_submit login_notSelected" : "login_submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "login_submit login_notSelected" : "login_submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup;
