import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import ShareIcon from "@material-ui/icons/Share";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import useStyles from "./Styles";
import { IEpisode } from "../EpisodeInterface";

const EpisodeCard: React.FC<IEpisode> = ({
	name,
	air_date,
	created,
	episode,
}: IEpisode) => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}></Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={name}
				subheader="September 14, 2016"
			/>
			<CardMedia
				className={classes.media}
				image="../../../../public/static/rick-and-morty-collection-folder-icon-rick-and-morty-003-256x256-png-icon.jpg"
				title={episode}
			/>
			<CardActions disableSpacing>
				<CardContent>
					{created}
					{air_date}
				</CardContent>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default EpisodeCard;
