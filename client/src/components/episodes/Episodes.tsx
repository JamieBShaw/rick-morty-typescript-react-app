import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

import { IEpisodeData } from "./EpisodeInterface";
import Loading from "../loading/Loading";
import EpisodeList from "./episodeList/EpisodeList";
import { Container } from "@material-ui/core";

const Episodes: React.FC = () => {
	const { data, loading, error } = useQuery<IEpisodeData>(GET_EPISODES);

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <p> ERRORRRR</p>;
	}

	console.log(data);
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
