import React from 'react';

import useStyles from './Styles';
import FavouritesList from '../favourites/FavouritesList';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <img
        src="https://cdn.dribbble.com/users/2418882/screenshots/8171392/rick-morty.png"
        alt="home-rick-and-morty"
        className={classes.image}
      />
      <FavouritesList />
    </div>
  );
};

export default Home;
