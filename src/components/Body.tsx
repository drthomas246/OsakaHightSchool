import React from "react";
import { useSnapshot } from "valtio";
import HightSchoolMap from "./HightSchoolMap";
import HightSchoolList from "./HightSchoolList";
import { lenderSetting } from "../state/state";

const Body: React.FC = () => {
  const snap = useSnapshot<LenderSettingType>(lenderSetting);
  return <>{snap.showPanel === 0 ? <HightSchoolMap /> : <HightSchoolList />}</>;
};

export default Body;
