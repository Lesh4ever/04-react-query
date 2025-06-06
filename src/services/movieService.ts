import axios from "axios";
import { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
};
