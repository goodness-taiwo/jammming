import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  // STATE: Search results (songs from Spotify search)
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera" },
    { id: 2, name: "Imagine", artist: "John Lennon", album: "Imagine" },
    { id: 3, name: "Billie Jean", artist: "Michael Jackson", album: "Thriller" }
  ]);

  // STATE: Playlist tracks (songs user added to their playlist)
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // STATE: Playlist name
  const [playlistName, setPlaylistName] = useState("New Playlist");

  // FUNCTION: Add a track to the playlist
  function addTrack(track) {
    // Check if track is already in playlist
    const trackExists = playlistTracks.find(savedTrack => savedTrack.id === track.id);
    
    if (trackExists) {
      return; // Don't add if already there
    }
    
    setPlaylistTracks([...playlistTracks, track]);
  }

  // FUNCTION: Remove a track from the playlist
  function removeTrack(track) {
    const newTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    setPlaylistTracks(newTracks);
  }

  // FUNCTION: Update playlist name
  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults 
          searchResults={searchResults} 
          onAdd={addTrack}
        />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks} 
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
        />
      </div>
    </div>
  );
}

export default App;