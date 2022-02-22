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
    if (
      !(
        formdata.name &&
        formdata.phone &&
        formdata.occupation &&
        formdata.district &&
        formdata.mandal &&
        formdata.village
      )
    ) {
      alert("Please fill out all fields");
      return;
    }
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
          height: "auto",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <h3 className="text-center mt-3 mb-5">{t("neutral form")}</h3>
        <input
          name="name"
          placeholder={t("name")}
          className="siteInput my-2"
          value={formdata.name}
          onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
        />
        <input
          className="siteInput my-2"
          value={formdata.phone}
          placeholder={t("phone")}
          onChange={(e) => setformdata({ ...formdata, phone: e.target.value })}
        />
        <input
          className="siteInput my-2"
          placeholder={t("occupation")}
          value={formdata.occupation}
          onChange={(e) =>
            setformdata({ ...formdata, occupation: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder={t("district")}
          value={formdata.district}
          onChange={(e) =>
            setformdata({ ...formdata, district: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder={t("mandal")}
          value={formdata.mandal}
          onChange={(e) => setformdata({ ...formdata, mandal: e.target.value })}
        />
        <input
          className="siteInput my-2"
          placeholder={t("village")}
          value={formdata.village}
          onChange={(e) =>
            setformdata({ ...formdata, village: e.target.value })
          }
        />
        {toastShow == true && (
          <span className="badge badge-success">{t("success")}</span>
        )}
        <button
          className="sitebtnInv my-2"
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
