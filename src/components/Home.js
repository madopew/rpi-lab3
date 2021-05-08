import React from "react";
import { Navbar, Nav, Container, Dropdown, Row, Image, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from "./Hooks"
import "./home.css";
import { Link } from "react-router-dom";
import PoetOfTheDay from "./PoetOfTheDay";
import { Globe2 } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import MadiIcon from "../res/madi-icon.png";
import VladIcon from "../res/vlad-icon.png";

export function DropdownLanguage() {
    const { setLang } = useLanguage();

    return (
        <Dropdown >
            <Dropdown.Toggle variant="dark">
                <Globe2/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLang("ru")}>Русский</Dropdown.Item>
                <Dropdown.Item onClick={() => setLang("en")}>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function Home() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid="md">
                    <Link className="navbar-brand" to=".">Belarusian Poets</Link> {/*TODO Fix Link*/}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/poets">{t("navbar.poets")}</Link>
                            <HashLink className="nav-link" smooth to="#desc">{t("navbar.desc")}</HashLink>
                            <HashLink className="nav-link" smooth to="#daily">{t("navbar.daily")}</HashLink>
                            <HashLink className="nav-link" smooth to="#devs">{t("navbar.devs")}</HashLink>
                            <DropdownLanguage/>
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
                        <Link className="btn btn-lg rounded-pill btn-outline-success" to="/poets">{t("landing.button")}</Link>
                    </Row>
                </Container>
            </Container>
            <Container>

            </Container>
            <PoetOfTheDay id="daily" />

            <Container id="devs" style={{ height: "12vh", color: "gray" }} fluid className="bg-dark">
                <Container fluid="md" className="h-100">
                    <Row className="h-100 d-flex align-items-center" xs={2} md={4} lg={8}>
                        <Col className="">
                            <Image className="mr-2" src={MadiIcon} roundedCircle />
                            <a style={{ color: "white" }} className="mb-0" href="https://github.com/madopew">Bakyt Madi</a>
                        </Col>
                        <Col className="">
                            <Image className="mr-2" src={VladIcon} roundedCircle />
                            <a style={{ color: "white" }} className="mb-0" href="https://github.com/vladmaiski">Maiski Vlad</a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;