import axios from "axios";

const API_KEY = "2ed373d5";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                s: query
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMovieById = async (id) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                i: id
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
