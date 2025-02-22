import './Playlist.css';
import Card from './Card';
import Spotify from '../util/Spotify';
import { useState } from 'react';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState("");
    return (
        <div className='playlist'>
            <input id='myPlaylist' name="myPlaylist" type="text" placeholder='My Playlist' onChange={(event)=>setPlaylistName(event.target.value)} value={playlistName}/>
            <ul>
                {props.playlist && props.playlist.map(
                    (song) =>
                        <li key={song.id}><Card song={song} isRemoval={true} removeFromPlaylist={props.removeFromPlaylist}/></li>
                )}
            </ul>
            <button id='save' onClick={(playlistName)=>Spotify.createPlaylist(playlistName)}>Save Playlist</button>
        </div>
    )
}
export default Playlist;