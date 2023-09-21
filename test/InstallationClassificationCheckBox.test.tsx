import React from "react";
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react"

import InstallationClassificationCheckBox from "../src/components/FilterDrawer/filter/InstallationClassificationCheckBox";
import DistinctionOfSexCheckBox from "../src/components/FilterDrawer/filter/DistinctionOfSexCheckBox";

describe("チェックボックスの稼働状況", () => {
  test("設置区分の確認", async ()=>{
    render(<InstallationClassificationCheckBox />);
    const selectCompoEl = screen.getByTestId("公立");
    await userEvent.click(selectCompoEl);
    expect((screen.getByLabelText("公立")as HTMLInputElement).checked).toBe(true);
    const selectCompoEl1 = screen.getByTestId("私立");
    await userEvent.click(selectCompoEl1);
    expect((screen.getByLabelText("私立")as HTMLInputElement).checked).toBe(true);
    expect((screen.getByLabelText("設置区分")as HTMLInputElement).checked).toBe(true);
  });
  test("男女校の確認", async ()=>{
    render(<DistinctionOfSexCheckBox />);
    const selectCompoEl = screen.getByTestId("男子校");
    await userEvent.click(selectCompoEl);
    expect((screen.getByLabelText("男子校")as HTMLInputElement).checked).toBe(true);
    const selectCompoEl1 = screen.getByTestId("女子校");
    await userEvent.click(selectCompoEl1);
    expect((screen.getByLabelText("女子校")as HTMLInputElement).checked).toBe(true);
    const selectCompoEl2 = screen.getByTestId("共学校");
    await userEvent.click(selectCompoEl2);
    expect((screen.getByLabelText("共学校")as HTMLInputElement).checked).toBe(true);
    expect((screen.getByLabelText("男女校")as HTMLInputElement).checked).toBe(true);
  });
});