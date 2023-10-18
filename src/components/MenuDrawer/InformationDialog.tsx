import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const InformationDialog: React.FC = () => {
  return (
    <>
      <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
        大阪周辺高校情報
      </DialogTitle>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 10px", textAlign: "center" }}>
        System Version 1.0.1 (Data Version 2023/08/10)
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        掲載情報は上記Data Version記載時点のものです。
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        掲載情報の間違いを発見された場合は、管理者までご連絡いただけるとありがたいです。
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 20px 20px" }}>
        連絡先：
        <Link href="mailto:yoshihiro@yamahara.email" underline="always">
          yoshihiro@yamahara.email (山原 喜寛)
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ margin: "10px 10px 10px 10px", textAlign: "right" }}>
        ©Yamahara Yoshihiro 2023
      </Typography>
    </>
  );
};

export default InformationDialog;
