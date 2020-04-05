import React from "react";
import { IResult, IEpisode } from "../EpisodeInterface";
import EpisodeCard from "../episodeCard/EpisodeCard";
import { Grid } from "@material-ui/core";
import useStyles from "./Styles";

const EpisodeList: React.FC<IResult | undefined> = ({ results }: IResult) => {
	const classes = useStyles();
	return (
		<div>
			<Grid className={classes.grid} container spacing={4}>
				{results.map((episode: IEpisode | undefined) => {
					return (
						<Grid>
							<EpisodeCard
								name={episode!.name}
								id={episode!.id}
								key={episode!.id}
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
