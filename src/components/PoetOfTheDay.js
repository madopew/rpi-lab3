import { Container, Image, Button, Col, Row } from "react-bootstrap";
import { useJsonDB } from "./Hooks";

export default function PoetOfTheDay() {
    const [dbLoaded, dbSearchPoet] = useJsonDB("poetsShort.json");

    function generatePoetOfTheDay() {
        return 0;
    }

    return (
        <Container style={{ height: "80vh", color: "#1ed760" }} className="">
            <Container className="border">
                <Row>
                    <Col className="" >
                        <Image src="https://nirax.ru/wp-content/uploads/2017/03/nirax-abcp-small-150x150.gif"></Image>
                    </Col>
                    <Col className="">
                        <h3>name</h3>
                        <span>dates</span>
                        <article>short desciption</article>
                    </Col>
                </Row>
                <Row className="d-flex flex-column align-items-center justify-content-center">
                    <Button>Some Button</Button>
                </Row>
            </Container>
        </Container >
    );
}