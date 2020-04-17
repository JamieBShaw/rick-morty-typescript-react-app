import React, { useEffect, useContext } from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { IEpisodeData } from './interfaces';
import { OnWaypoint } from '../waypoint/OnWaypoint';
import Loading from '../loading/Loading';
import EpisodeList from './episodeList/EpisodeList';
import { Container } from '@material-ui/core';

import { Store } from '../../store/Store';
import Error from '../error/Error';

interface IQueryVars {
  page: number;
}

const Episodes: React.FC = () => {
  const { state, dispatch } = useContext(Store);

  const { data, loading, error, fetchMore } = useQuery<
    IEpisodeData,
    IQueryVars
  >(GET_EPISODES, { variables: { page: 1 } });

  useEffect(() => {
    state.episodes.length === 0 && fetchEpisodes();
  });

  const fetchEpisodes = async () => {
    const tempData = await fetch('http://api.tvmaze.com/shows/216/episodes');
    const dataJSON = await tempData.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON,
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const onScrollEnd = () => {
    fetchMore({
      variables: {
        page: 2,
      },
      updateQuery: (previous, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previous;
        return {
          episodes: {
            __typename: 'Episodes',
            results: [
              ...previous.episodes.results,
              ...fetchMoreResult.episodes.results,
            ],
          },
        };
      },
    });
  };

  return (
    <Container>
      <EpisodeList results={data!.episodes.results} />
      <OnWaypoint
        length={data!.episodes.results.length}
        data={data!.episodes.results}
        handleWaypoint={onScrollEnd}
        itemCount={30}
      />
    </Container>
  );
};

const GET_EPISODES = gql`
  query fetchEpisodes($page: Int!) {
    episodes(page: $page) {
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
