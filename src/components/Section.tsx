import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { saveSongs } from "../redux/actions";
import type { Track } from "../types/Track";
import { fetchSongs } from "../fetchSongs";
import SongCard from "./SongCard";

interface SectionProps {
  title: string;
  storeKey: string;
  query?: string;
  limit?: number;
}

const noSongsYet: Track[] = [];

function Section({ title, storeKey, query, limit }: SectionProps) {
  const dispatch = useAppDispatch();

  const songs = useAppSelector(
    (state) => state.songs[storeKey] ?? noSongsYet
  );

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSongs(query)
      .then((tracks) => dispatch(saveSongs(storeKey, tracks)))
      .catch((error) => console.error("Errore nella sezione " + title, error));
  }, [dispatch, storeKey, query, title]);

  return (
    <>
      <h2 id={storeKey} className="fs-4 mb-3 mt-3">
        {title}
      </h2>
      <Row>
        {songs.slice(0, limit).map((track) => (
          <SongCard key={track.id} track={track} />
        ))}
      </Row>
    </>
  );
}

export default Section;
