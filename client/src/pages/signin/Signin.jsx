import './signin.css';
import { useAuthTokenMutation } from '../../services/auth';
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function Signin() {
    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        if (userData) navigate('/home');
    }, []);

    const [authToken, result] = useAuthTokenMutation();

    return <section className="signin-section">
        <div className="logo-overlay">
            <img src="/logo.png" alt="dg-logo" className='logo-overlay-img' />
        </div>
        <h2 className="signin-heading">Sign in to Decision Graveyard!</h2>
        <h3 className="signin-sub-heading">Bury your Failed Decisions and Learn from them.</h3>
        <GoogleLogin
            onSuccess={(credentialResponse) => onSuccess(credentialResponse, authToken, navigate)}
            width="200px"
            text="continue_with"
        ></GoogleLogin>
    </section>;
}

async function onSuccess(credentialResponse, authToken, navigate) {
    const { data } = await authToken(credentialResponse.credential);
    const { data: userData } = data;
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/home');
}

export default Signin;