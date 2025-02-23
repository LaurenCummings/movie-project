import '../css/MoviePage.css';
import { useLocation } from 'react-router-dom';

function MoviePage() {
    const location = useLocation();
    const movie = location.state;
    
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    )
}

export default MoviePage;