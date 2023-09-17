import React, { Suspense, useEffect, useRef } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useSnapshot } from "valtio";

import { filteredData } from "../../state/state";
import SuspenseFallback from "./SuspenseFallback";

const PAGE_Y_OFFSET = 200;

const HightSchoolItem = React.lazy(async () => await import("./HightSchoolItem"));

const HightSchoolList: React.FC = () => {
  const snap = useSnapshot<FilteredDataType>(filteredData);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const changeShow = () => {
    if (window.scrollY > PAGE_Y_OFFSET) {
      buttonRef.current!.style.opacity = "1";
    } else {
      buttonRef.current!.style.opacity = "0";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeShow);
    return () => window.removeEventListener("scroll", changeShow);
  }, []);
  return (
    <>
      <List>
        <Suspense fallback={<SuspenseFallback />}>
          <HightSchoolItem result={snap.searchResultData} />
        </Suspense>
      </List>
      <Box sx={{ height: "64px" }} />
      <Fab
        ref={buttonRef}
        size="small"
        color="secondary"
        sx={{ position: "fixed", bottom: 32, right: 16, opacity: 0 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <NavigationIcon />
      </Fab>
    </>
  );
};

export default HightSchoolList;
