import '../css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie Database</Link>
            </div>
            <div className="navbar-links">
                <Link to="/now-showing" className="nav-link">Now Showing</Link>
                <Link to="/" className="nav-link">Popular Movies</Link>
                <Link to="/pop-people" className="nav-link">Popular People</Link>
                <Link to="/favorites" className="nav-link">Your Favorite Movies</Link>
            </div>
        </nav>
    );
}

export default NavBar;