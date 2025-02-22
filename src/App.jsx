import Banner from "./components/Banner";
import Playlist from "./components/Playlist";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function addToPlaylist(song) {
    if(playlist.some((savedSong)=>savedSong.id===song.id)){
      return;
    }
    setPlaylist((prev) => [song, ...prev]);
}

function removeFromPlaylist(song) {
    setPlaylist(
        playlist.filter((item) => item.id !== song.id)
    );
}

  return (
    <div>
      <Banner />
      <div className="app">
      <SearchBar setResults={setResults} />
        <div className="lists">
          <Results results={results} addToPlaylist={addToPlaylist} />
          <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist}/>
        </div>
      </div>
    </div>
  )
}

export default App;