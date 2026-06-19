import './header.css';
function Header() {
    return <header>
        <div className="logo-container">
            <img className="dg-logo" src="/logo.png" alt="decision-graveyard-logo" />
            <h1 className='dg-logo-text'>Decision Graveyard</h1>
        </div>
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">Home</li>
                <li className="nav-list-item">Decisions</li>
            </ul>
            <button className="logout-btn">Logout</button>
        </nav>
    </header>;
}

export default Header;