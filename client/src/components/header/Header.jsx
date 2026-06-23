import { NavLink } from 'react-router';
import './header.css';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Header() {

    const userData = JSON.parse(localStorage.getItem('userData'));

    const { user, setUserState } = useContext(UserContext);

    useEffect(() => {
        setUserState(userData);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        setUserState(null);
    };

    return <header>
        <div className="logo-container">
            <NavLink className="nav-link" to={'/home'}>
                <img className="dg-logo" src="/logo.png" alt="decision-graveyard-logo" />
            </NavLink>
            <NavLink className="nav-link" to={'/home'}>
                <h1 className='dg-logo-text'>Decision Graveyard</h1>
            </NavLink>
        </div>
        <nav>
            {
                user
                &&
                <>
                    {console.log('req sent')}
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link" to={'/decisions'}>Decisions</NavLink>
                        </li>
                    </ul>
                    <button className="profile-logout-btn" onClick={handleLogout}>
                        <div className="profile-img-container">
                            <img src={user.profileURL} alt="profile-img" className="profile-img" />
                        </div>
                        <h4 className='logout-heading'>Logout</h4>
                    </button>
                </>
            }
        </nav>
    </header>;
}

export default Header;