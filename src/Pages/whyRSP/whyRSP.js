import React from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import BottomTabs from "../../components/Layout/BottomTabs";
import Layout from "../../components/Layout/Layout";

const WhyRSP = () => {
  const { t } = useTranslation(["misc"]);
  return (
    <Layout>
      <div className="p-3">
        <div className="">
          <div>
            <img
              className="w-100 rounded-3"
              src="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/wall.jpg"
              alt="cover"
            />
          </div>
          <div className="p-4 bg-white rounded-3 shadow">{t("whyRsp")}</div>
        </div>
        <div className="my-3">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="auto"
            controls={true}
            url="https://bsplearningvideos.s3.ap-south-1.amazonaws.com/Gandhi+Jayanti.mp4"
          />
        </div>
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default WhyRSP;
