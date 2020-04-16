import { IEpisode } from '../components/episodes/interfaces';

export interface IActions {
  type: string;
  payload: any;
}

export interface IState {
  episodes: Array<IEpisode>;
  favouriteEpisodes: Array<IEpisode>;
  favouriteCharacters: Array<any>;
  favouriteLocations: Array<any>;
}
