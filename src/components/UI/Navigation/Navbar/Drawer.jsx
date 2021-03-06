import React from "react";
import avatar from "../../../../assets/Images/user.png";
import {
  FaDesktop,
  FaClipboardList,
  FaBookOpen,
  FaAward,
  FaBullhorn,
  FaSignOutAlt,
  FaPaperPlane,
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Drawer = ({ closeDrawer, logout }) => {
  const { t } = useTranslation(["common"]);
  const profile = localStorage.getItem("profile");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("email");
  const userPhone = localStorage.getItem("phone");
  let loginMethod = null;
  if (userEmail === undefined) {
    loginMethod = userPhone;
  } else {
    loginMethod = userEmail;
  }
  return (
    <div className="min100vh bg-white p-3 " style={styles.main}>
      <div
        className="d-flex flex-column justify-content-around"
        style={{ height: "65vh" }}
      >
        <div className="d-flex justify-content-between">
          <div>
            <img
              className="user__img"
              src={profile ? profile : avatar}
              alt=""
            />
            <h5 className="">{userName}</h5>
            <p className="">{loginMethod}</p>
          </div>
          <div className="close">
            <FaWindowClose onClick={closeDrawer} size={25} color="black" />
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <div className="d-flex align-items-center">
            <FaDesktop size={25} color="black" />
            <span className="mx-2 fs-3">{t("dashboard")}</span>
          </div>
        </Link>
        {/* <Link style={{ textDecoration: "none" }} to="/home/all">
        <div className="d-flex align-items-center">
          <FaClipboardList size={25} color="black" />
          <span className="mx-2 fs-3"> Modules</span>
        </div>
      </Link> */}
        <Link to="/whyrsp">
          <div className="d-flex align-items-center">
            <FaPaperPlane size={25} color="black" />
            <span className="mx-2 fs-3">{t("whyrsp")}</span>
          </div>
        </Link>
        <Link to="/whybahujan">
          <div className="d-flex align-items-center">
            <FaPaperPlane size={25} color="black" />
            <span className="mx-2 fs-3">{t("whybahujan")}</span>
          </div>
        </Link>

        {/* <Link to="/badges">
        <div className="d-flex align-items-center">
          <FaAward size={25} color="black" />
          <span className="mx-2 fs-3"> Your Badges</span>
        </div>
      </Link> */}
        <Link to="/meetings">
          <div className="d-flex align-items-center">
            <FaBullhorn size={25} color="black" />
            <span className="mx-2 fs-3">{t("meeting")}</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/forms">
          <div className="d-flex align-items-center">
            <FaBookOpen size={25} color="black" />
            <span className="mx-2 fs-3">{t("forms")}</span>
          </div>
        </Link>
        <div className="d-flex align-items-center" onClick={logout}>
          <FaSignOutAlt size={25} color="black" />
          <span className="mx-2 fs-3">{t("logout")}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  main: {
    boxShadow: "11px 1px 17px -6px rgba(0, 0, 0, 0.39)",
    width: "80vw",
  },
};

export default Drawer;
