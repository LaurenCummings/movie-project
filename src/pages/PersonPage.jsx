import '../css/MoviePage.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPersonDetails } from '../services/api';

function PersonPage() {
    const location = useLocation();
    const person = location.state;   
    const [details, setDetails] = useState([]);
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
    
    return (
        <div className="person-page">
            <div className="person-image">
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
            </div>
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
        </div>     
    )
}

export default PersonPage;