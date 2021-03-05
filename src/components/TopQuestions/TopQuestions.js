import { useState, useEffect } from "react";
import "./TopQuestions.css";
import "firebase/firestore";

function TopQuestions(props) {
  let db = props.db;
  let [topQuestions, setTopQuestions] = useState([]);
  const numOfQuestions = 3;

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
          setTopQuestions(data);
        });
      return unsub;
    }
  }, [db]);

  return (
    <div className="container">
      <div className="title">Top Questions:</div>
      {topQuestions
        .slice(topQuestions.length - numOfQuestions)
        .reverse()
        .map((question, index) => {
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
