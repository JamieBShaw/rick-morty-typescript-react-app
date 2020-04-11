import React, { useEffect, useContext } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

import { IEpisodeData } from "./interfaces";
import Loading from "../loading/Loading";
import EpisodeList from "./episodeList/EpisodeList";
import { Container } from "@material-ui/core";

import { Store } from "../../store/Store";
import Error from "../error/Error";

const Episodes: React.FC = () => {
	const { state, dispatch } = useContext(Store);

	const { data, loading, error } = useQuery<IEpisodeData>(GET_EPISODES);

	useEffect(() => {
		state.episodes.length === 0 && fetchEpisodes();
	});

	const fetchEpisodes = async () => {
		const tempData = await fetch("http://api.tvmaze.com/shows/216/episodes");
		const dataJSON = await tempData.json();
		return dispatch({
			type: "FETCH_DATA",
			payload: dataJSON,
		});
	};

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <Error />;
	}

	return (
		<Container>
			<EpisodeList results={data!.episodes.results} />
		</Container>
	);
};

const GET_EPISODES = gql`
	{
		episodes {
			results {
				id
				name
				air_date
				episode
				created
			}
		}
	}
`;

export default Episodes;
