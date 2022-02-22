import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBhim from "../../assets/Images/bhim.png";
import ob1 from "../../assets/Images/ob1.png";
import ob2 from "../../assets/Images/ob2.png";
import ob6 from "../../assets/Images/ob6.png";
import ob5 from "../../assets/Images/ob5.png";
import ob4 from "../../assets/Images/bhim2.png";

import { useTranslation } from "react-i18next";

const OnBoarding = () => {
  const { t } = useTranslation(["about"]);
  const [step, setStep] = useState(0);
  const content = [
    {
      text: t("on1"),
      image: ob1,
    },
    {
      text: t("on2"),
      image: ob2,
    },
    {
      text: t("on3"),
      image: ob4,
    },
    {
      text: t("on4"),
      image: ob5,
    },
    {
      text: t("on5"),
      image: ob6,
    },
    {
      text: t("on6"),
      image: logoBhim,
    },
    {
      text: t("on7"),
      image: ob5,
    },
  ];
  console.log(step);
  console.log(content[step].text);
  const OnboardOne = () => {
    return (
      <div className="min100vh p-4 d-flex flex-column align-items-center justify-content-between">
        <img className="w-75" src={content[step].image} alt="" />
        <div className="d-flex flex-column align-items-center">
          <h5
            className="my-4"
            style={{ fontSize: "25px", fontWeight: "800" }}
          ></h5>
          <h5
            className="text-center"
            style={{ fontSize: "24px", letterSpacing: "2px" }}
          >
            {content[step].text}
          </h5>
        </div>

        <div className="sitebtnInv" onClick={() => setStep(step + 1)}>
          {t("next")}
        </div>
      </div>
    );
  };
  const OnboardRest = () => {
    return (
      <div className="min100vh p-4 d-flex flex-column align-items-center justify-content-between">
        <h5
          className="text-center"
          style={{ fontSize: "24px", letterSpacing: "2px" }}
        >
          {content[step].text}
        </h5>
        <img src={content[step - 1].image} className="w-100" />
        <div className="sitebtnInv" onClick={() => setStep(step + 1)}>
          {t("next")}
        </div>
      </div>
    );
  };

  const FinalScreen = () => {
    return (
      <div className="min100vh d-flex flex-column justify-content-center align-items-center">
        <img className="my-4" src={logoBhim} />
        <h3 className="my-4">{t("journey")}</h3>
        <Link to="/login" className="sitebtnInv">
          {t("start")}
        </Link>
      </div>
    );
  };
  switch (step) {
    case 1:
      return <OnboardOne />;
    case 7:
      return <FinalScreen />;
    default:
      return <OnboardRest />;
  }
};

export default OnBoarding;
