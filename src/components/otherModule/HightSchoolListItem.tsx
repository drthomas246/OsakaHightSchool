import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { type TransitionProps } from "@mui/material/transitions";
import DialogContent from "@mui/material/DialogContent";

import NavigationButtons from "./NavigationButtons";
import Detail from "../HightSchoolDetail";

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

Transition.displayName = "Transition";

const HightSchoolListItem: React.FC<HightSchoolistItemProps> = (Props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
    if (Props.toggleDownDrawer != null) {
      Props.toggleDownDrawer(false);
    }
  };
  return (
    <ListItem disablePadding secondaryAction={<NavigationButtons tel={Props.tel} site={Props.site} address={Props.address} />}>
      <ListItemButton onClick={handleClickOpen}>
        <ListItemText primary={Props.name} secondary={Props.course} />
      </ListItemButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              color="inherit"
              sx={{
                mr: 2,
              }}
              onClick={handleClose}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              大阪周辺高校情報
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
        <DialogContent dividers={true}>
          <Detail detailId={Props.id} />
        </DialogContent>
      </Dialog>
    </ListItem>
  );
};

export default HightSchoolListItem;
