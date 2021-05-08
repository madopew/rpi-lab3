import { Container, Row, Col, Card } from "react-bootstrap";
import useLanguage from "../hooks/Language";
import uuid from "react-uuid";

export default function PoetsList(props) {
    const { t, getCurrLang } = useLanguage();

    if (props.poets !== null && props.poets.length > 0) {
        var output = [];
        props.poets.forEach(poet => {
            output.push(
                <Col className="justify-content-center" md={4} key={uuid()}>
                    <Card className="mb-5" style={{ width: "230px", height: "450px" }} >
                        <Card.Img variant="top" style={{ height: "200px", objectFit: "cover", objectPosition: "left top" }} src={poet.photoUrl} />
                        <Card.Body>
                            <Card.Title>{poet.name[getCurrLang()]}</Card.Title>
                            <Card.Text>{poet.description[getCurrLang()]}</Card.Text>
                            <a className="mt-auto btn btn-dark" href={"/poets/"+poet.id}>{t("landing.poetLink")}</a>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
        return (
            <>
                <Container fluid="md">
                    <Row>
                        {output}
                    </Row>
                </Container>
            </>
        );
    } else {
        return null;
    }
}