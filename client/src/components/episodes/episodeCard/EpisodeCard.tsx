import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import useStyles from "./Styles";
import { CardActions } from "@material-ui/core";

interface IProps {
	id?: number;
	name: string;
	episode: string;
	image: string;
	backgroundToggle: boolean;
}

const EpisodeCard: React.FC<IProps> = ({
	name,
	episode,
	image,
	backgroundToggle,
}: IProps) => {
	const classes = useStyles();

	return (
		<Card
			variant="outlined"
			className={classes.root}
			style={
				backgroundToggle
					? { backgroundColor: "#43B4CA" }
					: { backgroundColor: "#FFFFFF" }
			}
		>
			<CardMedia className={classes.media} image={image} />
			<CardContent className={classes.text}>
				<h4>{name}</h4>
				<h4>{episode}</h4>
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</Card>
	);
};

export default EpisodeCard;
