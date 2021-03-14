import "./GeneralMessage.css";

function GeneralMessage(props) {
  const message = props.message;
  let date = message.createdAt;
  let timestamp;

  if (date !== null) {
    date = date.toDate();
    const hoursZero = date.getHours() > 9 ? "" : "0";
    const minutesZero = date.getMinutes() > 9 ? "" : "0";
    timestamp = `${hoursZero}${date.getHours()}:${minutesZero}${date.getMinutes()} ${date.toDateString()}`;
  }
  return (
    <li key={message.id} className="generalmessage message">
      <div>{message.name}</div>
      <div> {timestamp}</div>
      <div className="text generalText">{message.text}</div>
    </li>
  );
}

export default GeneralMessage;
