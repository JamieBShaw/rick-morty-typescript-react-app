import React, { createContext, useReducer } from "react";
import { IEpisode } from "../components/episodes/EpisodeInterface";

export interface IActions {
	type: string;
	payload: any;
}

interface IState {
	episodes: Array<IEpisode>;
	favourites: Array<any>;
}

const initialState: IState = {
	episodes: [],
	favourites: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, actions: IActions): IState => {
	switch (actions.type) {
		case "FETCH_DATA":
			return {
				...state,
				episodes: actions.payload,
			};
		case "ADD_FAV":
			return {
				...state,
				favourites: [...state.favourites, actions.payload],
			};

		default:
			return state;
	}
};

export const StoreProvider = (props: any): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Store.Provider value={{ state, dispatch }}>
			{props.children}
		</Store.Provider>
	);
};
