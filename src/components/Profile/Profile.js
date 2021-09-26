import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
}