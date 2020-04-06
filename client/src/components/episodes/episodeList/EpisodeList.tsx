import React, { useContext } from "react";

import { Store } from "../../../store/Store";
import { IResult, IEpisode } from "../EpisodeInterface";
import EpisodeCard from "../episodeCard/EpisodeCard";
import { Grid, IconButton } from "@material-ui/core";
import useStyles from "./Styles";

import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";

const EpisodeList: React.FC<IResult | undefined> = ({ results }: IResult) => {
	const { state, dispatch } = useContext(Store);

	const classes = useStyles();

	const handleToggleFavourites = (episode: IEpisode) =>
		dispatch({
			type: "ADD_FAV",
			payload: episode,
		});

	return (
		<div>
			<Grid className={classes.grid} container spacing={2}>
				{results.map((episode: IEpisode) => {
					return (
						<Grid key={episode.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
							<EpisodeCard
								image={state.episodes[episode.id - 1].image.medium}
								episode={episode.episode}
								name={episode.name}
								id={episode.id}
							/>
							<IconButton onClick={handleToggleFavourites(episode)}>
								<AddCircleOutlineSharpIcon />
							</IconButton>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default EpisodeList;
