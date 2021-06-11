import React from "react";

const ToggleLibrary = ({MusicLibraryState, setMusicLibraryState}) => {

  return (
    <nav>
    <img
      src="https://img.icons8.com/ios-filled/50/000000/music-library--v2.png"
      className="toggle-library-button"
      alt={"Music Library"}
      onClick={() => setMusicLibraryState(!MusicLibraryState)}
    />
    </nav>
  );
};

export default ToggleLibrary;
