import { useState } from "react";
import "./ToolBar.css";

function ToolBar(props) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMoreClick() {
    setShowMenu(!showMenu);
  }

  function handleChatHideClick() {
    props.setHideChat(!props.hideChat);
  }

  return (
    <div className="toolbar">
      <img src="mute.png" className="icon left" alt="Alternative Text" />
      <img src="video.png" className="icon left" alt="Alternative Text" />
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

      <button className="leaveButton">Leave</button>

      <div className="centre">
        <img src="participants.png" className="icon" alt="Alternative Text" />
        <img src="chat.png" className="icon" alt="Alternative Text" />
        <img src="screenshot.png" className="icon" alt="Alternative Text" />
        <img src="record.png" className="icon" alt="Alternative Text" />
        <img src="reactions.png" className="icon" alt="Alternative Text" />
        <img
          src="more.png"
          className="icon"
          alt="Alternative Text"
          onClick={handleMoreClick}
        />
      </div>
    </div>
  );
}

export default ToolBar;
