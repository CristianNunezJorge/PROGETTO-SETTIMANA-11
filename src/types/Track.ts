
export interface Artist {
  id: number;
  name: string;
}

export interface Album {
  id: number;
  title: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
}

export interface Track {
  id: number;
  title: string;
  duration: number;
  artist: Artist;
  album: Album;
}

export interface SearchResponse {
  data: Track[];
}
