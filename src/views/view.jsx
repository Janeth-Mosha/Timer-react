import { useState, useEffect } from "react";
import "./timer.css";
import { TextField } from "@mui/material";

function View() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerStopped, setIsTimerStopped] = useState(false);
  const [stoppedSeconds, setStoppedSeconds] = useState(0);
  const [stoppedMinutes, setStoppedMinutes] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, isRunning]);

  const startTimer = () => {
    // const minutes = document.getElementById("minutesInput").value;
    // const seconds = document.getElementById("secondsInput").value;
    // if (isNaN(minutes) || isNaN(seconds)) {
    //   console.error(
    //     "Invalid input: Please enter a valid number for minutes and seconds."
    //   );
    //   return;
    // }
    // setMinutes(minutes);
    // setSeconds(seconds);
    setIsRunning(true);
  };

  const setDefinedTimeSeconds = (time) => {
    setMinutes(0);
    setSeconds(time);
    setIsRunning(true);
  };

  const setDefinedTimeMinutes = (time) => {
    setMinutes(time);
    setSeconds(0);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setStoppedMinutes(0);
    setStoppedSeconds(0);
  };

  return (
    <>
      <div className="surface">
        <h2>Countdown Timer</h2>
        <p>Enter the time</p>
        <div className="timer-main-container">
          {isRunning ? undefined : (
            <div className="timer-input-container">
              <div className="minutes-container">
                {/* <TextField
              label="Minutes"
              type="number"
              max={60}
              min={0}
              className="minutes"
              id="minutesInput"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
                {/* <TextField
              id="outlined-number"
              label="Number"
              type="number"
             
            /> */}
                <p className="minutes">minutes</p>
                <input
                  type="number"
                  id="minutesInput"
                  max={60}
                  min={0}
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                ></input>
              </div>

              <div className="seconds-container">
                {/* <TextField
              label="Seconds"
              type="number"
              max={60}
              min={0}
              className="seconds"
              id="secondsInput"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
                <p className="seconds">seconds</p>
                <input
                  type="number"
                  id="secondsInput"
                  max={60}
                  min={0}
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                ></input>
              </div>
            </div>
          )}

          <div className="button-wrap">
            <button
              className="button btn-set"
              onClick={startTimer}
              disabled={isRunning}
            >
              Set Time
            </button>
          </div>
        </div>

        <div className="count-container">
          <p>Count:</p>
          <p className="countdown-min"> {minutes}</p>{" "}
          <span className="colon">:</span>
          <p className="countdown-sec">{seconds}</p>
        </div>

        <div className="control-buttons-container">
          <div className="button-wrap">
            <button
              className="button btn-set"
              onClick={() => {
                setSeconds(0);
                setMinutes(0);
                setIsRunning(false);
              }}
              disabled={!isRunning}
            >
              Reset Timer
            </button>
          </div>

          {isTimerStopped ? (
            <div className="button-wrap">
              <button
                className="button btn-set"
                onClick={() => {
                  setSeconds(stoppedSeconds);
                  setMinutes(stoppedMinutes);
                  setIsRunning(true);
                }}
                // disabled={!isRunning}
              >
                Resume Timer
              </button>
            </div>
          ) : null}

          <div className="button-wrap">
            <button
              className="button btn-set"
              onClick={() => {
                setIsRunning(false);
                setStoppedSeconds(seconds);
                setStoppedMinutes(minutes);
                setIsTimerStopped(true);
              }}
              disabled={!isRunning}
            >
              Stop Timer
            </button>
          </div>
        </div>

        <div className="container">
          <div className="time">10 seconds</div>
          <div className="button-wrap">
            <button
              className="button btn-start"
              onClick={() => setDefinedTimeSeconds(10)}
              disabled={isRunning}
              value={10}
            >
              Set Time
            </button>
          </div>
        </div>
        <div className="container">
          <div className="time">20 seconds</div>
          <div className="button-wrap">
            <button
              className="button btn-start"
              onClick={() => setDefinedTimeSeconds(20)}
              disabled={isRunning}
              value={20}
            >
              Set Time
            </button>
          </div>
        </div>
        <div className="container">
          <div className="time">30 seconds</div>
          <div className="button-wrap">
            <button
              className="button btn-start"
              onClick={() => setDefinedTimeSeconds(30)}
              disabled={isRunning}
              value={30}
            >
              Set Time
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
