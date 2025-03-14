import '../css/MoviePage.css';
import { useLocation, Link } from 'react-router-dom';
import { getCast } from '../services/api';
import { useState, useEffect } from 'react';
import { useMovieContext } from '../contexts/MovieContext';

function MoviePage() {
    const location = useLocation();
    const movie = location.state;   
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    const formattedDate = () => {
        const release_month = movie.release_date?.split("-")[1];
        const release_day = movie.release_date?.split("-")[2];
        const release_year = movie.release_date?.split("-")[0];
        return release_month + "-" + release_day + "-" + release_year;
    }

    useEffect(() => {
        const loadCast = async () => {
            try {
                const receivedCast = await getCast(movie.id);
                setCast(receivedCast);
            } catch (err) {
                console.log(err);
                setError("Failed to load cast...");
            }
            finally {
                setLoading(false);
            }
        }

        loadCast();
    }, [])

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className="movie-page">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <button className={`fav-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{formattedDate()}</p>
                <p>{movie.overview}</p>
            
                {error && <div className="error-message">{error}</div>}

                {loading ? (
                    <div className="loading">Loading...</div> 
                ) : ( 
                    <div>
                        <h3>Cast</h3>
                        <div className="movie-cast">
                            {cast.map((person, index) => (
                                index < 8 && (
                                    <div key={cast.id} className="cast-member">
                                        <Link to="/person-page" state={person} >
                                            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name}/>
                                        </Link>
                                        <p className="cast-name">{person.name}</p>
                                        <p className="cast-character">{person.character}</p>
                                    </div>  
                                ) 
                            ))}
                        </div>
                        {isExpanded ? (
                            <div className="movie-cast">
                                {cast.map((person, index) => (
                                    index > 7 && (
                                        <div key={cast.id} className="cast-member">
                                            <Link to="/person-page" state={person} >
                                                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name}/>
                                            </Link>
                                            <p className="cast-name">{person.name}</p>
                                            <p className="cast-character">{person.character}</p>
                                        </div>  
                                    ) 
                                ))}
                            </div>                            
                        ) : (
                            null
                        )}
                        {cast.length > 7 ? (
                            <button className="show-more" onClick={toggleExpanded}>
                                {isExpanded ? 'Show Less' : 'Show More'}
                            </button>                             
                        ) : null}
                    </div>
                )}            
            </div>      
        </div>     
    )
}

export default MoviePage;