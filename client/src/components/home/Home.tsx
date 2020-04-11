import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./Styles";

const Home: React.FC = () => {
	const classes = useStyles();

	return (
		<Container fixed maxWidth="xl">
			<img
				src="https://cdn.dribbble.com/users/2418882/screenshots/8171392/rick-morty.png"
				alt="home-rick-and-morty"
				className={classes.image}
			/>
		</Container>
	);
};

export default Home;
