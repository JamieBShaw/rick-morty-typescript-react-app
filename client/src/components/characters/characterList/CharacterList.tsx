import React from "react";

// import { Store } from "../../../store/Store";

import { Grid } from "@material-ui/core";
import useStyles from "./Styles";

// import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import CharacterCard from "../characterCard/CharacterCard";

import { ICharacter, IResultCharacters } from "../interfaces";

const CharacterList: React.FC<IResultCharacters | undefined> = ({
	results,
}: IResultCharacters) => {
	// const { state, dispatch } = useContext(Store);

	const classes = useStyles();

	// const handleToggleFavourites = (character: ICharacter) =>
	// 	dispatch({
	// 		type: "ADD_FAV_CHARACTER",
	// 		payload: character,
	// 	});

	// console.log(state);

	return (
		<div>
			<Grid className={classes.grid} container spacing={2}>
				{results.map((character: ICharacter) => {
					return (
						<Grid key={character.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
							<CharacterCard
								image={character.image}
								species={character.species}
								gender={character.gender}
								type={character.type}
								status={character.status}
								name={character.name}
								id={character.id}
							/>
							{/* <IconButton onClick={handleToggleFavourites(character)}>
								<AddCircleOutlineSharpIcon />
							</IconButton> */}
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default CharacterList;
