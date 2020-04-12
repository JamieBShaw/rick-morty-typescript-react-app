import React from "react";
import { Container } from "@material-ui/core";

interface IProps {
	message?: string;
}

const Error: React.FC<IProps> = ({
	message = "OOOOOOOOOOOOOOOOOOOOoooops",
}) => {
	return (
		<div>
			<Container>
				<h2>{message}</h2>
				<img
					src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Frick-and-morty-sad-wubalubadubdub-rick-sanchez-depressing-wallpaper-gjgqm&psig=AOvVaw1x5aJvcwcJbiWK6DGETgHt&ust=1586696468947000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjX2Ii34OgCFQAAAAAdAAAAABAK"
					alt="Wubba Lubba Dub Dub"
				/>
			</Container>
		</div>
	);
};

export default Error;
