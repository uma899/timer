import "./App.css";
import { useState } from "react";
import Timer from "./timer";

function App() {
  const [currentScreen, setCurrentScreen] = useState(<Timer />);
  const [leftAnim, setLeftAnim] = useState(false);
  const [theme, setTheme] = useState("App white");

  return (
    <div className={theme}>
      <div className="main">
        <div
          className="screen"
          style={leftAnim ? { transform: `translateX(-100%)` } : null}
        >
          {currentScreen}
        </div>

        <div className="set_screen">
          <button
            className="btn-2"
            style={
              currentScreen.type === Timer
                ? { backgroundColor: "rgba(162, 162, 162, 0.48)" }
                : null
            }
            onClick={() => {
              setLeftAnim(true);
              setTimeout(() => {
                setCurrentScreen(<Timer />);
                setLeftAnim(false);
              }, 310);
            }}
            disabled={currentScreen.type === Timer ? true : false}
          >
            Timer
          </button>
          <button
            className="btn-2"
            style={
              currentScreen.type === Stopwatch
                ? { backgroundColor: "rgba(162, 162, 162, 0.48)" }
                : null
            }
            onClick={() => {
              setLeftAnim(true);
              setTimeout(() => {
                setCurrentScreen(<Stopwatch />);
                setLeftAnim(false);
              }, 310);
            }}
            disabled={currentScreen.type === Stopwatch ? true : false}
          >
            Stopwatch
          </button>
        </div>
        </div>
        <div className="description">
          <p>
            Time is a fundamental and irreplaceable resource that impacts every
            aspect of life, from personal goals to professional success, and its
            importance lies in its ability to be used wisely to achieve outcomes
            and live a fulfilling life. Here's a more detailed look at the
            importance of time: Why Time is Valuable: Irreplaceable Resource:
            Once time passes, it cannot be retrieved, making it a precious and
            finite resource. Foundation for Goals and Dreams: Effective time
            management is crucial for achieving personal and professional goals,
            as it allows for focused effort and efficient task completion.
            Impact on Mental Health: Poor time management can lead to stress and
            anxiety, while effective time management can reduce these feelings
            and promote a sense of control. Opportunity for Growth: Time allows
            for learning, skill development, and personal growth, both
            professionally and personally. Foundation for Relationships:
            Respecting others' time and being punctual are important for
            building strong relationships. Increased Productivity: Effective
            time management leads to increased productivity and efficiency,
            allowing individuals to accomplish more in less time. Improved
            Decision-Making: Taking the time to consider options and make
            thoughtful decisions can lead to better outcomes. Self-Discipline:
            Managing time effectively can improve self-discipline and the
            ability to prioritize tasks. Preventing Procrastination: Effective
            time management can help prevent procrastination and ensure that
            responsibilities are managed efficiently. Living with Purpose:
            Recognizing the importance of time helps individuals live with
            purpose and direction, ultimately leading to a more satisfying
            existence
          </p>
        </div>
      
      <button
        className="btn-2 top_right"
        style={{ width: "200px" }}
        onClick={() => {
          if (theme === "App white") {
            setTheme("App dark");
          } else {
            setTheme("App white");
          }
        }}
      >
        Change theme
      </button>
    </div>
  );
}

export default App;

function Stopwatch() {
  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
    </div>
  );
}
