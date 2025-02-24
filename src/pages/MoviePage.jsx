import '../css/MoviePage.css';
import { useLocation } from 'react-router-dom';
import { getCast } from '../services/api';
import { useState, useEffect } from 'react';

function MoviePage() {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const movie = location.state;

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
    
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>      

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div> 
            ) : ( 
                <div className="movie-cast">
                    <h3>Cast</h3>
                    {cast.map((person) => (
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name}/>
                            <p>{person.name} as {person.character}</p>
                        </div>

                    ))}
                </div>
            )}
        </div>     
    )
}

export default MoviePage;