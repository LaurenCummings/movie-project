import '../css/Footer.css';
import tmdbLogo from '../assets/tmdbLogo.svg';

function Footer() {

    return (
        <div className="footer">
            <img src={tmdbLogo} alt="The Movie Database Logo" />
            <p>This website uses TMDB and the TMDB APIs but 
                is not endorsed, certified, or otherwise approved by TMDB.
            </p>
            <p>
                <a target="_blank" href="https://icons8.com/icon/2998/movie">Movie </a>
                icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </p>
        </div>
    )
}

export default Footer;