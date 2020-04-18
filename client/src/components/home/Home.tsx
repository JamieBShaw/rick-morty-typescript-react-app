import React, { useContext } from 'react';

import useStyles from './Styles';
import FavouritesList from '../favourites/FavouritesList';
import { Store } from '../../store/Store';

const Home: React.FC = () => {
  const { state } = useContext(Store);

  const classes = useStyles();
  console.log(state);
  return (
    <div style={{ width: '100%' }}>
      <img
        src="https://cdn.dribbble.com/users/2418882/screenshots/8171392/rick-morty.png"
        alt="home-rick-and-morty"
        className={classes.image}
      />
      {state.favouriteEpisodes.length > 0 ||
      state.favouriteLocations.length > 0 ||
      state.favouriteCharacters.length > 0 ? (
        <FavouritesList />
      ) : null}
    </div>
  );
};

export default Home;
