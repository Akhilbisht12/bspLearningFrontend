import React from "react";
import { useState } from "react";
import AuthServices from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import BottomTabs from "../../components/Layout/BottomTabs";
import "./Forms.css";
import { useTranslation } from "react-i18next";

const Influencer = () => {
  const { t } = useTranslation(["forms"]);
  const [toastShow, setToastShow] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    occupation: "",
    district: "",
    mandal: "",
    village: "",
  });

  const handleinfluencersubmit = () => {
    const user = localStorage.getItem("userId");
    console.log(user);
    AuthServices.InfluencerForm(formdata, user);
    setformdata({
      name: "",
      phone: "",
      occupation: "",
      district: "",
      mandal: "",
      village: "",
    });
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 2000);
  };

  return (
    <Layout>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          height: "auto",
          alignItems: "center",
          background: "#15181fc",
        }}
      >
        <h4 className="heading">{t("neutral_title")}</h4>
        <div className="inputs">
          <label htmlFor="village">{t("name")}</label>
          <input
            name="village"
            className="inputElement"
            value={formdata.name}
            onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">{t("phone")}</label>
          <input
            className="inputElement"
            value={formdata.phone}
            onChange={(e) =>
              setformdata({ ...formdata, phone: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">{t("occupation")}</label>
          <input
            className="inputElement"
            value={formdata.occupation}
            onChange={(e) =>
              setformdata({ ...formdata, occupation: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">{t("district")}</label>
          <input
            className="inputElement"
            value={formdata.district}
            onChange={(e) =>
              setformdata({ ...formdata, district: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">{t("mandal")}</label>
          <input
            className="inputElement"
            value={formdata.mandal}
            onChange={(e) =>
              setformdata({ ...formdata, mandal: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label htmlFor="village">{t("village")}</label>
          <input
            className="inputElement"
            value={formdata.village}
            onChange={(e) =>
              setformdata({ ...formdata, village: e.target.value })
            }
          />
        </div>
        {toastShow == true && (
          <span className="badge badge-success">{t("success")}</span>
        )}
        <button
          className="formBtn"
          style={{ marginBottom: "4rem" }}
          onClick={handleinfluencersubmit}
        >
          {t("submit")}
        </button>
      </main>
      <BottomTabs />
    </Layout>
  );
};

export default Influencer;
