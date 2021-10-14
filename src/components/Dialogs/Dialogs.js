import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

export default function Dialogs(props) {

	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

	return (
		<>
			<div className={classes.dialogs}>
				<ul className={classes.dialogs__list}>
					{dialogsElements}

				</ul>
				<ul className={classes.messages}>
					{messagesElements}
				</ul>
			</div>
		</>
	);
}