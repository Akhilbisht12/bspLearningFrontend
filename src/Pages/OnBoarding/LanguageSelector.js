import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logoBhim from "../../assets/Images/bhim.png";

const LanguageSelector = () => {
  const [lang, setLang] = useState("en");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLang = () => {
    localStorage.setItem("Lang", lang);
    i18next.changeLanguage(lang);
    history.push("/onboarding");
  };
  return (
    <div className="min100vh d-flex flex-column align-items-center">
      <img className="w-25 my-4" src={logoBhim} alt="logo" />
      <h3 className="text-center">
        Select Your <br />
        Language
      </h3>
      <div className="my-5 w-100 py-3 d-flex flex-column align-items-center">
        <h3
          onClick={() => setLang("en")}
          className={lang === "en" ? "my-3 sitebtnInv " : " my-3"}
        >
          English
        </h3>
        <h3
          onClick={() => setLang("hi")}
          className={lang === "hi" ? "my-3 sitebtnInv " : " my-3"}
        >
          हिन्दी
        </h3>
        <h3
          onClick={() => setLang("te")}
          className={lang === "te" ? "my-3 sitebtnInv " : " my-3"}
        >
          తెలుగు
        </h3>
      </div>
      <div className="sitebtnInv" onClick={handleLang}>
        Next
      </div>
    </div>
  );
};

export default LanguageSelector;
