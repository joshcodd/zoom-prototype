import "./Chat.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect } from "react";
import QuestionMessage from "../QuestionMessage/QuestionMessage";

function Chat(props) {
  let db = props.db;
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    if (db) {
      const unsub = db
        .collection("message")
        .orderBy("createdAt")
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
        });
      return unsub;
    }
  }, [db]);

  function handleMessageChange(event) {
    let message = event.target.value;
    setInput(message);
  }

  function handleSubmit() {
    if (db) {
      db.collection("message").add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        text: input,
        votes: 0,
      });
      setInput("");
    }
  }

  return (
    <div className="chat">
      <div className="splitButton">
        <button className="leftButton"> General </button>
        <button className="rightButton"> Questions </button>
      </div>

      <div className="messages">
        <ul className="message-list">
          {messages.map((message) => {
            return <QuestionMessage message={message} db={db} />;
          })}
        </ul>
      </div>

      <div className="inputArea">
        <textarea
          onChange={handleMessageChange}
          placeholder="Type your message here"
          className="input"
          name="inputArea"
          cols="48"
          rows="2"
          value={input}
        ></textarea>

        <button className="sendButton" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
