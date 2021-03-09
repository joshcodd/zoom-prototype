import firebase from "firebase/app";
import "./QuestionMessage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

function QuestionMessage(props) {
  const message = props.message;
  const db = props.db;
  let timestamp;
  const questions = "questions";

  let date = message.createdAt;
  if (date !== null) {
    date = date.toDate();
    const hoursZero = date.getHours() > 9 ? "" : "0";
    const minutesZero = date.getMinutes() > 9 ? "" : "0";
    timestamp = `${hoursZero}${date.getHours()}:${minutesZero}${date.getMinutes()} ${date.toDateString()}`;
  }

  function handleVoteUp(id) {
    if (db) {
      db.collection(questions)
        .doc(id)
        .update({ votes: firebase.firestore.FieldValue.increment(1) });
    }
  }

  function handleVoteDown(id) {
    if (db) {
      db.collection(questions)
        .doc(id)
        .update({ votes: firebase.firestore.FieldValue.increment(-1) });
    }
  }

  return (
    <li key={message.id} className="message">
      <div>{message.name}</div>
      <div>{timestamp}</div>
      <div className="text">{message.text}</div>
      <div className="arrows">
        <button
          className="up button"
          onClick={() => handleVoteUp(message.id)}
          id={message.id}
        >
          <i>
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              className="arrowIcon"
              color="#25D959"
            />
          </i>
        </button>
        <button
          className="up button"
          onClick={() => handleVoteDown(message.id)}
          id={message.id}
        >
          <i>
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="arrowIcon"
              color="#25D959"
            />
          </i>
        </button>
        <div className="votes">{message.votes}</div>
      </div>
    </li>
  );
}

export default QuestionMessage;
