import React, { ReactElement } from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import useStyles from "./Styles";
import { Typography, CardActions } from "@material-ui/core";

interface IProps {
	id: number;
	name: string;
	episode: string;
	image: string;
}

const EpisodeCard: React.FC<IProps> = ({
	id,
	name,
	episode,
	image,
}: IProps) => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.root}>
			<CardMedia className={classes.media} image={image} />
			<CardContent>
				<Typography>
					<h4>
						{episode}: {name}
					</h4>
				</Typography>
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</Card>
	);
};

export default EpisodeCard;
