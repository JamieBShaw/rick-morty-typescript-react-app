import React, { useContext } from 'react';
import { Container, Grid } from '@material-ui/core';
import useStyles from './Styles';
import { Store } from '../../store/Store';
import { IEpisode } from '../episodes/interfaces';
import EpisodeCard from '../episodes/episodeCard/EpisodeCard';
import CharacterCard from '../characters/characterCard/CharacterCard';
import { ICharacter } from '../characters/interfaces';
import { ILocation } from '../locations/interfaces';
import LocationCards from '../locations/locationCard/LocationCards';

interface IProps {}

const FavouritesList: React.FC<IProps> = () => {
  const { state } = useContext(Store);
  const classes = useStyles();
  return (
    <Container
      style={{
        display: 'inline-flex',
      }}
    >
      <div className={classes.title}>
        <div
          className={classes.container}
          style={{
            marginRight: '85px',
          }}
        >
          Favourite Episode
          <div style={{ paddingTop: '0px', marginTop: '0px' }}>
            <Grid container spacing={2}>
              {state.favouriteEpisodes.map((episode: IEpisode) => {
                return (
                  <Grid
                    key={episode.id}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <div key={episode.id}>
                      <EpisodeCard
                        image={state.episodes[episode.id - 1].image.medium}
                        episode={episode.episode}
                        name={episode.name}
                        id={episode.id}
                      />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
      <div className={classes.title}>
        <div
          className={classes.container}
          style={{
            marginRight: '85px',
          }}
        >
          Favourite Characters
          <div style={{ paddingTop: '0px', marginTop: '0px' }}>
            <Grid container spacing={2}>
              {state.favouriteCharacters.map((character: ICharacter) => {
                return (
                  <Grid
                    key={character.id}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <div key={character.id}>
                      <CharacterCard
                        image={character.image}
                        name={character.name}
                        gender={character.gender}
                        species={character.species}
                        status={character.status}
                      />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
      <div className={classes.title}>
        <div
          className={classes.container}
          style={{
            marginRight: '85px',
          }}
        >
          Favourite Locations
          <div style={{ paddingTop: '0px', marginTop: '0px' }}>
            <Grid container spacing={2}>
              {state.favouriteLocations.map((location: ILocation) => {
                return (
                  <Grid
                    key={location.id}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <div key={location.id}>
                      <LocationCards
                        name={location.name}
                        dimension={location.dimension}
                      />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FavouritesList;
