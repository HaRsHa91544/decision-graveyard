import './App.css';
import Header from '../components/header/Header.jsx';
import Signin from '../pages/signin/Signin.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { UserContext } from '../context/userContext.js';

function App() {
    const [user, setUserState] = useState(null);

    const GOOGLE_OAUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

    return <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
        <UserContext value={{user, setUserState}}>
            <Header></Header>
            <Outlet></Outlet>
        </UserContext>
    </GoogleOAuthProvider>;
}

export default App;
