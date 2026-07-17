import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Section from "./components/Section";
import { SEARCH_KEY } from "./redux/actions";
import { useAppSelector } from "./redux/hooks";
import "./App.css";

function App() {
  const hasSearched = useAppSelector(
    (state) => state.songs[SEARCH_KEY] !== undefined
  );

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col xs={12} md={9} lg={10} className="main-content py-3">
            <nav className="d-flex justify-content-center gap-4 mb-3">
              <a href="#rock" className="text-white text-decoration-none">
                Rock
              </a>
              <a href="#pop" className="text-white text-decoration-none">
                Pop
              </a>
              <a href="#hiphop" className="text-white text-decoration-none">
                Hip Hop
              </a>
            </nav>

            {hasSearched && (
              <Section title="Search Results" storeKey={SEARCH_KEY} />
            )}

            <Section title="Rock" storeKey="rock" query="queen" limit={4} />
            <Section title="Pop" storeKey="pop" query="katyperry" limit={4} />
            <Section
              title="Hip Hop"
              storeKey="hiphop"
              query="eminem"
              limit={4}
            />
          </Col>
        </Row>
      </Container>

      <Player />
    </>
  );
}

export default App;
