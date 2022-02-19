import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { formImg } from "../../assets/Images/form_img.png";
import BottomTabs from "../../components/Layout/BottomTabs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import authService from "../../ApiServices/auth.service";

const FormPage = () => {
  const history = useHistory();
  const [coursesWatched, setcoursesWatched] = useState(0);
  useEffect(() => {
    const user = localStorage.getItem("userId");
    authService.GetCourseCount(user).then((response) => {
      setcoursesWatched(response.data.count);
    });
  }, []);

  const { t } = useTranslation(["forms"]);
  return (
    <Layout>
      <div className="main__from-wrapper">
        <div className="img__box"></div>
        <div className={"btn__wrapper "}>
          <button className="sitebtnInv my-2" onClick={() => history.push("/swot")}>
            {t("analysis form")}
          </button>
          <button
            className="sitebtnInv my-2"
            onClick={() => history.push("/influencer")}
          >
            {t("neutral form")}{" "}
          </button>
        </div>
        <div className={`btn__wrapper `}>
          {/* <p className="text-center text-white">
            You have not completed all the modules, please complete all the
            modules and unlock forms
          </p> */}
        </div>
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default FormPage;
