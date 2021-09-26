import React from "react";
import classes from "./ProfileInfo.module.scss";

export default function ProfileInfo (props) {
	return(
		<>
			<img className={classes.image}
					 src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
					 alt=""/>
			<div className={classes.descriptionBlock}>
				ava + Description
			</div>
		</>
	);
}