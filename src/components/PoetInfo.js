import { useEffect, useState } from "react";
import useJsonDB from "../hooks/JsonDB";
import useLanguage from "../hooks/Language";

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

    return (
        <>
            {
                allLoaded === true ? (
                    <>
                    <h1>{poetInfo.name[getCurrLang()]}</h1>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </>
    );
}