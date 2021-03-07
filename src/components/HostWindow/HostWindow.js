import "./HostWindow.css";

function HostWindow() {
  return (
    <div className="window">
      <img
        src={process.env.PUBLIC_URL + "/screen.png"}
        className="screen"
        alt="Alternative Text"
      />
    </div>
  );
}

export default HostWindow;
