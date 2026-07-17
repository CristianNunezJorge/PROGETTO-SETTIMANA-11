import { Card, Col } from "react-bootstrap";
import type { Track } from "../types/Track";

interface SongCardProps {
  track: Track;
}

function SongCard({ track }: SongCardProps) {
  return (
    <Col xs={6} md={4} lg={3} className="mb-3">
      <Card>
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
          <span className="fs-5">♡</span>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SongCard;
