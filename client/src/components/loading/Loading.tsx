import React from "react";
import { CircularProgress, Container } from "@material-ui/core";

const Loading: React.FC = () => {
	return (
		<Container>
			<CircularProgress />
		</Container>
	);
};

export default Loading;
