import "./GeneralMessage.css";

function GeneralMessage(props) {
  const message = props.message;
  return (
    <li key={message.id} className="message">
      <div>{message.name}</div>
      <div className="text">{message.text}</div>
    </li>
  );
}

export default GeneralMessage;
