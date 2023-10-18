import React from "react";
import { useSnapshot } from "valtio";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import ListIcon from "@mui/icons-material/List";
import MapIcon from "@mui/icons-material/Map";

import { lenderSetting, setShowPanel } from "../../state/state";

const BNavigation: React.FC = () => {
  const snap = useSnapshot<LenderSettingType>(lenderSetting);
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={snap.showPanel}
        onChange={(event, newValue) => {
          setShowPanel(event, newValue);
        }}
      >
        <BottomNavigationAction label="地図" icon={<MapIcon />} />
        <BottomNavigationAction label="リスト" icon={<ListIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BNavigation;
