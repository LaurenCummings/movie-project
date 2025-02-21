import '../css/PopPeople.css';
import { useState, useEffect } from 'react';
import { getPopularPeople } from '../services/api';

function PopPeople() {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularPeople = async () => {
            try {
                const popularPeople = await getPopularPeople();
                setPeople(popularPeople);
            } catch (err) {
                console.log(err);
                setError("Failed to load people...");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularPeople();
    }, [])

    return (
        <div className="pop-people">


            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div> 
            ) : ( 
                <div className="movies-grid">
                    {people.map((person) => (
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
                            <h3>{person.name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PopPeople;