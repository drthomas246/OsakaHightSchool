import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";
import PublicIcon from "@mui/icons-material/Public";

import Data from "../file.json";

const Detail: React.FC<DetailProps> = (Props) => {
  return (
    <Card sx={{ padding: "10px", margin: "10px" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              {Data[Props.detailId].name}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {Data[Props.detailId].ruby}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="caption">住所</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].address}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "right" }}>
            <Tooltip title="マップを開く" arrow placement="top">
              <IconButton
                aria-label="Map"
                color="primary"
                onClick={() => {
                  location.href = `https://www.google.com/maps/search/${Data[Props.detailId].address}`;
                }}
              >
                <RoomIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="caption">電話番号</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].tel}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "right" }}>
            <Tooltip title="電話をかける" arrow placement="top">
              <IconButton
                aria-label="Call"
                color="primary"
                onClick={() => {
                  location.href = `tel:${Data[Props.detailId].tel}`;
                }}
              >
                <CallIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="caption">サイト</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].site}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "right" }}>
            <Tooltip title="サイトを開く" arrow placement="top">
              <IconButton
                aria-label="Site"
                color="primary"
                onClick={() => {
                  location.href = Data[Props.detailId].site;
                }}
              >
                <PublicIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">設置区分</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].label}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">男女別</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].education}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">学科</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].course}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">最寄り駅</Typography>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              {Data[Props.detailId].near}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Detail;
