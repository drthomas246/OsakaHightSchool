import React from "react";
import { test } from "@playwright/experimental-ct-react";
import InstallationClassificationCheckBox from "../components/FilterDrawer/filter/InstallationClassificationCheckBox";
import DistinctionOfSexCheckBox from "../components/FilterDrawer/filter/DistinctionOfSexCheckBox";
import ArtCheckBox from "../components/FilterDrawer/filter/course/ArtCheckBox";
import AgriculturalCheckBox from "../components/FilterDrawer/filter/course/AgriculturalCheckBox";
import BusinessCheckBox from "../components/FilterDrawer/filter/course/BusinessCheckBox";
import EducationalCheckBox from "../components/FilterDrawer/filter/course/EducationalCheckBox";
import GeneralDepartmentCheckBox from "../components/FilterDrawer/filter/course/GeneralDepartmentCheckBox";
import HightLevelCheckBox from "../components/FilterDrawer/filter/course/HightLevelCheckBox";
import IndustrialCheckBox from "../components/FilterDrawer/filter/course/IndustrialCheckBox";
import InternationalCheckBox from "../components/FilterDrawer/filter/course/InternationalCheckBox";
import MusicCheckBox from "../components/FilterDrawer/filter/course/MusicCheckBox";
import NursingCheckBox from "../components/FilterDrawer/filter/course/NursingCheckBox";
import PartTimeCheckBox from "../components/FilterDrawer/filter/course/PartTimeCheckBox";
import PhysicalCheckBox from "../components/FilterDrawer/filter/course/PhysicalCheckBox";
import SieneseCheckBox from "../components/FilterDrawer/filter/course/SieneseCheckBox";
import SpecialSchoolCheckBox from "../components/FilterDrawer/filter/course/SpecialSchoolCheckBox";
import WelfareRelatedCheckBox from "../components/FilterDrawer/filter/course/WelfareRelatedCheckBox";

import { AllLabel } from "../components/CourseData";

const Element =[
  <DistinctionOfSexCheckBox key="0"/>,
  <InstallationClassificationCheckBox key="1"/>,
  <ArtCheckBox key="2"/>,
  <AgriculturalCheckBox key="3"/>,
  <BusinessCheckBox key="4"/>,
  <EducationalCheckBox key="5"/>,
  <GeneralDepartmentCheckBox key="6"/>,
  <HightLevelCheckBox key="7"/>,
  <IndustrialCheckBox key="8"/>,
  <InternationalCheckBox key="9"/>,
  <MusicCheckBox key="10"/>,
  <NursingCheckBox key="11"/>,
  <PartTimeCheckBox key="12"/>,
  <PhysicalCheckBox key="13"/>,
  <SieneseCheckBox key="14"/>,
  <SpecialSchoolCheckBox key="15"/>,
  <WelfareRelatedCheckBox key="16"/>
]

AllLabel.forEach((element, num) => {
  test(element.course, async ({ mount }) => {
    const component = await mount(Element[num]);
    await component.locator(".MuiAccordionSummary-root").click();
    for (let i = 0; i <element.sub.length; i += 1) {
      await component.getByTestId(element.sub[i]).click();
    }
    const reg = new RegExp("^" + element.course + "$")
    await component.getByLabel(reg).setChecked(true);
  });
});
