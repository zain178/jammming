import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { useCallback, useState } from 'react';
import Playlist from '../Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState("New Playlist")
  const [playlistTracks, setplaylistTracks] = useState([])

  const search = useCallback((trem) => {
    Spotify.search(terrm).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    setplaylistTracks((prevTrack) => [...prevTrack, track]);  
  }, [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setplaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id) 
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, [])

  const savePlatlist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlatlist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setplaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);
  
  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='App'>
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameCahnge={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlatlist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
