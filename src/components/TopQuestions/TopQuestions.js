import { useState, useEffect } from "react";
import "./TopQuestions.css";
import "firebase/firestore";
import { useSpeechSynthesis } from "react-speech-kit";

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
  }, [topQuestions]);

  return (
    <div className="container">
      <div className="title">Top Questions:</div>
      {topQuestions.map((question, index) => {
        if (question.votes > 0) {
          return (
            <div className="question">
              {index + 1}. {question.text}
              <span className="votecount">{question.votes} votes</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default TopQuestions;
