import Spotify from "../util/Spotify";
import { useState } from "react";
import "./SearchBar.css";
import PropTypes from 'prop-types';

SearchBar.propTypes = {
    setResults: PropTypes.func,
  };

function SearchBar(props) {
    const [searchTerm, setSearhTerm] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        const songs = await Spotify.getSongs(searchTerm);
        props.setResults(songs);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="song" name="song" value={searchTerm} onChange={(e) => setSearhTerm(e.target.value)} placeholder="Search for your song"/>
            <button type="submit"> Submit </button>
        </form>
    )
}

export default SearchBar;