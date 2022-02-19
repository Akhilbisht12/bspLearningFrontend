import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import logoBhim from "../../../../assets/Images/bhim.png";
import { Link, useHistory } from "react-router-dom";
import authService from "../../../../ApiServices/auth.service";
import Alert from "../alert";
import { districts } from "./districts";
import { useTranslation } from "react-i18next";

const NewSignup = () => {
  const { t } = useTranslation(["common"]);
  const history = useHistory();
  const [Loading, setLoading] = useState(false);
  const [districtRef, setdistrictRef] = useState(0);
  const [loginInfo, setloginInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpass: "",
    profile: "",
    age: "",
    gender: "",
    residence: "",
    community: "",
    education: "",
    occupation: "",
    district: "",
    mandal: "",
    village: "",
    pconst: "",
    aconst: "",
  });
  const [step, setstep] = useState(1);
  const [error, seterror] = useState({
    alertMsg: "",
    alertType: "",
    value: false,
  });
  const handleformone = (e) => {
    e.preventDefault();
    if (loginInfo.password !== loginInfo.confirmpass) {
      alert("passwords does not match");
    } else {
      setstep(step + 1);
    }
  };

  const handleformback = () => {
    setstep(step - 1);
  };

  const submitform = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    for (const [key, value] of Object.entries(loginInfo)) {
      formData.append(key, value);
      console.log(key, value);
    }
    authService
      .register(formData)
      .then((response) => {
        setLoading(false);
        console.log("Response:", response);
        localStorage.setItem("email", loginInfo.email);
        localStorage.setItem("phone", loginInfo.phone);
        localStorage.setItem("userName", loginInfo.name);
        localStorage.setItem("profile", response.data.profile);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("valid", true);
        localStorage.setItem("type", "success");
        localStorage.setItem("msg", response.data.message);
        history.push("/signup/otp");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        seterror({
          value: true,
          alertType: "danger",
          alertMsg: error.response.data.message[0].msg,
        });
      });
  };
  return (
    <div>
      <Alert
        value={error.value}
        alertMsg={error.alertMsg}
        alertType={error.alertType}
      />
      <div
        className="d-flex flex-column justify-content-center min100vh align-items-center"
        style={{ fontFamily: "Gilroy" }}
      >
        <img className="w-25" src={logoBhim} />
        <p className="my-2"> BHIM BATA APP USER REGISTRATION</p>
        {/* step 1 form */}
        <form
          onSubmit={handleformone}
          className={`w-100 ${
            step === 1 ? "d-flex" : "d-none"
          } flex-column justify-content-center align-items-center`}
        >
          <input
            className="siteInput"
            placeholder={t("fullname")}
            value={loginInfo.name}
            required
            onChange={(e) => {
              setloginInfo({ ...loginInfo, name: e.target.value });
            }}
          />
          <input
            className="siteInput"
            placeholder={t("email")}
            type="email"
            required
            value={loginInfo.email}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <input
            className="siteInput"
            placeholder={t("phone")}
            type="number"
            required
            value={loginInfo.phone}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, phone: e.target.value })
            }
          />
          <input
            placeholder={t("password")}
            type="password"
            autoComplete="confirm-password"
            required
            minLength={5}
            value={loginInfo.password}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, password: e.target.value })
            }
            className="siteInput"
          />
          <input
            placeholder={t("new-password")}
            type="password"
            required
            value={loginInfo.confirmpass}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, confirmpass: e.target.value })
            }
            className="siteInput"
          />
          <div className="siteInput">
            <label htmlFor="picture" className="m-0">
              {t("choose-picture")}
            </label>
            <input
              placeholder="Upload Picture"
              required
              id="picture"
              style={{ visibility: "hidden" }}
              type="file"
              onChange={(e) =>
                setloginInfo({ ...loginInfo, profile: e.target.files[0] })
              }
              required
              accept=".jpg, .jpeg, .png"
            />
          </div>

          <input type="submit" value={t("next")} className="sitebtnInv my-3" />
        </form>
        {/* Second Form */}
        <form
          onSubmit={handleformone}
          className={`w-100 ${
            step === 2 ? "d-flex" : "d-none"
          } flex-column justify-content-center align-items-center`}
        >
          <input
            placeholder={t("age")}
            type="number"
            value={loginInfo.age}
            required
            onChange={(e) =>
              setloginInfo({ ...loginInfo, age: e.target.value })
            }
            className="siteInput"
          />
          {/* <input
            placeholder="Gender"
            type="text"
            value={loginInfo.gender}
            required
            onChange={(e) =>
              setloginInfo({ ...loginInfo, gender: e.target.value })
            }
            className="form-control w-75 my-3"
          /> */}
          <select
            required
            className="siteInput"
            value={loginInfo.gender}
            onChange={(e) => {
              console.log(loginInfo.gender);
              setloginInfo({ ...loginInfo, gender: e.target.value });
            }}
          >
            <option value="">{t("gender")}</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            placeholder={t("residence")}
            type="text"
            required
            value={loginInfo.residence}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, residence: e.target.value })
            }
            className="siteInput"
          />
          <input
            className="siteInput"
            placeholder={t("community")}
            type="text"
            required
            value={loginInfo.community}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, community: e.target.value })
            }
          />
          <input
            className="siteInput"
            placeholder={t("education")}
            type="text"
            required
            value={loginInfo.education}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, education: e.target.value })
            }
          />
          <input
            className="siteInput"
            placeholder={t("occupation")}
            type="text"
            required
            value={loginInfo.occupation}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, occupation: e.target.value })
            }
          />
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={handleformback} style={prevBtn}>
              {t("back")}
            </button>
            <input type="submit" value={t("next")} style={prevBtn} />
          </div>
        </form>

        {/* Third Form */}
        <form
          onSubmit={submitform}
          className={`w-100 ${
            step === 3 ? "d-flex" : "d-none"
          } flex-column justify-content-center align-items-center`}
        >
          {/* <input
            placeholder="District"
            type="text"
            value={loginInfo.district}
            required
            onChange={(e) =>
              setloginInfo({ ...loginInfo, district: e.target.value })
            }
            className='siteInput'
          /> */}
          <select
            required
            className="siteInput"
            onChange={(e) => {
              {
                setdistrictRef(e.target.value);
                setloginInfo({
                  ...loginInfo,
                  district: districts[e.target.value].name,
                });
              }
            }}
          >
            <option value="">{t("select-district")}</option>
            {districts.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
          <input
            placeholder={t("mandal")}
            type="text"
            required
            value={loginInfo.mandal}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, mandal: e.target.value })
            }
            className="siteInput"
          />
          <input
            placeholder={t("village")}
            type="text"
            required
            value={loginInfo.village}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, village: e.target.value })
            }
            className="siteInput"
          />
          <select
            required
            className="siteInput"
            onChange={(e) => {
              setloginInfo({
                ...loginInfo,
                pconst: districts[districtRef].cont[e.target.value],
              });
            }}
          >
            <option value="">{t("SPC")}</option>
            {districts[districtRef].cont.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
          {/* <input
            placeholder="Parliamentary Constituency"
            type="text"
            required
            value={loginInfo.pconst}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, pconst: e.target.value })
            }
            className='siteInput'
          /> */}
          {/* <input
            placeholder="Assembly Constituency"
            type="text"
            required
            value={loginInfo.aconst}
            onChange={(e) =>
              setloginInfo({ ...loginInfo, aconst: e.target.value })
            }
            className='siteInput'
          /> */}
          <select
            required
            className="siteInput"
            onChange={(e) => {
              setloginInfo({
                ...loginInfo,
                aconst: districts[districtRef].cont[e.target.value],
              });
            }}
          >
            <option value="">{t("SAC")}</option>
            {districts[districtRef].cont.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={handleformback} style={prevBtn}>
              Back
            </button>
          </div>
          <input
            disabled={Loading}
            type="submit"
            value={t("create-account")}
            className="sitebtnInv my-3"
          />
        </form>

        <p className="my-4">
          {t("already-acc")}? <Link to="/login">{t("login")}</Link>
        </p>
      </div>
    </div>
  );
};
const styles = {
  width: "326px",
  textTransform: "uppercase",
  padding: "1rem",
  borderRadius: "7px",
  marginTop: "15px",
  backgroundColor: "white",
  color: "#00005c",
  font: "normal normal normal 16px/19px Gilroy",
  border: "none",
};
const inputStyle = {
  outline: "none",
  display: "block",
  width: "326px",
  border: "solid 2px white",
  background: "#ffffff 0% 0% no-repeat padding-box",
  font: "normal normal normal 18px/15px Gilroy",
  letterSpacing: "0px",
  color: "#707070",
  borderRadius: "25px",
  textAlign: "center",
  padding: "0.8rem",
  marginBottom: "1rem",
  boxSizing: "border-box",
};

const prevBtn = {
  width: "160px",
  textTransform: "uppercase",
  padding: "1rem",
  borderRadius: "7px",
  marginTop: "15px",
  marginLeft: "1rem",
  backgroundColor: "#00005c",
  color: "white",
  font: "normal normal normal 16px/19px Gilroy",
  border: "none",
};

export default NewSignup;
