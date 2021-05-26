import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
  return (
    <main className={classes.content}>
      <img className={classes.image}
           src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
           alt=""/>
      <div>
        ava + Description
      </div>
      <MyPosts />
    </main>
  );
}