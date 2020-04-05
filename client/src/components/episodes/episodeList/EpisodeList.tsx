import React from "react";
import { IResult, IEpisode } from "../EpisodeInterface";
import EpisodeCard from "../episodeCard/EpisodeCard";
import { Grid } from "@material-ui/core";
import useStyles from "./Styles";

const EpisodeList: React.FC<IResult | undefined> = (
	{ img, id },
	{ results }: IResult
) => {
	const classes = useStyles();

	return (
		<div>
			<Grid className={classes.grid} container spacing={2}>
				{results.map((episode: IEpisode | undefined) => {
					return (
						<Grid key={episode!.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
							<EpisodeCard
								name={episode!.name}
								id={episode!.id}
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
