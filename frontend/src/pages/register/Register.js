import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './Register.css';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return(
        <div className='body'>
            <div className='card'>
                <div className='title'>VOTTE</div>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form> 
            </div>
        </div>
    )
}

export default Register;