import React, { createContext, useReducer } from "react";

import { IState, IActions } from "./interfaces";

const initialState: IState = {
	episodes: [],
	favouriteEpisodes: [],
	favouriteCharacters: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, actions: IActions): IState => {
	switch (actions.type) {
		case "FETCH_DATA":
			return {
				...state,
				episodes: actions.payload,
			};
		case "ADD_FAV_EPISODE":
			return {
				...state,
				favouriteEpisodes: [...state.favouriteEpisodes, actions.payload],
			};

		case "REMOVE_FAV_EPISODE":
			return {
				...state,
				favouriteEpisodes: [...actions.payload],
			};
		case "ADD_FAV_CHARACTER":
			return {
				...state,
				favouriteCharacters: [...state.favouriteCharacters, actions.payload],
			};

		case "REMOVE_FAV_CHARACTER":
			return {
				...state,
				favouriteCharacters: [...actions.payload],
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
