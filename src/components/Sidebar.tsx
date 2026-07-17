import { Button, Col, Form } from "react-bootstrap";

function Sidebar() {
  return (
    <Col xs={12} md={3} lg={2} className="sidebar pt-3 d-flex flex-column">
      <h1 className="fs-4">🎵 EpiMusic</h1>

      <nav className="d-flex flex-md-column gap-3 mt-2 mt-md-4">
        <a href="#" className="text-white text-decoration-none">
          Home
        </a>
        <a href="#" className="text-white text-decoration-none">
          Preferiti
        </a>
      </nav>

      <Form className="d-flex gap-2 mt-3">
        <Form.Control type="search" placeholder="Cerca..." size="sm" />
        <Button variant="outline-light" size="sm" type="submit">
          Vai
        </Button>
      </Form>

      <div className="mt-auto d-none d-md-block">
        <Button variant="light" size="sm" className="w-100 mb-2">
          Sign up
        </Button>
        <Button variant="outline-light" size="sm" className="w-100">
          Login
        </Button>
        <p className="small text-secondary mt-3 mb-0">
          Cookie Policy | Privacy
        </p>
      </div>
    </Col>
  );
}

export default Sidebar;
