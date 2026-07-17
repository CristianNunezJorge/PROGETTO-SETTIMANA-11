import type { SearchResponse, Track } from "./types/Track";

const BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const fetchSongs = async (query: string): Promise<Track[]> => {
  const res = await fetch(BASE_URL + encodeURIComponent(query));

  if (!res.ok) {
    throw new Error("Errore HTTP " + res.status);
  }

  const json: SearchResponse = await res.json();
  return json.data;
};
