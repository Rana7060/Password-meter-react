import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

const Home = () => {
  const [completed, setCompleted] = useState(0);
  const [data, setData] = useState("");
  const [bgColor, setBgColor] = useState("");

  function validatePassword() {
    var p = document.getElementById("password").value;

    if (p.length >= 8) {
      var m = document.getElementById("Q");
      m.setAttribute("style", "color: #ccc;");
    }
    if (p.match(/[a-z]/)) {
      var n = document.getElementById("R");
      n.setAttribute("style", "color: #ccc;");
    }
    if (p.match(/[0-9]/)) {
      var q = document.getElementById("S");
      q.setAttribute("style", "color: #ccc;");
    }
    if (p.match(/[A-Z]/)) {
      var r = document.getElementById("T");
      r.setAttribute("style", "color: #ccc;");
    }

    return true;
  }

  function colorMeter(value) {
    if (value.length >= 4) {
      setCompleted(30);
      setBgColor("#ff4758");
      setData("weak");
    }
    if (value.length >= 8) {
      setCompleted(60);
      setBgColor("#ffa600");
      setData("medium");
    }
    if (
      value.length >= 12 &&
      value.match(/[A-Z]/) &&
      value.match(/[a-z]/) &&
      value.match(/[0-9]/)
    ) {
      setCompleted(100);
      setBgColor("#27b160");
      setData("Strong!");
    }
  }

  return (
    <div className="container">
      <div className="create">
        <h1>Password Strength Meter</h1>
        <form>
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            onChange={(e) => {
              colorMeter(e.target.value);
              validatePassword();
            }}
            autoComplete="new-password"
            id="password"
            name="password"
          ></input>
        </form>

        <ProgressBar
          bgcolor={bgColor}
          completed={completed}
          data={data}
          className="progress"
        />

        <ul className="ul">
          <li id="Q"> Must contain 8 characters</li>
          <li id="R"> Must have at least one letter</li>
          <li id="S"> Must have at least one digit</li>
          <li id="T"> Must have at least one capital letter</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
