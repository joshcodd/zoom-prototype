import "./ToolBar.css";

function ToolBar() {
  return (
    <div className="toolbar">
      <img src="mute-4.png" className="icon left" alt="Alternative Text" />
      <img src="video.png" className="icon left" alt="Alternative Text" />

      <button className="leaveButton">Leave</button>

      <div className="centre">
        <img src="participants.png" className="icon" alt="Alternative Text" />
        <img src="chat.png" className="icon" alt="Alternative Text" />
        <img src="screenshot.png" className="icon" alt="Alternative Text" />
        <img src="record.png" className="icon" alt="Alternative Text" />
        <img src="reactions.png" className="icon" alt="Alternative Text" />
      </div>
    </div>
  );
}

export default ToolBar;
