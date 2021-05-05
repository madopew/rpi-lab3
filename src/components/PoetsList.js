import { Container, Row, Col, Image } from "react-bootstrap";
import { useLanguage } from "./Hooks";
import uuid from "react-uuid";

export default function PoetsList(props) {
    const { currLang } = useLanguage();

    if (props.poets !== null && props.poets.length > 0) {
        var output = [];
        props.poets.forEach(poet => {
            output.push(
                <Row key={uuid()}>
                    <Col md={4}>
                        <Image style={{width: "100px", height: "100px"}} src={poet.photoUrl} roundedCircle />
                    </Col>
                    <Col md={8}>
                        <h2>{poet.name[currLang()]}</h2>
                        <p>{poet.description[currLang()]}</p>
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