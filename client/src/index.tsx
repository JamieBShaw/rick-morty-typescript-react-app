import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { StoreProvider } from "./store/Store";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
	uri: process.env.REACT_APP_RICK_AND_MORTY_API,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
	cache,
});

ReactDOM.render(
	<StoreProvider>
		<ApolloProvider client={client}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ApolloProvider>
	</StoreProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
