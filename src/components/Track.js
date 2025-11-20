import React from 'react';
import './Track.css';

function Track(props) {
  // Function to handle when + or - button is clicked
  function handleClick() {
    if (props.isRemoval) {
      props.onRemove(props.track);
    } else {
      props.onAdd(props.track);
    }
  }

  // Decide which button to show: + or -
  function renderAction() {
    if (props.isRemoval) {
      return <button className="Track-action" onClick={handleClick}>-</button>;
    } else {
      return <button className="Track-action" onClick={handleClick}>+</button>;
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;