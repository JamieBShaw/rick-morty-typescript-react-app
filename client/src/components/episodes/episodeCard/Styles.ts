import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
			height: 275,
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
		},
		text: {
			textAlign: "left",
			fontSize: 16,
			fontFamily: "Creepster, cursive",
		},
	})
);

export default useStyles;
