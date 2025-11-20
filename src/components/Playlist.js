import React from 'react';
import Tracklist from './Tracklist';
import './Playlist.css';

function Playlist(props) {
  // Function to handle when user types a new playlist name
  function handleNameChange(event) {
    props.onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input 
        defaultValue={props.playlistName}
        onChange={handleNameChange}
      />
      <Tracklist 
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;