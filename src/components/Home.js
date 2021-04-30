import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";
import { useLanguage } from "./Hooks"

function Home() {
    const { t } = useTranslation();
    const [ lang, setLang ] = useLanguage();

    return (
        <div className="home-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid="md">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/poets">{t("navbar.poets")}</Nav.Link>
                            <Nav.Link href="#desc">{t("navbar.desc")}</Nav.Link>
                            <Nav.Link href="#daily">{t("navbar.daily")}</Nav.Link>
                            <Nav.Link href="#devs">{t("navbar.devs")}</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    {t("navbar.lang")}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={ () => setLang("ru") }>{t("navbar.ru")}</Dropdown.Item>
                                    <Dropdown.Item onClick={ () => setLang("en") }>{t("navbar.en")}</Dropdown.Item>
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