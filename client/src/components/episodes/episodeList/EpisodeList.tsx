import React, { useContext } from 'react';

import { Store } from '../../../store/Store';
import { IResult, IEpisode } from '../interfaces';
import EpisodeCard from '../episodeCard/EpisodeCard';
import { Grid, IconButton } from '@material-ui/core';
import useStyles from './Styles';

import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';

const EpisodeList: React.FC<IResult | undefined> = ({ results }: IResult) => {
  const { state, dispatch } = useContext(Store);

  const classes = useStyles();

  const handleToggleFavourites = (episode: IEpisode) => {
    const episodeInFav = state.favouriteEpisodes.includes(episode);

    if (episodeInFav) {
      const favEpisodesWithoutEpisode = state.favouriteEpisodes.filter(
        (episodes: IEpisode) => episodes.id !== episode.id
      );

      dispatch({
        type: 'REMOVE_FAV_EPISODE',
        payload: favEpisodesWithoutEpisode,
      });
    } else {
      dispatch({
        type: 'ADD_FAV_EPISODE',
        payload: episode,
      });
    }
  };

  return (
    <div>
      <Grid className={classes.grid} container spacing={2}>
        {results.map((episode: IEpisode) => {
          return (
            <Grid key={episode.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <EpisodeCard
                image={state.episodes[episode.id - 1].image.medium}
                episode={episode.episode}
                name={episode.name}
                id={episode.id}
                backgroundToggle={state.favouriteEpisodes.find(
                  (epi: IEpisode) => epi.id === episode.id
                )}
              />
              <IconButton onClick={() => handleToggleFavourites(episode)}>
                {state.favouriteEpisodes.find(
                  (epi: IEpisode) => epi.id === episode.id
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

export default EpisodeList;
