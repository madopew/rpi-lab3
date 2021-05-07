import { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useJsonDB, useLanguage } from "./Hooks";

export default function PoetOfTheDay(props) {

    const { t, currLang } = useLanguage();

    const [poet, setPoet] = useState(null);

    const [dbLoaded, dbSearchPoet] = useJsonDB("poetsShort.json");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        if (dbLoaded) {
            let allPoets = dbSearchPoet("", "");
            let randomIndex = getRandomInt(allPoets.length);
            setPoet(allPoets[randomIndex]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dbLoaded]);


    return (
        <Container id={props.id} fluid className="mb-5 d-flex flex-column align-items-center">
            {
                dbLoaded === true && poet !== null ? (
                    <>
                    <h3>{t("landing.poetOfTheDay")}</h3>
                    <Card className="text-center" style={{ width: '18rem' }} bg={"light"}>
                        <Card.Img variant="top" src={poet.photoUrl} />
                        <Card.Body>
                            <Card.Title>{poet.name[currLang()]}</Card.Title>
                            <Card.Subtitle className="font-style: italic">{poet.dob} - {poet.dod}</Card.Subtitle>
                            <Card.Text>
                                {poet.description[currLang()]}
                            </Card.Text>
                            <a className="btn btn-dark" href={"/poets/" + poet.id}>{t("landing.poetLink")}</a>
                        </Card.Body>
                    </Card>
                    </>
                ) : (
                    <span>Loading</span>
                )
            }

        </Container >
    );
}