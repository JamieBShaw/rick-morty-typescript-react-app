import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Error from '../error/Error';
import { OnWaypoint } from '../waypoint/OnWaypoint';
import Loading from '../loading/Loading';
import { Container } from '@material-ui/core';
import { ILocationData } from './interfaces';
import LocationsList from './locationList/LocationList';

interface IQueryVars {
  page: number;
}

const Locations: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    ILocationData,
    IQueryVars
  >(FETCH_lOCATIONS, { variables: { page: 1 } });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  const onScrollEnd = () => {
    fetchMore({
      variables: {
        page: data!.locations.results.length / 20 + 1,
      },
      updateQuery: (previous, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previous;
        return {
          locations: {
            __typename: 'Locations',
            results: [
              ...previous.locations.results,
              ...fetchMoreResult.locations.results,
            ],
          },
        };
      },
    });
  };

  return (
    <Container>
      <LocationsList results={data!.locations.results} />
      <OnWaypoint
        length={data!.locations.results.length}
        data={data!.locations.results}
        handleWaypoint={onScrollEnd}
        itemCount={60}
      />
    </Container>
  );
};

const FETCH_lOCATIONS = gql`
  query fetchLocations($page: Int!) {
    locations(page: $page) {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          species
          type
          image
        }
        created
      }
    }
  }
`;

export default Locations;
