import React from "react";
import { Container } from "@material-ui/core";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { ICharacterData } from "./interfaces";
import Loading from "../loading/Loading";
import CharacterList from "./characterList/CharacterList";
import Error from "../error/Error";

const Characters: React.FC = () => {
	const { data, loading, error } = useQuery<ICharacterData>(FETCH_CHARACTERS);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}
	console.log(data);
	return (
		<Container>
			<CharacterList results={data!.characters.results} />
		</Container>
	);
};

const FETCH_CHARACTERS = gql`
	{
		characters {
			results {
				id
				name
				status
				species
				type
				gender
				image
				created
			}
		}
	}
`;

export default Characters;
