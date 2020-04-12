import React from "react";
import { CircularProgress, Container } from "@material-ui/core";

const Loading: React.FC = () => {
	return (
		<div
			style={{
				marginTop: "100px",
				paddingTop: "100px",
				textAlign: "center",
			}}
		>
			<Container>
				<CircularProgress size="100px" thickness={4} />
			</Container>
		</div>
	);
};

export default Loading;
