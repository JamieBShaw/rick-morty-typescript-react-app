import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import useStyles from "./Styles";
import { Typography, CardActions, Divider } from "@material-ui/core";

interface IProps {
	id?: number;
	name: string;
	species: string;
	image: string;
	type?: string;
	status: string;
	gender: string;
}

const CharacterCard: React.FC<IProps> = ({
	id,
	name,
	species,
	type,
	gender,
	status,
	image,
}: IProps) => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.root}>
			<CardMedia className={classes.media} image={image} />
			<CardContent>
				<Typography>
					<div>
						<h4>{name}</h4>
					</div>
					<Divider variant="inset" />
					<div>
						<h5>{species}</h5>
					</div>
					<Divider variant="inset" />
					<div>
						<h5>{status}</h5>
					</div>
					<Divider variant="inset" />
					<div>
						<h5>{gender}</h5>
					</div>
				</Typography>
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</Card>
	);
};

export default CharacterCard;
