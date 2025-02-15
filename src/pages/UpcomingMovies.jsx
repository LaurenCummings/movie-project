import '../css/UpcomingMovies.css';
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { getUpcomingMovies } from '../services/api';

function UpcomingMovies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUpcomingMovies = async () => {
            try {
                const upcomingMovies = await getUpcomingMovies();
                setMovies(upcomingMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }

        loadUpcomingMovies();
    }, [])

    return (
        <div className="upcoming-movies">

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div> 
            ) : ( 
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UpcomingMovies;