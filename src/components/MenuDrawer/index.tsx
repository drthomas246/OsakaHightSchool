import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSnapshot } from "valtio";

import { DrawerHeader } from "../otherModule/styled";
import InformationDialog from "./InformationDialog";
import TermOfUseDialog from "./TermsOfUseDialog";
import UsageDialog from "./UsageDialog";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import { currentLocationDisplay, setCurrentLocationDisplay } from "../../state/state";

const MenuDrawer: React.FC<MenuDrawerProps> = (Props) => {
  const snap = useSnapshot<CurrentLocationDisplayType>(currentLocationDisplay);
  const [usageDialog, setUsageDialog] = useState(false);
  const [informationDialog, setInformationDialog] = useState(false);
  const [termOfUseDialog, setTermOfUseDialog] = useState(false);
  const [privacyPolicyDialog, setPrivacyPolicyDialog] = useState(false);
  const openUsageDialog = (): void => {
    setUsageDialog(true);
  };
  const closeUsageDialog = (): void => {
    setUsageDialog(false);
  };
  const openInformationDialog = (): void => {
    setInformationDialog(true);
  };
  const closeInformationDialog = (): void => {
    setInformationDialog(false);
  };
  const openPrivacyPolicyDialog = (): void => {
    setPrivacyPolicyDialog(true);
  };
  const closePrivacyPolicyDialog = (): void => {
    setPrivacyPolicyDialog(false);
  };
  const openTermOfUseDialog = (): void => {
    setTermOfUseDialog(true);
  };
  const closeTermOfUseDialog = (): void => {
    setTermOfUseDialog(false);
  };
  const isCurrentLocationDisplayEnabled = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentLocationDisplay(event.target.checked);
    Props.handleMenuDrawerClose();
  };
  return (
    <Drawer
      anchor="left"
      open={Props.menuDrawer}
      onClose={Props.handleMenuDrawerClose}
      sx={{
        flexGrow: 1,
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
        },
      }}
    >
      <DrawerHeader>
        <Typography variant="body1">設定メニュー</Typography>
      </DrawerHeader>
      <List>
        <ListItem>
          <FormControlLabel control={<Checkbox checked={snap.enabled} onChange={isCurrentLocationDisplayEnabled} />} label="現在地を表示" />
        </ListItem>
        <ListItem>
          <ListItemButton onClick={openUsageDialog}>
            <ListItemText primary="使用方法" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={openTermOfUseDialog}>
            <ListItemText primary="利用規約" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={openPrivacyPolicyDialog}>
            <ListItemText primary="プライバシーポリシー" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={openInformationDialog}>
            <ListItemText primary="バージョン情報" />
          </ListItemButton>
        </ListItem>
      </List>
      <Dialog open={usageDialog} onClose={closeUsageDialog} fullWidth={true} maxWidth="md">
        <UsageDialog />
      </Dialog>
      <Dialog open={termOfUseDialog} onClose={closeTermOfUseDialog} fullWidth={true} maxWidth="md">
        <TermOfUseDialog />
      </Dialog>
      <Dialog open={privacyPolicyDialog} onClose={closePrivacyPolicyDialog} fullWidth={true} maxWidth="md">
        <PrivacyPolicyDialog />
      </Dialog>
      <Dialog open={informationDialog} onClose={closeInformationDialog} fullWidth={true} maxWidth="sm">
        <InformationDialog />
      </Dialog>
    </Drawer>
  );
};

export default MenuDrawer;
