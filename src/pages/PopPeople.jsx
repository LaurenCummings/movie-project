import '../css/PopPeople.css';
import { useState, useEffect } from 'react';
import { getPopularPeople, searchPeople } from '../services/api';

function PopPeople() {
    const [searchQuery, setSearchQuery] = useState("");
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

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);
        try {
            const searchResults = await searchPeople(searchQuery);
            setPeople(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search people...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pop-people">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for people..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

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