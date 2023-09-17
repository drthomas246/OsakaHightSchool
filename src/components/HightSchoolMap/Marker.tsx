import React from "react";
import { Marker, Tooltip } from "react-leaflet";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

import HightSchoolListItem from "../otherModule/HightSchoolListItem";

const colorMarker = (color: string): L.Icon<L.IconOptions> => {
  return L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    className: `default-marker ${color}`,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
};

const Markers: React.FC<MarkerProps> = (Props) => {
  const [isDownDrawer, setIsDownDrawer] = React.useState(false);
  const toggleDownDrawer = (open: boolean): void => {
    setIsDownDrawer(open);
  };
  return (
    <Marker
      position={Props.position}
      icon={colorMarker(Props.color)}
      riseOnHover={true}
      eventHandlers={{
        click: () => {
          toggleDownDrawer(true);
        },
      }}
    >
      <Tooltip>{Props.name}</Tooltip>
      {Props.location ?? (
        <Drawer
          anchor="bottom"
          open={isDownDrawer}
          onClose={() => {
            toggleDownDrawer(false);
          }}
          PaperProps={{
            sx: { bottom: "58px" },
          }}
        >
          <List>
            <HightSchoolListItem
              id={Props.id as number}
              name={Props.name}
              site={Props.site as string}
              address={Props.address as string}
              course={Props.course as string}
              tel={Props.tel as string}
              toggleDownDrawer={toggleDownDrawer}
            />
          </List>
        </Drawer>
      )}
    </Marker>
  );
};
export default Markers;
