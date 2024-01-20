import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import SideItems from "./SideItems";
import Navbar from "./Navbar";
import Topcards from "./Topcards";
import AddProfileCard from "./AddProfileCard";
import BarChart, { DonutChart } from "./BarChart";
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
          <div className="activities" style={{fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>Activities</div>
          </div>
          <div className="duration" style={{fontSize: '12px', color: "grey", textAlign: 'left' }}>May-June 2023</div>
          <BarChart />
        </div>
        <div className="bottomCards">
          <div className="card2a">
          </div>
          <div className="card2b">
            {isLocal ? <UserDataCard /> : <AddProfileCard />}
          </div>
        </div>
      </div>
    </div>
  );
}
