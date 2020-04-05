export interface IEpisode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	created: string;
}

export interface IResult {
	results: IEpisode[];
}

export interface IEpisodeData {
	episodes: IResult;
}
