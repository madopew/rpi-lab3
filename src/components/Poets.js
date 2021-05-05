import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { useJsonDB, useLanguage } from "./Hooks"
import PoetsList from "./PoetList";

function Poets() {
    const { t, currLang, setLang } = useLanguage();
    const { id } = useParams();

    const [dbLoaded, dbSearchPoet] = useJsonDB("poetsShort.json");
    const [searchResult, setSearchResult] = useState(null);

    const [query, setQuery] = useState("");
    useEffect(() => {
        if (dbLoaded === true) {
            setSearchResult(dbSearchPoet("name." + currLang(), query));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dbLoaded, query]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid="md">
                    <Navbar.Brand href="/">Belarusian Poets</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <InputGroup className="mr-4">
                                <FormControl
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    placeholder={t("poets.search")} />
                            </InputGroup>
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
            <Container>
                {
                    id === undefined ? dbLoaded === false ?
                        (
                            <h1>Loading...</h1>
                        ) :
                        (
                            <PoetsList poets={searchResult} />
                        ) :
                        (
                            <h1>{id}</h1>
                        )
                }
            </Container>
        </>);
}

export default Poets;