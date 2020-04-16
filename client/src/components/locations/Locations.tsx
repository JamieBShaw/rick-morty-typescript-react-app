import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import { Container } from '@material-ui/core';
import LocationsList from './locationList/LocationList';
const Locations: React.FC = () => {
  const { data, loading, error } = useQuery(FETCH_lOCATIONS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container>
      <LocationsList results={data!.locations.results} />
    </Container>
  );
};

const FETCH_lOCATIONS = gql`
  {
    locations {
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
