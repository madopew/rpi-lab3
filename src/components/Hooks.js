import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function useLanguage() {
    const [currLang, setLang] = useState(localStorage.getItem("lang") || "en");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        localStorage.setItem("lang", currLang);
        i18n.changeLanguage(currLang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currLang])

    return { t, currLang, setLang }
}
export { useLanguage };

function useJsonDB(jsonFileName) {
    const [loaded, setLoaded] = useState(false);
    const db = useRef(null);

    useEffect(() => {
        fetch("/db/" + jsonFileName)
            .then(res => res.json())
            .then(dat => {
                db.current = dat.data;
                setLoaded(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function search(key, value) {
        if (value === "") return db.current;
        let res = [];
        if (db.current !== null) {
            db.current.forEach(el => {
                let val = getKeyRecursive(el, key);
                if (val !== null && val.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    res.push(el);
                }
            });
        }

        return res;
    }

    function getKeyRecursive(element, key) {
        let keys = key.split('.');
        let temp = element;
        keys.forEach(sub => {
            if (temp.hasOwnProperty(sub)) {
                temp = temp[sub];
            } else {
                temp = null;
                return;
            }
        });
        return temp;
    }

    return [loaded, search];
}
export { useJsonDB };