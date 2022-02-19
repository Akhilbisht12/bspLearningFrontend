import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import BottomTabs from "../../components/Layout/BottomTabs";

const WhyBahujan = () => {
  const { t } = useTranslation(["misc"]);

  return (
    <Layout>
      <div className="d-flex flex-column align-items-center my-5">
        <h4>{t("title")}</h4>
        <div className="text-wrap text-center p-4">{t("whyBhaujan")}</div>
        <ReactPlayer
          className="react-player"
          width="100%"
          height="auto"
          controls={true}
          url="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/Gandhi+Jayanti.mp4"
        />
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default WhyBahujan;
