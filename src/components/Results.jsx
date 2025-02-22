import './Results.css';
import Card from './Card';

function Results(props) {

    return (
        <div className='results'>
            <h1>Results</h1>
            <ul>
                {props.results && props.results.map(
                    (song) =>
                        <li key={song.id}><Card song={song} addToPlaylist={props.addToPlaylist} isRemoval={false} /></li>
                )}
            </ul>
        </div>
    )
}

export default Results;