import '../css/PersonPage.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPersonDetails, getFilmCredits } from '../services/api';

function PersonPage() {
    const location = useLocation();
    const person = location.state;   
    const [details, setDetails] = useState([]);
    const [credits, setCredits] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDetails = async () => {
            try {
                const receivedDetails = await getPersonDetails(person.id);
                setDetails(receivedDetails);
            } catch (err) {
                console.log(err);
                setError("Failed to load actor details...");
            }
            finally {
                setLoading(false);
            }
        }

        loadDetails();
    }, [])

    useEffect(() => {
        const loadCredits = async () => {
            try {
                const receivedCredits = await getFilmCredits(person.id);
                setCredits(receivedCredits);
            } catch (err) {
                console.log(err);
                setError("Failed to load film credits...");
            }
            finally {
                setLoading(false);
            }
        }

        loadCredits();
    }, [])

    return (
        <div className="person-page">
            <div className="person-image">
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
            </div>
            <div className="right-column">
                <div className="person-info">
                    <h2>{person.name}</h2>
                
                    {error && <div className="error-message">{error}</div>}

                    {loading ? (
                        <div className="loading">Loading...</div> 
                    ) : ( 
                        <div className="person-details">
                            <p>{details.birthday}</p>
                            <p>{details.biography}</p>
                        </div>
                    )}            
                </div>   
                <h3>Filmography</h3>
                <div className="movie-credits">
                    {credits.map((movie) => (
                        <div className="movie-credit-info">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <p>{movie.title}</p>
                            <p>{movie.release_date}</p>
                            <p>{movie.character}</p>
                        </div>
                    ))}
                </div>
            </div>   
        </div>     
    )
}

export default PersonPage;