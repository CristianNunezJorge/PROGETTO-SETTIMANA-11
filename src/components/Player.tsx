import { Button } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";

const formatDuration = (seconds: number): string => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return min + ":" + String(sec).padStart(2, "0");
};

function Player() {
  const currentTrack = useAppSelector((state) => state.player);

  return (
    <footer className="player fixed-bottom d-flex align-items-center justify-content-center gap-3 px-3">
      {currentTrack && (
        <div className="d-flex align-items-center gap-2 me-3 overflow-hidden">
          <img
            src={currentTrack.album.cover_small}
            alt={"Copertina di " + currentTrack.title}
            width={48}
            height={48}
          />
          <div className="overflow-hidden">
            <p className="mb-0 small text-truncate">{currentTrack.title}</p>
            <p className="mb-0 small text-secondary text-truncate">
              {currentTrack.artist.name} ·{" "}
              {formatDuration(currentTrack.duration)}
            </p>
          </div>
        </div>
      )}

      <div className="d-flex gap-2">
        <Button variant="outline-light" size="sm">
          ⏮
        </Button>
        <Button variant="outline-light" size="sm">
          ▶
        </Button>
        <Button variant="outline-light" size="sm">
          ⏭
        </Button>
      </div>
    </footer>
  );
}

export default Player;
