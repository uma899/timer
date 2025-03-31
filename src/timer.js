import { useState, useEffect } from "react";

function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [input, setInput] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
      let intervalId;
  
      if (isRunning && time > 0) {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      } else if (time === 0 && isRunning && input) {
        //audio.play();
        alert("Completed");
        setIsRunning(false);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning, time, input]);
  
    const handleStart = () => {
      if(input > 0){
        if (!time) {
            setTime(input);
          }
          setIsRunning(true);
      }
    };
  
    const handlePause = () => {
      setIsRunning(false);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    //let audio = new Audio('audio.mp3')
    const gradientStyle = {
      backgroundImage: `conic-gradient(rgb(85, 0, 255) ${
        (time * 360) / input
      }deg,#282c34 0 )`,
      width: "160px",
      height: "160px",
      borderRadius: "50%", // To make it a circle
      display: time > 0 ? "grid" : "none",
    };
    return (
      <div className="timer">
        <div className="counter">
          <div
            className="time_container"
            style={
              gradientStyle
            } /* style={{ display: time > 0 && isRunning ? "block" : "none" }} */
          >
            <div className="time">
              <h1>{time}</h1>
            </div>
          </div>
  
          <div
            className="input"
            style={{ display: !isRunning && time === 0 ? "block" : "none" }}
          >
            Enter Time:
            <input
              type="number"
              //value={time}
              onChange={(e) => {
                //setTime(e);
                //setTime(e.target.value);
                setInput(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="actions">
          <button
            className="btn"
            style={isRunning ? { backgroundColor: "#e25f14" } : null}
            onClick={isRunning ? handlePause : handleStart}
          >
            {isRunning ? (
              <>Pause</>
            ) : time > 0 && time - input ? (
              <>Resume</>
            ) : (
              <>Start</>
            )}
          </button>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  export default Timer;