import './App.css';
import Header from '../components/header/Header.jsx';
import Signin from '../pages/signin/Signin.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    const GOOGLE_OAUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

    return <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
        <Header></Header>
        <Signin></Signin>
    </GoogleOAuthProvider>;
}

export default App;
