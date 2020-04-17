import React from 'react';
import { Container } from '@material-ui/core';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { ICharacterData } from './interfaces';
import Loading from '../loading/Loading';
import CharacterList from './characterList/CharacterList';
import Error from '../error/Error';
import { OnWaypoint } from '../waypoint/OnWaypoint';

interface IQueryVars {
  page: number;
}

const Characters: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    ICharacterData,
    IQueryVars
  >(FETCH_CHARACTERS, { variables: { page: 1 } });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const onScrollEnd = () => {
    fetchMore({
      variables: {
        page: data!.characters.results.length / 20 + 1,
      },
      updateQuery: (previous, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previous;
        return {
          characters: {
            __typename: 'Characters',
            results: [
              ...previous.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        };
      },
    });
  };

  return (
    <Container>
      <CharacterList results={data!.characters.results} />
      <OnWaypoint
        length={data!.characters.results.length}
        data={data!.characters.results}
        handleWaypoint={onScrollEnd}
        itemCount={480}
      />
    </Container>
  );
};

export default Characters;

const FETCH_CHARACTERS = gql`
  query fetchCharacters($page: Int!) {
    characters(page: $page) {
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
