import React, { useEffect, useContext } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

import { IEpisodeData } from "./EpisodeInterface";
import Loading from "../loading/Loading";
import EpisodeList from "./episodeList/EpisodeList";
import { Container } from "@material-ui/core";

import { Store } from "../../store/Store";

interface IEpisodeREST {
	airdate: string;
	airstamp: string;
	airtime: string;
	id: number;
	image: { medium: string; orginal: string };
	name: string;
	number: number;
	runtime: number;
	season: number;
	summary: string;
	url: string;
}

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
		return <p> ERRORRRR</p>;
	}

	console.log(data);
	console.log(state);

	return (
		<Container>
			<EpisodeList
				img={state.episodes.image.medium}
				results={data!.episodes.results}
			/>
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
