import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import SideItems from "./SideItems";
import Navbar from "./Navbar";
import Topcards from "./Topcards";
import AddProfileCard from "./AddProfileCard";
import BarChart from "./BarChart";
import UserDataCard from "./UserDataCard";
import { UserContext } from "../Context/UserContext";

export default function Dashboard() {
  const { isLocal, setIsLocal } = useContext(UserContext);
  return (
    <div className="dashPage">
      <div className="sideCard">
        <div className="overlaySide">
          <SideItems />
        </div>
      </div>
      <div className="rtCards">
        <Navbar />
        <Topcards />
        <div className="midCard">
          <div className="activityparent">
            <div
              className="activities"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Activities
            </div>
          </div>
          <div
            className="duration"
            style={{ fontSize: "12px", color: "grey", textAlign: "left" }}
          >
            May-June 2023
          </div>
          <BarChart />
        </div>
        <div className="bottomCards">
          <div className="card2a">
            This part is empty because I tried to implement two charts using chart.js but couldn't.
             Due to lack of time, I was also not able to try other chart libraries. Although all other functionalities 
             of the page are perfectly running. It should also be noted that each and every component in this project is
             "styled manually using CSS3" and without the help of any ui components or even tailwind css.

             The authorised login credentials are :
                email : k.badal19@gmail.com
                Password : 1234

              Also, google auth with firebase is completely functional, so that can be used as well.
          </div>
          <div className="card2b">
            {isLocal ? <UserDataCard /> : <AddProfileCard />}
          </div>
        </div>
      </div>
    </div>
  );
}
