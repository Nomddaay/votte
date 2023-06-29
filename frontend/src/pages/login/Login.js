import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

import Button from '../../components/btns/login_btn/ButtonLogin'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <div className='label_name'>Password</div>
                    <input
                        className='input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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