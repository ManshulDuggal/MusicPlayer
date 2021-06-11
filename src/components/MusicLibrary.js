import React from "react";
import SongsInLibrary from "./SongsInLibrary";

const MusicLibrary = ({
  MusicLibraryState,
  track,
  setCurrentTrack,
  trackRef,
  playing,
  setTrack,
}) => {
  return (
    <div className= {`library-container ${MusicLibraryState ? 'active-musiclibrary': ""}`}>
      <h2>Song Library</h2>
      <div className="track-list">
        {track.map((songList) => (
          <SongsInLibrary
            setTrack={setTrack}
            track={track}
            setCurrentTrack={setCurrentTrack}
            id ={songList.id}
            songList={songList}
            key={songList.id}
            trackRef={trackRef}
            playing={playing}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicLibrary;
