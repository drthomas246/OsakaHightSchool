import React from "react";
import "leaflet/dist/leaflet.css";
import HightSchoolMap from "./index";


export default {
  title: "地図タブ/マップリスト",
  component: HightSchoolMap,
};

export const Primary = () => <HightSchoolMap />;