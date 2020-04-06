import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

import useStyles from "./Styles";
import { IEpisode } from "../EpisodeInterface";

const EpisodeCard: React.FC<IEpisode | any> = (
	props,
	{ name, air_date, created, episode }: IEpisode
) => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.root}>
			<CardHeader title={name} subheader={name} />
			<CardMedia className={classes.media} image={props.img} title={episode} />
			<CardActions disableSpacing>
				<CardContent>
					{created}
					{air_date}
				</CardContent>
			</CardActions>
		</Card>
	);
};

export default EpisodeCard;
