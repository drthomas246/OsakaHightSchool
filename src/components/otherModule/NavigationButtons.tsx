import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import PublicIcon from "@mui/icons-material/Public";
import RoomIcon from "@mui/icons-material/Room";

const NavigationButtons: React.FC<NavigationButtonsProps> = (props) => {
  return (
    <Box sx={{ textAlign: "right" }}>
      <IconButton
        aria-label="Call"
        color="primary"
        onClick={() => {
          location.href = "tel:" + props.tel;
        }}
      >
        <CallIcon />
      </IconButton>
      <IconButton
        aria-label="Site"
        color="primary"
        onClick={() => {
          location.href = props.site;
        }}
      >
        <PublicIcon />
      </IconButton>
      <IconButton
        aria-label="Map"
        color="primary"
        onClick={() => {
          location.href = "https://www.google.com/maps/search/" + props.address;
        }}
      >
        <RoomIcon />
      </IconButton>
    </Box>
  );
};

export default NavigationButtons;
