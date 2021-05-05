import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "./Hooks";
import uuid from "react-uuid";

export default function PoetsList(props) {
    const { currLang } = useLanguage();

    if (props.poets !== null && props.poets.length > 0) {
        var output = [];
        console.log(currLang());
        props.poets.forEach(poet => {
            output.push(
                <Row key={uuid()}>
                    <Col md={4}>
                        hello
                    </Col>
                    <Col md={8}>
                        world
                    </Col>
                </Row>
            );
        });
        return (
            <>
            <Container fluid="md">
                {output}
            </Container>
            </>
        );
    } else {
        return null;
    }
}