import { Button } from "react-bootstrap";

function Player() {
  return (
    <footer className="player fixed-bottom d-flex align-items-center justify-content-center gap-2">
      <Button variant="outline-light" size="sm">
        ⏮
      </Button>
      <Button variant="outline-light" size="sm">
        ▶
      </Button>
      <Button variant="outline-light" size="sm">
        ⏭
      </Button>
    </footer>
  );
}

export default Player;
