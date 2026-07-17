import { Button, Card, Col } from "react-bootstrap";
import type { Track } from "../types/Track";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentTrack, toggleLike } from "../redux/actions";

interface SongCardProps {
  track: Track;
}

function SongCard({ track }: SongCardProps) {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) => state.likes.includes(track.id));

  return (
    <Col xs={6} md={4} lg={3} className="mb-3">
      <Card
        className="song-card"
        onClick={() => dispatch(setCurrentTrack(track))}
      >
        <Card.Img
          variant="top"
          src={track.album.cover_medium}
          alt={"Copertina di " + track.title}
        />
        <Card.Body>
          <Card.Title className="fs-6 text-truncate">{track.title}</Card.Title>
          <Card.Text className="text-secondary mb-1 text-truncate">
            {track.artist.name}
          </Card.Text>
          <Button
            variant="link"
            className={
              "p-0 fs-5 text-decoration-none " +
              (isLiked ? "text-danger" : "text-white")
            }
            aria-label={
              isLiked ? "Togli dai preferiti" : "Aggiungi ai preferiti"
            }
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleLike(track.id));
            }}
          >
            {isLiked ? "♥" : "♡"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SongCard;
