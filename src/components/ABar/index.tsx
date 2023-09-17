import React, { useState, useRef, useLayoutEffect } from "react";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FilterListIcon from "@mui/icons-material/FilterList";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import Fuse from "fuse.js";

import Data from "../file.json";
import { setSearchResultData } from "../../state/state";
import FilterDrawer from "../FilterDrawer";
import MenuDrawer from "../MenuDrawer";
import { Search, SearchIconWrapper, StyledInputBase } from "../otherModule/styled";

const ABar: React.FC = () => {
  const [searchLocalString, setSearchLocalString] = useState("");
  const [searchString, setSearchString] = useState("");
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [menuDrawer, setMenuDrawer] = useState(false);
  const isInputting = useRef(false);

  const options = {
    includeScore: true,
    useExtendedSearch: true,
    threshold: 0.25,
    sortFn: (a: Fuse.FuseSortFunctionArg, b: Fuse.FuseSortFunctionArg) => a.idx - b.idx,
    keys: ["name", "ruby"],
  };
  const fuse = new Fuse<HightSchoolData>(Data, options);
  useLayoutEffect(() => {
    const result = fuse.search(searchString === "" ? "学校 | 部" : searchString);
    setSearchResultData(result);
  }, [searchString]);

  const menuId = "primary-search-account-menu";
  const handleFilterDrawerOpen = (): void => {
    setFilterDrawer(true);
  };
  const handleFilterDrawerClose = (): void => {
    setFilterDrawer(false);
  };
  const handleMenuDrawerOpen = (): void => {
    setFilterDrawer(false);
    setMenuDrawer(true);
  };
  const handleMenuDrawerClose = (): void => {
    setMenuDrawer(false);
  };
  const isSafari = navigator.userAgent.includes("Safari/") && navigator.userAgent.includes("Version/");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="設定メニュー">
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={handleMenuDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            大阪周辺高校情報
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }} />
          <Tooltip title="学校名検索">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="学校名検索…"
                value={searchLocalString}
                inputProps={{ "aria-label": "search" }}
                onChange={(event: React.ChangeEvent) => {
                  if (!(event.target instanceof HTMLInputElement)) {
                    return;
                  }
                  setSearchLocalString(event.target.value);
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                  if (!(event.target instanceof HTMLInputElement)) {
                    return;
                  }
                  if (isSafari && isInputting.current) {
                    isInputting.current = false;
                    return;
                  }
                  if (event.key !== "Enter" || isInputting.current) {
                    return;
                  }
                  setSearchString(event.target.value);
                }}
                onCompositionStart={() => {
                  isInputting.current = true;
                }}
                onCompositionEnd={(event) => {
                  isInputting.current = false;
                  if (!(event.target instanceof HTMLInputElement)) {
                    return;
                  }
                  setSearchLocalString(event.target.value);
                }}
              />
            </Search>
          </Tooltip>
          <Box>
            <Tooltip title="フィルター">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleFilterDrawerOpen}
                color="inherit"
              >
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <FilterDrawer filterDrawer={filterDrawer} handleFilterDrawerClose={handleFilterDrawerClose} />
      <MenuDrawer menuDrawer={menuDrawer} handleMenuDrawerClose={handleMenuDrawerClose} />
    </Box>
  );
};

export default ABar;
