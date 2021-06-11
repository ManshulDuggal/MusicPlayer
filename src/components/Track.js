import React from "react";

const Track = ({ currentTrack }) => {
  return (
    <div className="track-container">
      <img
        src={currentTrack.cover}
        className="track-image"
        alt={currentTrack.name}
      ></img>
      <h2>{currentTrack.name}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
};

export default Track;
