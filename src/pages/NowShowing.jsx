import '../css/NowShowing.css';
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { getNowShowing } from '../services/api';

function NowShowing() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNowShowing = async () => {
            try {
                const nowShowing = await getNowShowing();
                setMovies(nowShowing);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }

        loadNowShowing();
    }, [])

    return (
        <div className="now-showing">

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

export default NowShowing;