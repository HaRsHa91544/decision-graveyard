import './signin.css';
import { useAuthTokenMutation } from '../../services/auth';
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';

function Signin() {
    const navigate = useNavigate();

    const { user, setUserState } = useContext(UserContext);

    useEffect(() => {
        if (user) navigate('/home');
    }, [user]);

    const [authToken, result] = useAuthTokenMutation();

    return <section className="signin-section">
        <div className="logo-overlay">
            <img src="/logo.png" alt="dg-logo" className='logo-overlay-img' />
        </div>
        <h2 className="signin-heading">Sign in to Decision Graveyard!</h2>
        <h3 className="signin-sub-heading">Bury your Failed Decisions and Learn from them.</h3>
        <GoogleLogin
            onSuccess={(credentialResponse) => onSuccess(credentialResponse, authToken, navigate, setUserState)}
            width="200px"
            text="continue_with"
        ></GoogleLogin>
    </section>;
}

async function onSuccess(credentialResponse, authToken, navigate, setUserState) {
    const { data } = await authToken(credentialResponse.credential);
    const { data: userData } = data;
    localStorage.setItem('userData', JSON.stringify(userData));
    setUserState(userData);
    navigate('/home');
}

export default Signin;