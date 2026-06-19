import './signin.css';
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';

function Signin() {
    return <section className="signin-section">
        <div className="logo-overlay">
            <img src="/logo.png" alt="dg-logo" className='logo-overlay-img' />
        </div>
        <h2 className="signin-heading">Sign in to Decision Graveyard!</h2>
        <h3 className="signin-sub-heading">Bury your Failed Decisions and Learn from them.</h3>
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            theme="outline"
            size="large"
            width="200px"
            text="continue_with"
        ></GoogleLogin>
    </section>;
}

export default Signin;