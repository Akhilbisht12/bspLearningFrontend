import React from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import BottomTabs from "../../components/Layout/BottomTabs";
import Layout from "../../components/Layout/Layout";

const WhyRSP = () => {
  const { t } = useTranslation(["misc"]);
  return (
    <Layout>
      <div className="px-3 py-5">
        <div className="">
          <div className="p-4 bg-white rounded-3 shadow">
            <p>{t("whyRsp1")}</p>
            <p>{t("whyRsp2")}</p>
            <p>{t("whyRsp3")}</p>
            <p>{t("whyRsphead")}</p>
            <ol>
              <li>{t("p1")}</li>
              <li>{t("p2")}</li>
              <li>{t("p3")}</li>
              <li>{t("p4")}</li>
              <li>{t("p5")}</li>
            </ol>
          </div>
        </div>
        <div className="my-3">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="auto"
            controls={true}
            url="https://upgrate.in/wp-content/uploads/2022/02/Final_WhyRSP_Telugu.mp4"
          />
        </div>
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default WhyRSP;
