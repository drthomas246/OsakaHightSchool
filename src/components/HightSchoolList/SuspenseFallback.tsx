import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const NavigationButtons: React.FC = () => {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Stack direction="row" spacing={2}>
        <Skeleton sx={{ margin: "8px" }} variant="circular" width={24} height={24} />
        <Skeleton sx={{ margin: "8px" }} variant="circular" width={24} height={24} />
        <Skeleton sx={{ margin: "8px" }} variant="circular" width={24} height={24} />
      </Stack>
    </Box>
  );
};

const SuspenseFallback: React.FC = () => {
  return (
    <>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
      <ListItem disablePadding secondaryAction={<NavigationButtons />}>
        <ListItemText sx={{ padding: "8px 48px 8px 16px" }} primary={<Skeleton width="25%" />} secondary={<Skeleton width="25%" />} />
      </ListItem>
    </>
  );
};

export default SuspenseFallback;
