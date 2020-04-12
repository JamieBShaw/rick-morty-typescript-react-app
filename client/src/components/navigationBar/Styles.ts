import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1,
			height: "10px",
		},
		title: {
			flexGrow: 1,
			fontFamily: "Creepster, cursive",
			fontSize: 33,
			color: "#43B4CA",
			textShadow: "2px 2px black",
		},
		navButtons: {
			fontFamily: "Creepster, cursive",
			fontSize: 20,
			color: "#43B4CA",
			textShadow: "2px 2px black",
		},
	})
);
