import "./HomeScreen.css";
import { useState } from "react";

import Zoom from "../Zoom/Zoom";

function HomeScreen() {
  const [name, setName] = useState("");
  const [home, setHome] = useState(true);
  const [view, setView] = useState("");

  function handleViewerButton(event) {
    setView(event.target.id);
    setHome(false);
  }

  function handleDisplayName(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      {home && (
        <div className="centreContainer">
          <label className="label">Display name: </label>
          <input
            className="displayName"
            type="text"
            id="displayName"
            value={name}
            onChange={handleDisplayName}
          ></input>

          <label className="label">View as a: </label>
          <button
            className="homeButton"
            id="student"
            onClick={handleViewerButton}
          >
            Student
          </button>
          <button className="homeButton" id="host" onClick={handleViewerButton}>
            Host
          </button>
        </div>
      )}

      {!home && <Zoom name={name} view={view} setHome={setHome} />}
    </div>
  );
}

export default HomeScreen;
