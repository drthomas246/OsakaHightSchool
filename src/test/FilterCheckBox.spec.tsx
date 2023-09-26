import { test } from "@playwright/experimental-ct-react";
import InstallationClassificationCheckBox from "../components/FilterDrawer/filter/InstallationClassificationCheckBox";
import DistinctionOfSexCheckBox from "../components/FilterDrawer/filter/DistinctionOfSexCheckBox";

test("設置区分の確認", async ({ mount }) => {
  const component = await mount(<InstallationClassificationCheckBox />);
  await component.locator(".MuiAccordionSummary-root").click();
  await component.getByTestId("公立").click();
  await component.getByTestId("私立").click();
  await component.getByLabel("設置区分").setChecked(true);
});
test("男女校の確認", async ({ mount }) => {
  const component = await mount(<DistinctionOfSexCheckBox />);
  await component.locator(".MuiAccordionSummary-root").click();
  await component.getByTestId("男子校").click();
  await component.getByTestId("女子校").click();
  await component.getByTestId("共学校").click();
  await component.getByLabel("男女校").setChecked(true);
});
