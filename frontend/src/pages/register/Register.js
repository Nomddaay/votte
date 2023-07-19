import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Register.css';
import Button from '../../components/btns/login_btn/ButtonRegister';
import { useAuth } from '../../components/context/AuthContext';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        auth.signup({
            email, 
            password, 
            callback: () => navigate('/login'),
        });
        setEmail("");
        setPassword("");
    };

    return(
        <div className='body'>
            <div className='card'>
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
                    <br/>
                    <Button />
                    <div className='text'>Have account? <a href='/login'>Login</a></div>
                </form> 
            </div>
        </div>
    )
}

export default Register;