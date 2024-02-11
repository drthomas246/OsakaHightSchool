import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import PublicIcon from "@mui/icons-material/Public";
import RoomIcon from "@mui/icons-material/Room";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterListIcon from "@mui/icons-material/FilterList";
import MenuIcon from "@mui/icons-material/Menu";

import icon from "leaflet/dist/images/marker-icon.png";

const UsageDialog: React.FC = () => {
  return (
    <>
      <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
        使用方法
      </DialogTitle>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【地図タブ】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 30px" }}>
        各高校の場所を地図上に表示しています。マウスドラックで移動、マウススクロールで拡大縮小できます。
        <br />
        <img src={icon} className="sky size" />
        をクリックするとその学校の【簡易情報】が表示されます。
      </Typography>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【リストタブ】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        リスト形式で【簡易情報】をを表示します。
        <br />
        【簡易情報】をクリックすると詳細情報を表示します。
      </Typography>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【簡易情報】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        【簡易情報】には「高校名」「学科」「いくつかのアイコン」が表示されます。アイコンの説明は以下の通りです。
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 10px" }}>
        <ul>
          <li>
            <CallIcon />
            をクリックすると高校へ電話をかけることができます。
          </li>
          <li>
            <PublicIcon />
            をクリックすると高校のホームページを開くことができます。
          </li>
          <li>
            <RoomIcon />
            をクリックするとGoogleマップを開くことができます。
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【詳細情報】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        【簡易情報】をクリックすると詳細情報を表示します。
        <br />
        詳細情報には「高校名」「ふりがな」「住所」「電話番号」「サイト」「設置区分」「男女別」「学科」「最寄り駅」「いくつかのアイコン」が表示されます。アイコンの説明は簡易情報と同じです。
        <br />
        左上の
        <ArrowBackIcon />
        をクリックすると元の画面に戻ります。
      </Typography>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【学校名検索】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        右上の「学校名検索」は検索したい学校名(一部でもよみがなでも可)を入力して検索すると「マップタブ」「リストタブ」それぞれに表示されます。
      </Typography>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【フィルター】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        右上の
        <FilterListIcon />
        は高校にフィルターをかけることができます。
        <br />
        「設置区分」「男女校」「学科」別にフィルタをかけることができるので、ほしいフィルターをかけてください。
      </Typography>
      <Typography variant="h6" sx={{ margin: "30px 10px 10px 10px" }}>
        【設定メニュー】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        左上の
        <MenuIcon />
        をクリックすると設定メニューを表示します。
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 10px" }}>
        <ul>
          <li>
            「現在地」
            <ul>
              <li>
                「現在地を表示」をチェックするとマップタグに
                <img src={icon} className="red size" />
                で現在地を表示します。
              </li>
              <li>
                「半径5kmと10kmの円を描く」をチェックするとマップタグに半径5kmと10kmの円が描かれます。
              </li>
            </ul>
          </li>
          <li>「使用方法」はこのページを開きます。</li>
          <li>「利用規約」はこのアプリの利用規約を表示します。</li>
          <li>「プライバシーポリシー」はこのアプリのプライバシーポリシーを表示します。</li>
          <li>「バージョン情報」はこのアプリのバージョン情報を表示します。</li>
        </ul>
      </Typography>
    </>
  );
};

export default UsageDialog;
