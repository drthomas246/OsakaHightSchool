import React from "react";
import { type Story } from "@storybook/react";
import Detail from "../components/HightSchoolDetail/index";

export default {
  title: "本体/個別ページ",
  component: Detail,
};

export const Primary: Story<DetailProps> = (args) => <Detail {...args} />;
Primary.args = {
  detailId: 1,
};
