import { useState, useEffect } from "react";
import "./TopQuestions.css";
import "firebase/firestore";
import { useSpeechSynthesis } from "react-speech-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function TopQuestions(props) {
  const time = new Date();
  const db = props.db;
  const [topQuestions, setTopQuestions] = useState([]);
  const numOfQuestions = 3;
  const [lastSpeech, setLastSpeech] = useState(time.getTime() / 1000);
  const { speak } = useSpeechSynthesis();
  const view = props.view;
  const dictateAt = props.dictateAt;
  const questions = "questions";
  const timeLimit = 10;

  useEffect(() => {
    if (db) {
      const unsub = db
        .collection(questions)
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
      const question = topQuestions[i];
      const timeDiff = time.getTime() / 1000 - lastSpeech;
      if (
        question.votes > dictateAt &&
        timeDiff > timeLimit - 1 &&
        question.read === false
      ) {
        speak({ text: question.text });
        setLastSpeech(time.getTime() / 1000);
        if (db) {
          db.collection(questions).doc(question.id).update({ read: true });
        }
        break;
      }
    }
    // eslint-disable-next-line
  }, [db, dictateAt, lastSpeech, speak, topQuestions]);

  function removeQuestion(id) {
    if (db) {
      db.collection(questions).doc(id).delete();
    }
  }

  return (
    <div className="container">
      <div className="title">Top Questions:</div>
      {topQuestions.map((question, index) => {
        if (question.votes > 0) {
          return (
            <div className="question">
              <div className="questionText">
                {index + 1}. {question.text}
              </div>

              <div className="rightContainer">
                {question.votes} votes
                {view === "host" && (
                  <div className="hostControls">
                    <button
                      onClick={() => speak({ text: question.text })}
                      className="hostButton"
                    >
                      <i>
                        <FontAwesomeIcon icon={faVolumeUp} color="#25D959" />
                      </i>
                    </button>
                    <button
                      onClick={() => removeQuestion(question.id)}
                      className="hostButton"
                    >
                      <i>
                        <FontAwesomeIcon icon={faTimes} color="#B32323" />
                      </i>
                    </button>
                  </div>
                )}
              </div>
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
