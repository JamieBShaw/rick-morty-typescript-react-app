import React, { useContext } from 'react';

import { Store } from '../../../store/Store';
import { IResultLocations, ILocation } from '../interfaces';
import LocationCards from '../locationCard/LocationCards';
import { Grid, IconButton } from '@material-ui/core';
import useStyles from './Styles';

import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';

const LocationList: React.FC<IResultLocations | undefined> = ({
  results,
}: IResultLocations) => {
  const { state, dispatch } = useContext(Store);

  const classes = useStyles();

  const handleToggleFavourites = (location: ILocation) => {
    const locationsInFav = state.favouriteLocations.includes(location);

    if (locationsInFav) {
      const favLocationsWithoutLocation = state.favouriteLocations.filter(
        (locations: ILocation) => locations.id !== location.id
      );

      dispatch({
        type: 'REMOVE_FAV_LOCATION',
        payload: favLocationsWithoutLocation,
      });
    } else {
      dispatch({
        type: 'ADD_FAV_LOCATION',
        payload: location,
      });
    }
  };

  console.log(state);
  return (
    <div>
      <Grid className={classes.grid} container spacing={2}>
        {results.map((location: ILocation) => {
          return (
            <Grid key={location.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <LocationCards
                name={location.name}
                dimension={location.dimension}
                id={location.id}
                backgroundToggle={state.favouriteLocations.find(
                  (loc: ILocation) => loc.id === location.id
                )}
              />
              <IconButton onClick={() => handleToggleFavourites(location)}>
                {state.favouriteLocations.find(
                  (loc: ILocation) => loc.id === location.id
                ) ? (
                  <RemoveCircleOutlineSharpIcon className={classes.button} />
                ) : (
                  <AddCircleOutlineSharpIcon
                    className={classes.button}
                    style={{ color: '#43B4CA' }}
                  />
                )}
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default LocationList;
