export const fetchEpisodes = async () => {
	const tempData = await fetch("http://api.tvmaze.com/shows/216/episodes");
	const dataJSON = await tempData.json();
	return dataJSON;
};
