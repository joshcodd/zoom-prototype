import "../App/App.css";
import Chat from "../Chat/Chat";
import ToolBar from "../ToolBar/ToolBar";
import Window from "../HostWindow/HostWindow";
import firebase from "firebase/app";
import "firebase/firestore";
import TopQuestions from "../TopQuestions/TopQuestions";
import { useState } from "react";
import Gallery from "../Gallery/Gallery";

firebase.initializeApp({
  apiKey: "AIzaSyB_dcSrtNM1SoOdbpGK4gyDtfIJs8NQ1Mo",
  authDomain: "zoom-prototype-3c7b3.firebaseapp.com",
  projectId: "zoom-prototype-3c7b3",
  storageBucket: "zoom-prototype-3c7b3.appspot.com",
  messagingSenderId: "829189795036",
  appId: "1:829189795036:web:6ed5d9bd93c293a9ab9819",
});
const db = firebase.firestore();

function StudentApp(props) {
  const [hideChat, setHideChat] = useState(false);
  const [dictateAt, setDictateAt] = useState(10);

  return (
    <div className="App">
      <Window />
      <Gallery />
      <Chat
        db={db}
        startingChat="questions"
        name={props.name}
        hideChat={hideChat}
      />
      <TopQuestions db={db} view={props.view} dictateAt={dictateAt} />
      <ToolBar
        hideChat={hideChat}
        setHideChat={setHideChat}
        setHome={props.setHome}
        view={props.view}
        dictateAt={dictateAt}
        setDictateAt={setDictateAt}
      />
    </div>
  );
}

export default StudentApp;
