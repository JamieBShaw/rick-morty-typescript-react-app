import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		grid: {
			padding: "15px",
			paddingTop: "30px",
			marginTop: "30px",
			fontFamily: "Creepster, cursive",
		},
		button: {
			height: "30px",
			width: "30px",
		},
	})
);

export default useStyles;
