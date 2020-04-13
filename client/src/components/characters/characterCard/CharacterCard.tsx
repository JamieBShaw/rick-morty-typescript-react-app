import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import useStyles from "./Styles";
import { CardActions } from "@material-ui/core";

interface IProps {
	id?: number;
	name: string;
	species: string;
	image: string;
	type?: string;
	status: string;
	gender: string;
	backgroundToggle: boolean;
}

const CharacterCard: React.FC<IProps> = ({
	name,
	species,
	gender,
	status,
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
			<CardContent className={classes.cardContent}>
				<h2>Name: {name}</h2>
				<h5>Species: {species}</h5>
				<h5>Status: {status}</h5>
				<h5>Gender: {gender}</h5>
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</Card>
	);
};

export default CharacterCard;
