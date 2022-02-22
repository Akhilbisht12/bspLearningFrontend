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
    if (
      !(
        formdata.village &&
        formdata.strengths &&
        formdata.weaknesses &&
        formdata.opportunities &&
        formdata.threats
      )
    ) {
      alert("Please fill all fields");
      return;
    }
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
    <Layout className="w-100">
      <main
        className="w-100 d-flex flex-column align-items-center"
        style={{
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <h4 className="text-center mb-5 mt-3">{t("analysis form")}</h4>
        <input
          name="village"
          placeholder={t("village")}
          className="siteInput my-2"
          value={formdata.village}
          onChange={(e) =>
            setformdata({ ...formdata, village: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder={t("strength")}
          value={formdata.strengths}
          onChange={(e) =>
            setformdata({ ...formdata, strengths: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder={t("weakness")}
          value={formdata.weaknesses}
          onChange={(e) =>
            setformdata({ ...formdata, weaknesses: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          value={formdata.opportunities}
          placeholder={t("opportunities")}
          onChange={(e) =>
            setformdata({ ...formdata, opportunities: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder={t("threats")}
          value={formdata.threats}
          onChange={(e) =>
            setformdata({ ...formdata, threats: e.target.value })
          }
        />
        {toastShow == true && (
          <span className="badge badge-success">{t("success")}</span>
        )}
        <button
          className="sitebtnInv my-2"
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
