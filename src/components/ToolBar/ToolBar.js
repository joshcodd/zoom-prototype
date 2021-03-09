import { useState } from "react";
import "./ToolBar.css";

function ToolBar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const view = props.view;
  const dictateAt = props.dictateAt;

  function handleMoreClick() {
    setShowMenu(!showMenu);
  }

  function handleChatHideClick() {
    props.setHideChat(!props.hideChat);
  }

  function handleLeaveClick() {
    props.setHome(true);
  }

  function handleSpeechNumber(event) {
    props.setDictateAt(event.target.value);
  }

  return (
    <div className="toolbar">
      <img
        src={process.env.PUBLIC_URL + "/mute.png"}
        className="icon left"
        alt="Alternative Text"
      />
      <img
        src={process.env.PUBLIC_URL + "/video.png"}
        className="icon left"
        alt="Alternative Text"
      />

      {view === "student" && (
        <div
          className="menuDialog centre"
          style={{ visibility: showMenu ? "visible" : "hidden" }}
        >
          <div className="settings">
            <button className="chatStateButton" onClick={handleChatHideClick}>
              Turn chat {props.hideChat ? "on" : "off"}.
            </button>
          </div>
        </div>
      )}

      {view === "host" && (
        <div
          className="hostMenuDialog centre"
          style={{ visibility: showMenu ? "visible" : "hidden" }}
        >
          <div className="hostSettings">
            <label className="dictateLabel">Dictate question at:</label>
            <input
              type="range"
              className="slider"
              onChange={handleSpeechNumber}
              min="0"
              max="100"
              value={dictateAt}
            ></input>
            <label className="votesLabel">{dictateAt} votes</label>
          </div>
        </div>
      )}

      <button className="leaveButton" onClick={handleLeaveClick}>
        Leave
      </button>

      <div className="centre">
        <img
          src={process.env.PUBLIC_URL + "/participants.png"}
          className="icon"
          alt="Alternative Text"
        />
        <img
          src={process.env.PUBLIC_URL + "/chat.png"}
          className="icon"
          alt="Alternative Text"
        />
        <img
          src={process.env.PUBLIC_URL + "/screenshot.png"}
          className="icon"
          alt="Alternative Text"
        />
        <img
          src={process.env.PUBLIC_URL + "/record.png"}
          className="icon"
          alt="Alternative Text"
        />
        <img
          src={process.env.PUBLIC_URL + "/reactions.png"}
          className="icon"
          alt="Alternative Text"
        />
        <img
          src={process.env.PUBLIC_URL + "/more.png"}
          className="icon"
          alt="Alternative Text"
          onClick={handleMoreClick}
        />
      </div>
    </div>
  );
}

export default ToolBar;
