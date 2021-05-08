import { useEffect, useState } from "react";
import useJsonDB from "../hooks/JsonDB";
import useLanguage from "../hooks/Language";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container, Carousel } from "react-bootstrap";
import uuid from "react-uuid";

export default function PoetInfo(props) {

    const { t, getCurrLang } = useLanguage();

    const [allLoaded, setAllLoaded] = useState(false);
    const [poetInfo, setPoetInfo] = useState(null);

    const [shortLoaded, searchShort] = useJsonDB("poetsShort.json");
    const [longLoaded, searchLong] = useJsonDB("poetsLong.json");

    useEffect(() => {
        if (shortLoaded === true && longLoaded === true) {
            let short = searchShort("id", parseInt(props.id), true)[0];
            let long = searchLong("id", parseInt(props.id), true)[0];
            if (short !== undefined && long !== undefined) {
                Object.assign(short, long);
                setPoetInfo(short);
                setAllLoaded(true);
            } else {
                setAllLoaded(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.id, shortLoaded, longLoaded]);

    function getBio() {
        let res = [];
        poetInfo.bio.forEach(b => {
            res.push(
                <TimelineItem key={uuid()} dateText={b.date}>
                    <h3>{b.title[getCurrLang()]}</h3>
                    <p>{b.text[getCurrLang()]}</p>
                </TimelineItem>
            );
        });
        console.log(res);
        return res;
    }

    function getPhotos() {
        let result = [];
        poetInfo.photos.forEach(ph => {
            result.push(
                <Carousel.Item key={uuid()}>
                    <img style={{ height: "60vh", objectFit: "cover", objectPosition: "top", margin: "auto" }} className="d-block" src={ph} alt="Loading" />
                </Carousel.Item>
            );
        })
        return result;
    }

    return (
        <>
            {
                allLoaded === true ? (
                    <>
                        <Container>
                            <h1>{poetInfo.name[getCurrLang()]}</h1>
                        </Container>

                        <Container id="bio">
                            <Timeline lineColor="#ddd">
                                {getBio()}
                            </Timeline>
                        </Container>

                        <Container id="photos" className="mb-5">
                            <Carousel style={{ backgroundColor: "var(--dark)" }}>
                                {getPhotos()}
                            </Carousel>
                        </Container>

                        <Container id="video" style={{ height: "60vh" }} className="mb-5">
                            <iframe className="w-100 h-100" src={"https://www.youtube.com/embed/" + poetInfo.video} title="Poet video" allowFullScreen></iframe>
                        </Container>

                        <Container id="map" style={{ height: "60vh" }} className="mb-5">
                            <iframe className="w-100 h-100" src={"https://www.google.com/maps/embed?pb=" + poetInfo.location} title="Poet location" style={{ border: 0 }} loading="lazy"></iframe>
                        </Container>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </>
    );
}