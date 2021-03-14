import "./HostWindow.css";

function HostWindow() {
  return (
    <div className="screenContainer">
      <img
        src={process.env.PUBLIC_URL + "/screen-light.png"}
        className="screen"
        alt="Alternative Text"
      />
    </div>
  );
}

export default HostWindow;
