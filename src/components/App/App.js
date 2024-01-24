import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { useCallback, useState } from 'react';
import Playlist from '../Playlist/Playlist';

function App() {

  cosnt [searchResults, setSearchResults] = useState([])
  cosnt [playlistName, setPlaylistName] = useState("New Playlist")
  cosnt [playlistTracks, setplaylistTracks] = useState([])

  const search = useCallback((trem) => {
    Spotify.search(terrm).then(setSearchResults);
  }, []);
  
  return (
    <div className="App">
      <h1>Ja<span>mmm</span>ing</h1>
      <SearchBar />
    </div>
  );
}

export default App;
