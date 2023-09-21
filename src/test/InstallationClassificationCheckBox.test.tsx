import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import InstallationClassificationCheckBox from "../components/FilterDrawer/filter/InstallationClassificationCheckBox";
import DistinctionOfSexCheckBox from "../components/FilterDrawer/filter/DistinctionOfSexCheckBox";

describe("チェックボックスの稼働状況", () => {
  test("設置区分の確認", async () => {
    render(<InstallationClassificationCheckBox />);
    const labelNo1 = screen.getByTestId("公立");
    await userEvent.click(labelNo1);
    const inputNo1 = screen.getByLabelText("公立") as HTMLInputElement;
    expect(inputNo1.checked).toBe(true);
    const labelNo2 = screen.getByTestId("私立");
    await userEvent.click(labelNo2);
    const inputNo2 = screen.getByLabelText("私立") as HTMLInputElement;
    expect(inputNo2.checked).toBe(true);
    const inputNo0 = screen.getByLabelText("設置区分") as HTMLInputElement;
    expect(inputNo0.checked).toBe(true);
  });
  test("男女校の確認", async () => {
    render(<DistinctionOfSexCheckBox />);
    const labelNo1 = screen.getByTestId("男子校");
    await userEvent.click(labelNo1);
    const inputNo1 = screen.getByLabelText("男子校") as HTMLInputElement;
    expect(inputNo1.checked).toBe(true);
    const labelNo2 = screen.getByTestId("女子校");
    await userEvent.click(labelNo2);
    const inputNo2 = screen.getByLabelText("女子校") as HTMLInputElement;
    expect(inputNo2.checked).toBe(true);
    const labelNo3 = screen.getByTestId("共学校");
    await userEvent.click(labelNo3);
    const inputNo3 = screen.getByLabelText("共学校") as HTMLInputElement;
    expect(inputNo3.checked).toBe(true);
    const inputNo0 = screen.getByLabelText("男女校") as HTMLInputElement;
    expect(inputNo0.checked).toBe(true);
  });
});
