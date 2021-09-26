import React from 'react';
import classes from './Menu.module.scss';
import {NavLink} from "react-router-dom";

export default function Menu() {
	return (
		<nav className={classes.menu}>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink className={classes.link} activeClassName={classes.active} to="/profile">Profile</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink className={classes.link}  activeClassName={classes.active} to="/dialogs">Messages</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink className={classes.link}  activeClassName={classes.active} to="/news">News</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink className={classes.link}  activeClassName={classes.active} to="/music">Music</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink className={classes.link}  activeClassName={classes.active} to="/settings">Settings</NavLink>
				</li>
			</ul>
		</nav>
	);
}