import "./Chat.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect } from "react";
import QuestionMessage from "../QuestionMessage/QuestionMessage";
import GeneralMessage from "../GeneralMessage/GeneralMessage";

function Chat(props) {
  let db = props.db;
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState([]);
  let [chatState, setChatState] = useState(props.startingChat);
  let [name, setName] = useState(props.name);

  useEffect(() => {
    let selectedButton = document.getElementById(chatState).style;
    selectedButton.backgroundColor = "white";
    selectedButton.color = "black";
    setName(props.name);
  }, [chatState]);

  useEffect(() => {
    if (db) {
      if (chatState == "questions") {
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
      } else {
        const unsub = db
          .collection("general")
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
    }
  }, [db, chatState]);

  function handleAnonymousClick(event) {
    let displayName;
    if (event.target.value == props.name) {
      displayName = "Anonymous";
    } else {
      displayName = props.name;
    }
    setName(displayName);
  }

  function handleMessageChange(event) {
    let message = event.target.value;
    setInput(message);
  }

  function handleSubmit() {
    if (db) {
      if (chatState == "questions") {
        db.collection("message").add({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          text: input,
          votes: 0,
          name: name,
        });
      } else {
        db.collection("general").add({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          text: input,
          name: name,
        });
      }
    }
    setInput("");
  }

  function handleChatChange(state) {
    const prevState = chatState;
    const prevButton = document.getElementById(prevState).style;
    prevButton.backgroundColor = "#161616";
    prevButton.color = "white";
    setChatState(state);
  }

  return (
    <div className="chat">
      <div className="splitButton">
        <button
          className="leftButton"
          id="general"
          onClick={() => handleChatChange("general")}
        >
          General
        </button>
        <button
          className="rightButton"
          id="questions"
          onClick={() => handleChatChange("questions")}
        >
          Questions
        </button>
      </div>

      <div className="messages">
        <ul className="message-list">
          {messages.map((message) => {
            if (chatState == "questions") {
              return <QuestionMessage message={message} db={db} />;
            } else {
              return <GeneralMessage message={message} />;
            }
          })}
        </ul>
      </div>

      <div className="inputArea">
        <textarea
          onChange={handleMessageChange}
          placeholder="Type your message here..."
          className="input"
          name="inputArea"
          cols="48"
          rows="2"
          value={input}
        ></textarea>

        <div className="inputdialog">
          <button className="sendButton" onClick={handleSubmit}>
            Send
          </button>
          {chatState == "questions" && (
            <div className="isAnonymous">
              <input
                className="checkbox"
                type="checkbox"
                id="anonymous"
                value={name}
                onClick={handleAnonymousClick}
              />
              <label>Post anonymously?</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
