import React, { useState, useRef } from "react";
//importing state

//importing components
import MusicPlayer from "./components/MusicPlayer";
import Track from "./components/Track";
import MusicLibrary from "./components/MusicLibrary";

import ToggleLibrary from "./components/ToggleLibrary";

//importing sass
import "./styles/app.scss";
//importing song data
import tracks from "./trackData";

//ref, YOu cant select html elements like vanilla js so this helps to access those tags in react.

function App() {
  const trackRef = useRef(null);
  //state
  const [track, setTrack] = useState(tracks());
  const [currentTrack, setCurrentTrack] = useState(track[0]);
  const [playing, setPlaying] = useState(false);
  //states
  const [trackTime, setTrackTime] = useState({
    currentTime: 0,
    duration: 0,
    trackAnimation: 0,
  });
  


  const [MusicLibraryState, setMusicLibraryState] = useState(false);
  
  //onTimeUpdate event runs everytime time chnages in audio
  const trackTimeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    //calculate percentage
    const calculateCurrent = Math.round(current);
    const calculateCurrentDuration = Math.round(duration);
    const trackAnimationPercentage = Math.round(
      (calculateCurrent / calculateCurrentDuration) * 100
    );

    setTrackTime({
      ...trackTime,
      currentTime: current,
      duration,
      trackAnimation: trackAnimationPercentage,
    });
  };

  const trackEndHandler = async () => {
    let currentIndex = track.findIndex((song) => song.id === currentTrack.id);
    await setCurrentTrack(track[(currentIndex + 1) % track.length]);
    if (playing) trackRef.current.play();
  };
  return (
    <div className={`App ${MusicLibraryState ? "Musiclibrary-active" : ""}`}>
      <title>Music Player</title>
      <ToggleLibrary
        MusicLibraryState={MusicLibraryState}
        setMusicLibraryState={setMusicLibraryState}
      />
      <Track currentTrack={currentTrack} />
      <MusicPlayer
        trackRef={trackRef}
        currentTrack={currentTrack}
        playing={playing}
        setPlaying={setPlaying}
        setTrackTime={setTrackTime}
        trackTime={trackTime}
        track={track}
        setCurrentTrack={setCurrentTrack}
        setTrack={setTrack}
      />
      <MusicLibrary
        MusicLibraryState={MusicLibraryState}
        setTrack={setTrack}
        track={track}
        setCurrentTrack={setCurrentTrack}
        trackRef={trackRef}
        playing={playing}
      />
      <audio
        onTimeUpdate={trackTimeUpdateHandler}
        //song loads up and the number is fetched up with out needing to click on the play button
        onLoadedMetadata={trackTimeUpdateHandler}
        ref={trackRef}
        src={currentTrack.audio}
        //runs the function when the event or songs ends
        onEnded={trackEndHandler}
      ></audio>
    </div>
  );
}

export default App;
