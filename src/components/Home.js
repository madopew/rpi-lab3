import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="home-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid="md">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/poets">Poets</Nav.Link>
                            <Nav.Link href="#desc">Description</Nav.Link>
                            <Nav.Link href="#daily">Daily</Nav.Link>
                            <Nav.Link href="#devs">Developers</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Language
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Russian</Dropdown.Item>
                                    <Dropdown.Item>English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Home;