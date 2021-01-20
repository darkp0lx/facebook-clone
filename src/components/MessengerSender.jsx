import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import "../assets/style/MessengerSender.css";
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";


const MessengerSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("post").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="MessengerSender">
      <div className="MessengerSender__Top">
        <form>
          <Avatar src={user.photoURL} />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="MessengerSender__input"
            placeholder="Escribe algo..."
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="field"
            placeholder="image Url (opcional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Publicar
          </button>
        </form>
      </div>
      <div className="MessengerSender__Buttom">
        <div className="MessengerSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Video en Vivo</h3>
        </div>
        <div className="MessengerSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="MessengerSender__option">
          <InsertEmoticon style={{ color: "yellow" }} />
          <h3>Como te sientes?</h3>
        </div>
      </div>
    </div>
  );
};

export default MessengerSender;
