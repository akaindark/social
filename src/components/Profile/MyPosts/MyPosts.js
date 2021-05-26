import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div>
      My post
      <div>
        New post
      </div>
      <div className={classes.posts}>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}