import React from "react";
import "leaflet/dist/leaflet.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import BNavigation from "./BNavigation";
import "./App.css";
import ABar from "./ABar";
import Body from "./Body";

const App: React.FC = () => {
  return (
    <>
      <ABar />
      <Box sx={{ pb: 7, height: "calc(100% - 64px)" }}>
        <CssBaseline />
        <Body />
        <BNavigation />
      </Box>
    </>
  );
};

export default App;
