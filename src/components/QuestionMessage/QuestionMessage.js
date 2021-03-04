import firebase from "firebase/app";
import "./QuestionMessage.css";

function QuestionMessage(props) {
  const message = props.message;
  const db = props.db;

  function handleVoteUp(event) {
    if (db) {
      db.collection("message")
        .doc(event.target.id)
        .update({ votes: firebase.firestore.FieldValue.increment(1) });
    }
  }

  function handleVoteDown(event) {
    if (db) {
      db.collection("message")
        .doc(event.target.id)
        .update({ votes: firebase.firestore.FieldValue.increment(-1) });
    }
  }

  return (
    <li key={message.id} className="message">
      <div>{"this is my name"}</div>
      <div className="text">{message.text}</div>
      <div className="arrows">
        <button className="up" onClick={handleVoteUp} id={message.id}>
          ^
        </button>
        <button className="up" onClick={handleVoteDown} id={message.id}>
          v
        </button>
        <span className="votes">{message.votes}</span>
      </div>
    </li>
  );
}

export default QuestionMessage;
