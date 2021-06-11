import React from "react";

const SongsInLibrary = ({
  songList,
  setCurrentTrack,
  trackRef,
  playing,
  id,
  track,
  setTrack,
  
}) => {
  const currentTrackHandler = async() => {
    await setCurrentTrack(songList);
    

    //seleted song toggle active state
    const selectedTrack = track.map((songList) => {
      if (songList.id === id) {
        return {
          ...songList,
          active: true,
        };  
      } else {
        return {
          ...songList,
          active: false,
        };
      }
    });
    setTrack(selectedTrack);

    if(playing) trackRef.current.play();
  };

  return (
    <div
      onClick={currentTrackHandler}
      className={`library-song ${songList.active ? 'selected' : ""}`}
    >
      <img
        src={songList.cover}
        className="track-image"
        alt={songList.name}
      ></img>

      <div className="track-info">
        <h3>{songList.name}</h3>
        <h4>{songList.artist}</h4>
      </div>
    </div>
  );
};

export default SongsInLibrary;
