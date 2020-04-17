import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import useStyles from './Styles';
import { Store } from '../../store/Store';
import { IEpisode } from '../episodes/interfaces';
import EpisodeCard from '../episodes/episodeCard/EpisodeCard';
import CharacterCard from '../characters/characterCard/CharacterCard';
import { ICharacter } from '../characters/interfaces';
interface IProps {}

const FavouritesList: React.FC<IProps> = () => {
  const { state } = useContext(Store);
  const classes = useStyles();
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className={classes.title}>
        <div
          className={classes.container}
          style={{
            paddingBottom: '15px',
            marginBottom: '15px',
            marginRight: '85px',
          }}
        >
          {' '}
          Favourites Episode
          <div>
            {state.favouriteEpisodes.map((episode: IEpisode) => {
              return (
                <div key={episode.id}>
                  <EpisodeCard
                    image={state.episodes[episode.id - 1].image.medium}
                    episode={episode.episode}
                    name={episode.name}
                    id={episode.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.title}>
        <div
          className={classes.container}
          style={{
            paddingBottom: '15px',
            marginBottom: '15px',
            marginRight: '85px',
          }}
        >
          Favourite Characters{' '}
          <div>
            {state.favouriteCharacters.map((character: ICharacter) => {
              return (
                <div key={character.id}>
                  <CharacterCard
                    image={character.image}
                    name={character.name}
                    gender={character.gender}
                    status={character.status}
                    species={character.species}
                    id={character.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.title}>
        <div
          className={classes.container}
          style={{
            paddingBottom: '15px',
            marginBottom: '15px',
            marginRight: '85px',
          }}
        >
          Favourite Locations{' '}
        </div>
      </div>
    </Container>
  );
};

export default FavouritesList;
