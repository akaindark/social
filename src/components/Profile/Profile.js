import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {

  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </main>
  );
}