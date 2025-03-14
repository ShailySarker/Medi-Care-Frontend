import Container from 'react-bootstrap/Container';
import { GiStethoscope } from 'react-icons/gi';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <div className=''>
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary px-xl-5 px-lg-3 px-md-4 mb-3">
        <Container fluid>
          <Navbar.Brand href="/home">
            <div className="fw-bolder d-flex flex-row justify-content-center align-items-center text-primary gap-2">
              <GiStethoscope className="display-6" />
              <p className="h3">Medi Care</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="fw-bolder d-flex flex-row justify-content-center align-items-center text-primary gap-2">
                  <GiStethoscope className="display-6" />
                  <p className="h3">Medi Care</p>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Navbar.Offcanvas placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="fw-bolder d-flex flex-row justify-content-center align-items-center text-primary gap-2">
                    <GiStethoscope className="display-6" />
                    <p className="h3">Medi Care</p>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 fs-xl-5 fs-6 gap-xl-3 gap-2 fw-semibold">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/appointments">Appointments</Nav.Link>
                </Nav>
                <div className='d-flex flex-lg-row flex-column gap-lg-2 gap-4 mt-lg-0 mt-4'>
                  <Button variant="outline-primary" className='fw-semibold' onClick={handleShowRegister}>Register</Button>
                  <Button variant="primary" className='fw-semibold' onClick={handleShowLogin}>Login</Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal
        show={showRegister}
        onHide={handleCloseRegister}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Coming Soon!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Coming Soon!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;