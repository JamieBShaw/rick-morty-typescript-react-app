import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import useStyles from "./Styles";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar color="transparent" title="App" position="static">
				<Toolbar>
					<Typography variant="h1" className={classes.title}>
						Rick and Morty
					</Typography>
					<Button className={classes.navButtons} component={Link} to="/">
						Home
					</Button>
					<Button
						className={classes.navButtons}
						color="inherit"
						component={Link}
						to="/characters"
					>
						Characters
					</Button>
					<Button
						className={classes.navButtons}
						color="inherit"
						component={Link}
						to="/episodes"
					>
						Episodes
					</Button>
					<Button
						className={classes.navButtons}
						color="inherit"
						component={Link}
						to="/locations"
					>
						Locations
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
