import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

export default function Dialogs() {

	let dialogs = [
		{id: 1, name: "Dimych"},
		{id: 2, name: "Andrew"},
		{id: 3, name: "Sveta"},
		{id: 4, name: "Sasa"},
		{id: 5, name: "Viktor"},
		{id: 6, name: "Valera"},
	]

	let messages = [
		{id: 1, message: "Hi"},
		{id: 2, message: "How is your it-kamasutra"},
		{id: 3, message: "Yo"},
		{id: 4, message: "Yo"},
		{id: 5, message: "Yo"}
	]

	let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messagesElements = messages.map(m => <Message message={m.message}/>)

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