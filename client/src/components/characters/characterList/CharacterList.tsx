import React, { useContext } from "react";

import { Store } from "../../../store/Store";

import { Grid, IconButton } from "@material-ui/core";
import useStyles from "./Styles";

import CharacterCard from "../characterCard/CharacterCard";

import { ICharacter, IResultCharacters } from "../interfaces";

import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@material-ui/icons/RemoveCircleOutlineSharp";

const CharacterList: React.FC<IResultCharacters | undefined> = ({
	results,
}: IResultCharacters) => {
	const { state, dispatch } = useContext(Store);

	const classes = useStyles();

	const handleToggleFavourites = (character: ICharacter) => {
		const characterInFav = state.favouriteCharacters.includes(character);

		if (characterInFav) {
			const favCharactersWithoutCharacter = state.favouriteCharacters.filter(
				(characters: ICharacter) => characters.id !== character.id
			);
			dispatch({
				type: "REMOVE_FAV_CHARACTER",
				payload: favCharactersWithoutCharacter,
			});
		} else {
			dispatch({
				type: "ADD_FAV_CHARACTER",
				payload: character,
			});
		}
	};

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
								backgroundToggle={state.favouriteCharacters.find(
									(char: ICharacter) => char.id === character.id
								)}
							/>
							<IconButton onClick={() => handleToggleFavourites(character)}>
								{state.favouriteCharacters.find(
									(char: ICharacter) => char.id === character.id
								) ? (
									<RemoveCircleOutlineSharpIcon className={classes.button} />
								) : (
									<AddCircleOutlineSharpIcon
										className={classes.button}
										style={{ color: "#43B4CA" }}
									/>
								)}
							</IconButton>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default CharacterList;
