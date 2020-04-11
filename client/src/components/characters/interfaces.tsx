import { IEpisode } from "../episodes/interfaces";

export interface ICharacter {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {};
	location: {};
	image: string;
	episode: Array<IEpisode>;
	url: string;
	created: string;
}

export interface IResultCharacters {
	results: ICharacter[];
}

export interface ICharacterData {
	characters: IResultCharacters;
}
