import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function useLanguage() {
    const [ currLang, setLang ] = useState(localStorage.getItem("lang") || "en");
    const { i18n } = useTranslation();

    useEffect(() => {
        localStorage.setItem("lang", currLang);
        i18n.changeLanguage(currLang);
    }, [ currLang, i18n ])

    return [ currLang, setLang ];
}

export { useLanguage };