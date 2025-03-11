import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { List } from 'phosphor-react';
import { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie Database</Link>
            </div>
            <div className={`navbar-links ${isOpen ? "menuOpen" : ""}`}>
                <Link to="/now-showing" className="nav-link" onClick={isOpen ? toggleMenu : null}>Now Showing</Link>
                <Link to="/pop-movies" className="nav-link" onClick={isOpen ? toggleMenu : null}>Popular Movies</Link>
                <Link to="/pop-people" className="nav-link" onClick={isOpen ? toggleMenu : null}>Popular People</Link>
                <Link to="/favorites" className="nav-link" onClick={isOpen ? toggleMenu : null}>Your Favorite Movies</Link>
            </div>
            <div>
                <button className="hamburgerMenu" onClick={toggleMenu}>
                    <List size={42} />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;