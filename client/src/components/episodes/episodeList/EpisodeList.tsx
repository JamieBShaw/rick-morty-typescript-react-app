import React, { useContext } from "react";

import { Store } from "../../../store/Store";
import { IResult, IEpisode } from "../EpisodeInterface";
import EpisodeCard from "../episodeCard/EpisodeCard";
import { Grid } from "@material-ui/core";
import useStyles from "./Styles";

const EpisodeList: React.FC<IResult | undefined> = ({ results }: IResult) => {
	const { state } = useContext(Store);

	const classes = useStyles();

	return (
		<div>
			<Grid className={classes.grid} container spacing={2}>
				{results.map((episode: IEpisode | undefined) => {
					return (
						<Grid key={episode!.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
							<EpisodeCard
								name={episode!.name}
								img={state.episodes[episode!.id - 1].image.medium}
								created={episode!.created}
								air_date={episode!.air_date}
								episode={episode!.episode}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default EpisodeList;
