import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Twitter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="Messages">Messages</Nav.Link>
            <Nav.Link href="/">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;