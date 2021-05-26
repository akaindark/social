import React from 'react';
import classes from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png" alt=""/>
      </header>
    </>
  );
}