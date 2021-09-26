import React from "react";
import classes from "./../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return <li className={classes.dialogs__item + ' ' + classes.active}>
		<NavLink to={path}>{props.name}</NavLink>
	</li>
}

export default DialogItem;