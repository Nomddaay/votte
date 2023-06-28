import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import './Register.css';
import Button from '../../components/btns/login_btn/ButtonRegister';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [matchPassword, setMatchPassword] = useState("");
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();   

    };

    return(
        <div className='body'>
            <div className='card'>
                <Link to="/" 
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
                    <div className='label_name'>Confirm Password</div>
                    <input
                        className='input'
                        type="password"
                        value={matchPassword}
                        onChange={(e) => setMatchPassword(e.target.value)}
                    />
                    <Button />
                    <div className='text'>Have account? <a href='/'>Login</a></div>
                </form> 
            </div>
        </div>
    )
}

export default Register;