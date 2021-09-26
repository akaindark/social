import React from 'react';
import classes from './Post.module.scss';

export default function Post(props) {
  return (

    <div className={classes.item}>
      <img className={classes.avatar}
           src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt=""/>
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}