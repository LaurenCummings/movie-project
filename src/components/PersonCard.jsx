import '../css/PersonCard.css';

function PersonCard({person}) {

    return (
        <div className="person-card">
            <div className="person-poster">
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
            </div>
            <div className="person-info">
                <h3>{person.name}</h3>
            </div>
        </div>
    )    
}

export default PersonCard;