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

export interface IEpisodeREST {
	airdate: string;
	airstamp: string;
	airtime: string;
	id: number;
	image: { medium: string; orginal: string };
	name: string;
	number: number;
	runtime: number;
	season: number;
	summary: string;
	url: string;
}
