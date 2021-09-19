import fetch from "node-fetch";
import qs from "querystring";

const tmdb = async (url, query) => {
    const params = qs.stringify({ ...query, api_key: process.env.TMDB_KEY });

    const response = await fetch(`${process.env.TMDB_API}${url}?${params}`);
    const data = await response.json();

    return data;
};

export default tmdb;
