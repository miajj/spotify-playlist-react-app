import "./Card.css"

function Card({ song, isRemoval, addToPlaylist, removeFromPlaylist }) {

    let button;

    if (!isRemoval) {
        button = <button className="track-action" onClick={() => addToPlaylist(song)}>+</button>;
    } else {
        button = <button className="track-action" onClick={() => removeFromPlaylist(song)}>-</button>;
    }

    return (
        <div className="card">
            <div className="card-info">
                <div className="card-name">
                    <h3>{song.name}</h3>
                    <p>{song.artist}</p>
                </div>
                <p id="duration">{song.duration}</p>
            </div>
            {button}
        </div>
    )
}

export default Card;
