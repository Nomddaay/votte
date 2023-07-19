import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/context/AuthContext';

import './Login.css';

import Button from '../../components/btns/login_btn/ButtonLogin'

const Login = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const auth = useAuth();
    let navigate  = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        auth.login({
            email: emailValue,
            password: passwordValue,
            callback: () => {
                navigate('/home_page'); 
            }
        });
    }

    return (
        <>
            <div className='body'>
            <div className='card_lg'>
                <Link to="/home_page" 
                    className='title'
                    style={{
                        display: 'flex',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: 30,
                        justifyContent: 'center',
                        marginTop: 25,
                        marginBottom: 10,
                    }}>
                    VOTTE
                </Link>
                <form onSubmit={handleSubmit} className='content'>
                    <div className='label_name'>Email</div>
                    <input
                        className='input'   
                        type="email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <br/>
                    <div className='label_name'>Password</div>
                    <input
                        className='input'
                        type="password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                    <Button />
                    <div className='help'>
                        <div className='text'>Create an account? <a href='/register'>Register</a></div>
                        <a className='text' href='/'>Forgot password</a>
                    </div>
                </form> 
            </div>
        </div>
        </>
    )
}

export default Login