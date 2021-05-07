import React from "react";
import { Navbar, Nav, Container, Dropdown, Row, Button, Image, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from "./Hooks"
import "./home.css";
import { Link } from "react-router-dom";
import PoetOfTheDay from "./PoetOfTheDay";

function Home() {
    const { t, setLang } = useLanguage();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid="md">
                    <Navbar.Brand href="/">Belarusian Poets</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/poets">{t("navbar.poets")}</Nav.Link>
                            <Nav.Link href="#desc">{t("navbar.desc")}</Nav.Link>
                            <Nav.Link href="#daily">{t("navbar.daily")}</Nav.Link>
                            <Nav.Link href="#devs">{t("navbar.devs")}</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Language
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setLang("ru")}>Русский</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setLang("en")}>English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid style={{ backgroundColor: "#2941ab" }}>
                <Container style={{ height: "100vh", color: "#1ed760" }} fluid="lg" className="d-flex flex-column justify-content-center">
                    <Row className="justify-content-center">
                        <h1 className="big-heading text-center">
                            {t("landing.label")}
                        </h1>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="text-center">
                            {t("landing.title")}
                        </h2>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className="rounded-pill btn-lg" variant="outline-success">
                            {t("landing.button")}
                        </Button>{' '}
                    </Row>
                </Container>
            </Container>
            
            <PoetOfTheDay id="daily" />
            <Container style={{ height: "12vh", color: "gray" }} fluid className="bg-dark">
                <Container fluid="md" className="h-100">
                    <Row className="h-100 d-flex align-items-center" xs={2} md={4} lg={8}>
                        <Col className="">
                            <Image className="mr-2" src="/res/madi-icon.png" roundedCircle />
                            <Link style={{ color: "white" }} className="mb-0" to="github.com">Bakyt Madi</Link>
                        </Col>
                        <Col className="">
                            <Image className="mr-2" src="/res/vlad-icon.png" roundedCircle />
                            <Link style={{ color: "white" }} className="mb-0" to="github.com">Maiski Vlad</Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;