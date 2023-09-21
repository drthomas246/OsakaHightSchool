import React from "react";
import { type Meta, type Story } from "@storybook/react";
import Detail from "../HightSchoolDetail/index";

export default {
  title: "本体/個別ページ",
  component: Detail,
} as Meta;

export const Primary: Story<DetailProps> = (args) => <Detail {...args} />;
Primary.args = {
  detailId: 1,
};
