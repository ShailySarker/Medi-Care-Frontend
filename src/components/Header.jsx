import Container from 'react-bootstrap/Container';
import { GiStethoscope } from 'react-icons/gi';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
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
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 fs-xl-5 fs-6 gap-xl-3 gap-2 fw-semibold">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/appointments">Appointments</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   </div>
    );
};

export default Header;