import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./Styles";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar color="transparent" title="App" position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						className={classes.menuButton}
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						App
					</Typography>
					<Button component={Link} to="/">
						Home
					</Button>
					<Button color="inherit" component={Link} to="/characters">
						Characters
					</Button>
					<Button color="inherit" component={Link} to="/episodes">
						Episodes
					</Button>
					<Button color="inherit" component={Link} to="/locations">
						Locations
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
