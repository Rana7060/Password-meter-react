import { useState } from "react";

const Home = () => {
  const [weak, setWeak] = useState(false);
  const [medium, setMedium] = useState(false);
  const [strong, setStrong] = useState(false);

  function validatePassword() {
    var p = document.getElementById("myInput").value;

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

  function colorMeter() {
    var colorValue = document.getElementById("myInput").value;
    if (colorValue.length === 4) {
      setWeak(true);
    }
    if (colorValue.length === 8) {
      setMedium(true);
    }
    if (colorValue.length === 12) {
      var u = document.getElementById("U");
      u.setAttribute("style", "color: #ccc;");
      setStrong(true);
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
            id="myInput"
            onChange={(e) => {
              colorMeter();
              validatePassword();
            }}
          ></input>
        </form>
        {weak && (
          <div className="first">
            <br />
            <p style={{ color: "#ff4758" }}>Weak</p>
          </div>
        )}
        {medium && (
          <div className="second">
            <br />
            <p style={{ color: "#ffa600" }}>Medium</p>
          </div>
        )}
        {strong && (
          <div className="third">
            <br />
            <p style={{ color: "#27b160" }}>Strong</p>
          </div>
        )}

        <br />
        <br />
        <br />
        <ul className="ul">
          <li id="Q"> Must contain 8 characters</li>
          <li id="R"> Must have at least one letter</li>
          <li id="S"> Must have at least one digit</li>
          <li id="T"> Must have at least one capital letter</li>
          <li id="U"> Must be at least 12 charaters long</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
