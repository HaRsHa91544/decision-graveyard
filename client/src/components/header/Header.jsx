import { NavLink } from 'react-router';
import './header.css';
import { useEffect, useState } from 'react';

function Header() {
    const [user, setUserState] = useState();

    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        setUserState(userData);
    }, []);

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
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink className="nav-link" to={'/decisions'}>Decisions</NavLink>
                        </li>
                    </ul>
                    <button className="profile-logout-btn">
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