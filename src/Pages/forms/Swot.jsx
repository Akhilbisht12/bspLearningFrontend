import React from "react";
import { useState } from "react";
import AuthServices from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import BottomTabs from "../../components/Layout/BottomTabs";
import "./Forms.css";
import { useTranslation } from "react-i18next";

const Swot = () => {
  const { t } = useTranslation(["forms"]);
  const [toastShow, setToastShow] = useState(false);
  const [formdata, setformdata] = useState({
    village: "",
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
  });

  const handleswotsubmit = () => {
    const user = localStorage.getItem("userId");
    AuthServices.SwotForm(formdata, user);
    setformdata({
      village: "",
      strengths: "",
      weaknesses: "",
      opportunities: "",
      threats: "",
    });
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 2000);
  };
  const formElementsArray = [];

  return (
    <Layout>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          alignItems: "center",
          height: "auto",
          background: "#15181fc",
        }}
      >
        <h4 className="heading">{t("title")}</h4>
        <div className="inputs">
          <label htmlFor="village">{t("village")}</label>
          <input
            name="village"
            className="inputElement"
            value={formdata.village}
            onChange={(e) =>
              setformdata({ ...formdata, village: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="strength">{t("strength")}</label>
          <input
            className="inputElement"
            value={formdata.strengths}
            onChange={(e) =>
              setformdata({ ...formdata, strengths: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="weakness">{t("weakness")}</label>
          <input
            className="inputElement"
            value={formdata.weaknesses}
            onChange={(e) =>
              setformdata({ ...formdata, weaknesses: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="opportunities">{t("opportunities")}</label>
          <input
            className="inputElement"
            value={formdata.opportunities}
            onChange={(e) =>
              setformdata({ ...formdata, opportunities: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="threats">{t("threats")}</label>
          <input
            className="inputElement"
            value={formdata.threats}
            onChange={(e) =>
              setformdata({ ...formdata, threats: e.target.value })
            }
          />
        </div>
        {toastShow == true && (
          <span className="badge badge-success">{t("success")}</span>
        )}
        <button
          className="formBtn"
          style={{ marginBottom: "5rem" }}
          onClick={handleswotsubmit}
        >
          {t("submit")}
        </button>
      </main>
      <BottomTabs />
    </Layout>
  );
};

export default Swot;
