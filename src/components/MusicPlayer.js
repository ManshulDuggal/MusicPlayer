import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faPauseCircle,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = ({
  track,
  setCurrentTrack,
  currentTrack,
  playing,
  setPlaying,
  trackRef,
  trackTime,
  setTrackTime,
  setTrack,
}) => {
  //use effect
  useEffect(() => {
    const selectedTrack = track.map((songList) => {
      if (songList.id === currentTrack.id) {
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
  }, [currentTrack, setTrack, track]);
  //event handlers
  const playTrackHandler = () => {
    if (playing) {
      trackRef.current.pause();
      setPlaying(!playing);
    } else {
      trackRef.current.play();
      setPlaying(!playing);
    }
  };

  //for time foramattng
  const formatTIme = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragableInput = (e) => {
    trackRef.current.currentTime = e.target.value;
    setTrackTime({ ...trackTime, currentTime: e.target.value });
  };

  //function for forward and back button
  const switchTrackHandler = async (direction) => {
    let currentIndex = track.findIndex((song) => song.id === currentTrack.id);

    if (direction === "forward-button") {
      await setCurrentTrack(track[(currentIndex + 1) % track.length]);
      if (playing) trackRef.current.play();
    }
    if (direction === "back-button") {
      if ((currentIndex - 1) % track.length === -1) {
        await setCurrentTrack(track[track.length - 1]);
        if (playing) trackRef.current.play();
        return;
      }
      await setCurrentTrack(track[(currentIndex - 1) % track.length]);
    }
    if (playing) trackRef.current.play();
  };
  //adding the animation to track div
  const trackAnim = {
    transform: `translateX(${trackTime.trackAnimation}%)`,
  };
  return (
    <div className="player-container">
      <div className="player-controlinfo">
        <p>{formatTIme(trackTime.currentTime)}</p>

        <div
          style={{
            background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`,
          }}
          className="track-range"
        >
          <input
            min={0}
            max={trackTime.duration || 0}
            onChange={dragableInput}
            value={trackTime.currentTime}
            type="range"
          />
          <div style={trackAnim} className="animate-track-range"></div>
        </div>

        <p>{trackTime.duration ? formatTIme(trackTime.duration) : "0:00"}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          icon={faCaretLeft}
          size="3x"
          className="back-button"
          onClick={() => switchTrackHandler("back-button")}
        />

        <FontAwesomeIcon
          size="3x"
          onClick={playTrackHandler}
          className="play-button"
          icon={playing ? faPauseCircle : faRecordVinyl}
        />
        <FontAwesomeIcon
          icon={faCaretRight}
          size="3x"
          className="forward-button"
          onClick={() => switchTrackHandler("forward-button")}
        />
      </div>

      {/* //here we are making use of the userRef to access the html */}
    </div>
  );
};

export default MusicPlayer;
