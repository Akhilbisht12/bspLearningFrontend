import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import BottomTabs from "../../components/Layout/BottomTabs";
import Navbar from "../../components/UI/Navigation/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import authService from "../../ApiServices/auth.service";
import Loader from "react-loader-spinner";
import WhyBhujan from "./WhyBhujan";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const { t } = useTranslation(["dashboard"]);
  const [coursesWatched, setcoursesWatched] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const userId = localStorage.getItem("userId");
    await authService.GetCourseCount(userId).then((response) => {
      setcoursesWatched(response.data.count);
      console.log(response.data.count);
    });
    await authService.GetUser(userId).then((response) => {
      setUser(response.data.user);
    });
    setLoading(false);
  };
  let data = null;
  let pieData = null;
  if (user) {
    const labels = ["Overview"];
    data = {
      labels,
      datasets: [
        {
          label: "Villages Vis.",
          data: labels.map(() => user.swot.length),
          backgroundColor: "blue",
        },
        {
          label: "Surveys Cond.",
          data: labels.map(() => user.swot.length + user.influencers.length),
          backgroundColor: "violet",
        },
        {
          label: "Influencers Data",
          data: labels.map(() => user.influencers.length),
          backgroundColor: "pink",
        },
      ],
    };
    pieData = {
      labels: ["Influencer", "Participants", "SWOT"],
      datasets: [
        {
          label: "# of Votes",
          data: [
            user.influencers.length,
            user.influencers.length,
            user.swot.length,
          ],
          backgroundColor: ["purple", "blue", "violet", "pink"],
          borderColor: ["white", "white", "white", "white"],
          borderWidth: 2,
        },
      ],
    };
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Overview",
      },
    },
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  if (loading) {
    return (
      <Layout>
        <Loader
          type="Puff"
          color="#08BD80"
          height={50}
          width={50}
          className="loader"
        />
      </Layout>
    );
  }
  return (
    <Layout>
      {/* <WhyBhujan /> */}
      <Bar height="250px" options={options} data={data} />
      {/* modulres written data */}
      <div className="my-4 pb-5">
        {/* <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1"
              style={{ backgroundColor: "purple" }}
            ></div>
            <div>{t("modules-comp")}</div>
          </div>
          <div>{coursesWatched}</div>
        </div> */}
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 bg-"
              style={{ backgroundColor: "blue" }}
            ></div>
            <div>{t("villages-visited")}</div>
          </div>
          <div>{user.swot.length}</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 "
              style={{ backgroundColor: "violet" }}
            ></div>
            <div>{t("surveys")}</div>
          </div>
          <div>{user.swot.length + user.influencers.length}</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div className="p-2 m-1" style={{ backgroundColor: "pink" }}></div>
            <div> {t("influencer-data")}</div>
          </div>
          <div>{user.influencers.length}</div>
        </div>
      </div>
      {/* pie chart */}
      <div className="mt-5 pt-5">
        <Pie options={pieOptions} data={pieData} />
      </div>
      {/* pie detailed data */}
      <div className="my-3 pb-5">
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1"
              style={{ backgroundColor: "purple" }}
            ></div>
            <div>{t("influencers")}</div>
          </div>
          <div>{user.influencers.length}</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 bg-"
              style={{ backgroundColor: "blue" }}
            ></div>
            <div>{t("participants")}</div>
          </div>
          <div>{user.influencers.length}</div>
        </div>
        <div className="d-flex justify-content-between px-3 my-2">
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="p-2 m-1 "
              style={{ backgroundColor: "violet" }}
            ></div>
            <div>{t("swots")}</div>
          </div>
          <div>{user.swot.length}</div>
        </div>
        {/* <div className="d-flex justify-content-between px-3 my-2 mb-5">
          <div className="d-flex justify-content-start align-items-center">
            <div className="p-2 m-1" style={{ backgroundColor: "pink" }}></div>
            <div>{t("modules")}</div>
          </div>
          <div>{coursesWatched}</div>
        </div> */}
      </div>
      <BottomTabs />
    </Layout>
  );
};

export default Dashboard;
