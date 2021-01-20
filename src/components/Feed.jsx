import React, { useEffect, useState } from "react";
import "../assets/style/Feed.css";
import db from "../firebase";
import HistoryReel from "./HistoryReel";
import MessengerSender from "./MessengerSender";
import Post from "./Post";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="Feed">
      <HistoryReel />
      <MessengerSender />
      {posts.map((post) => (
        <Post
          postId={post.id}
          key={post.id}
          timestamp={post.data.timestamp}
          image={post.data.image}
          username={post.data.username}
          profilePic={post.data.profilePic}
          message={post.data.message}
        />
      ))}
    </div>
  );
};

export default Feed;
