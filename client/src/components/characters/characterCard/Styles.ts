import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
		},
		cardContent: {
			textAlign: "left",
			fontSize: 18,
			paddingLeft: "10px",
			marginTop: "0px",
			paddingTop: "0px",
		},
	})
);

export default useStyles;
