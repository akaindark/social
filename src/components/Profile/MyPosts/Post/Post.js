import React from 'react';
import classes from './Post.module.scss';

export default function Post() {
  return (

    <div className={classes.item}>
      <img className={classes.avatar}
           src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt=""/>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}