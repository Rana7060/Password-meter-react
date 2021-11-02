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
    if (p.search(/[a-z]/i).length > 0) {
      var n = document.getElementById("R");
      n.setAttribute("style", "color: #ccc;");
    }
    if (p.search(/[0-9]/) > 0) {
      var q = document.getElementById("S");
      q.setAttribute("style", "color: #ccc;");
    }
    if (p.search(/[A-Z]/i) > 0) {
      var r = document.getElementById("T");
      r.setAttribute("style", "color: #ccc;");
    }

    return true;
  }
  function colorMeter() {
    var colorValue = document.getElementById("myInput").value;
    if (colorValue.length === 2) {
      setWeak(true);
    }
    if (colorValue.length === 8) {
      setMedium(true);
    }
    if (colorValue.length === 12) {
      setStrong(true);
    }
  }

  return (
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
      {weak && <div className="first" />}
      {medium && <div className="second" />}
      {strong && <div className="third" />}

      <br />
      <ul className="ul">
        <li id="Q">Must contain 8 characters</li>
        <li id="R">Must have at least one letter</li>
        <li id="S">Must have at least one digit</li>
        <li id="T">Must have at least one capital letter</li>
      </ul>
    </div>
  );
};

export default Home;
