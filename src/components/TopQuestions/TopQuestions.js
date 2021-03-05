import { useState, useEffect } from "react";
import "./TopQuestions.css";
import "firebase/firestore";
import { useSpeechSynthesis } from "react-speech-kit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function TopQuestions(props) {
  let time = new Date();
  let db = props.db;
  let [topQuestions, setTopQuestions] = useState([]);
  const numOfQuestions = 3;
  const [lastSpeech, setLastSpeech] = useState(time.getTime() / 1000);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    if (db) {
      const unsub = db
        .collection("message")
        .orderBy("votes")
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          const topThree = data.slice(data.length - numOfQuestions).reverse();
          setTopQuestions(topThree);
        });
      return unsub;
    }
  }, [db]);

  useEffect(() => {
    for (let i = 0; i < Math.min(numOfQuestions, topQuestions.length); i++) {
      let question = topQuestions[i];
      const timeDiff = time.getTime() / 1000 - lastSpeech;
      if (question.votes > 56 && timeDiff > 10 && question.read === false) {
        speak({ text: question.text });
        setLastSpeech(time.getTime() / 1000);
        if (db) {
          db.collection("message").doc(question.id).update({ read: true });
        }
        break;
      }
    }
  }, [db, lastSpeech, speak, time, topQuestions]);

  function removeQuestion(id) {
    if (db) {
      db.collection("message").doc(id).delete();
    }
  }

  return (
    <div className="container">
      <div className="title">Top Questions:</div>
      {topQuestions.map((question, index) => {
        if (question.votes > 0) {
          return (
            <div className="question">
              {index + 1}. {question.text}
              <div className="hostControls">
                <button
                  onClick={() => speak({ text: question.text })}
                  className="hostButton"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={faVolumeUp}
                      className="hostIcon"
                      color="#25D959"
                    />
                  </i>
                </button>
                <button
                  onClick={() => removeQuestion(question.id)}
                  className="hostButton"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="hostIcon"
                      color="#B32323"
                    />
                  </i>
                </button>
              </div>
              <span className="votecount">{question.votes} votes</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default TopQuestions;
