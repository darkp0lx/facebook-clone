import { Avatar, Button } from "@material-ui/core";
import {
  AccountCircle,
  ExpandMore,
  Message,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import db from "../firebase.js";
import React, { useEffect, useState } from "react";
import "../assets/style/Post.css";
import firebase from "firebase";

const Post = ({ postId, profilePic, message, timestamp, username, image }) => {
  const [comments, setComments] = useState("");
  const [comment, setComment] = useState("");
  const [likesUsers, setLikesUsers] = useState("");
  useEffect(() => {
    let unsubscribe;
    let likes;
    if (postId) {
      unsubscribe = db
        .collection("post")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
      likes = db
        .collection("post")
        .doc(postId)
        .collection("likes")
        .onSnapshot((snapshot) => {
          setLikesUsers(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
      likes();
    };
  }, [postId, likesUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("post").doc(postId).collection("comments").add({
      text: comment,
      userName: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  const onLike = () => {
    if (likesUsers) {
      if (likesUsers) {
        for(let i=0;i<likesUsers.length;i++){
          if(likesUsers[i].userName==username){
            console.log("si ya le dio like")
            db.collection("post").doc(postId).collection("likes").delete({
              userName: username,
            });
          }
        }
      } else {
        db.collection("post").doc(postId).collection("likes").add({
          userName: username,
        });
      }
    }
  };
  return (
    <div className="Post">
      <div className="Post__top">
        <Avatar className="Post__avatar" src={profilePic} />
        <div className="Post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="Post__bottom">
        <p>{message}</p>
      </div>
      <div className="Post__image">
        <img src={image}></img>
      </div>
      <div className="Post__options">
        <div className="Post__option">
          <ThumbUp className="button__like" onClick={onLike} /> {/* active */}
          <p>like</p>
        </div>
        <div className="Post__option">
          <Message />
          <p>mensaje</p>
        </div>
        <div className="Post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="Post__option">
          <AccountCircle />
          <ExpandMore />
        </div>
      </div>
      <div className="Post__comments">
        <div className="Post__allComments">
          {comments
            ? comments.map((el) => (
                <div className="comment">
                  <h3>{el.userName}: </h3>
                  <p> {el.text}</p>
                </div>
              ))
            : ""}
        </div>
        <form className="Post__sendCommend">
          <input
            className="Post__comment"
            type="text"
            placeholder="ingrese su comentario"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            className="Post__comment-button"
          >
            Comentar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Post;
