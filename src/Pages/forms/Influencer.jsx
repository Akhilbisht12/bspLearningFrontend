import React from "react";
import { useState } from "react";
import AuthServices from "../../ApiServices/auth.service";
import Layout from "../../components/Layout/Layout";
import BottomTabs from "../../components/Layout/BottomTabs";
import "./Forms.css";

const Influencer = () => {
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
        <h3 className="text-center mt-3 mb-5">Neutral Influencers</h3>
        <input
          name="name"
          placeholder="Name"
          className="siteInput my-2"
          value={formdata.name}
          onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
        />
        <input
          className="siteInput my-2"
          value={formdata.phone}
          placeholder="Phone"
          onChange={(e) => setformdata({ ...formdata, phone: e.target.value })}
        />
        <input
          className="siteInput my-2"
          placeholder="Occupation"
          value={formdata.occupation}
          onChange={(e) =>
            setformdata({ ...formdata, occupation: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder="District"
          value={formdata.district}
          onChange={(e) =>
            setformdata({ ...formdata, district: e.target.value })
          }
        />
        <input
          className="siteInput my-2"
          placeholder="Mandal"
          value={formdata.mandal}
          onChange={(e) => setformdata({ ...formdata, mandal: e.target.value })}
        />
        <input
          className="siteInput my-2"
          placeholder="Village"
          value={formdata.village}
          onChange={(e) =>
            setformdata({ ...formdata, village: e.target.value })
          }
        />
        {toastShow == true && (
          <span className="badge badge-success">Success</span>
        )}
        <button
          className="sitebtnInv my-2"
          style={{ marginBottom: "4rem" }}
          onClick={handleinfluencersubmit}
        >
          Submit
        </button>
      </main>
      <BottomTabs />
    </Layout>
  );
};

export default Influencer;
