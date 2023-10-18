import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSnapshot } from "valtio";

import {
  filteringItems,
  setAgricultural,
  setArt,
  setBusiness,
  setEducational,
  setGeneralDepartment,
  setHightLevel,
  setIndustrial,
  setInternational,
  setMusic,
  setNursing,
  setPartTime,
  setPhysical,
  setSienese,
  setSpecialSchool,
  setWelfareRelated,
} from "../../../state/state";

const checkBoolean = (bool: boolean): boolean => {
  return bool && true;
};

const CourseOfStudyCheckBox: React.FC<DistinctionOfSexCheckBoxProps> = (props) => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const changeCourseCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const agriculturalCheck = new Array(snap.agricultural.length).fill(event.target.checked);
    setAgricultural(agriculturalCheck);
    const artCheck = new Array(snap.art.length).fill(event.target.checked);
    setArt(artCheck);
    const businessCheck = new Array(snap.business.length).fill(event.target.checked);
    setBusiness(businessCheck);
    const educationalCheck = new Array(snap.educational.length).fill(event.target.checked);
    setEducational(educationalCheck);
    const generalDepartmentCheck = new Array(snap.generalDepartment.length).fill(event.target.checked);
    setGeneralDepartment(generalDepartmentCheck);
    const hightLevelCheck = new Array(snap.hightLevel.length).fill(event.target.checked);
    setHightLevel(hightLevelCheck);
    const industrialCheck = new Array(snap.industrial.length).fill(event.target.checked);
    setIndustrial(industrialCheck);
    const internationalCheck = new Array(snap.international.length).fill(event.target.checked);
    setInternational(internationalCheck);
    const musicCheck = new Array(snap.music.length).fill(event.target.checked);
    setMusic(musicCheck);
    const nursingCheck = new Array(snap.nursing.length).fill(event.target.checked);
    setNursing(nursingCheck);
    const partTimeCheck = new Array(snap.partTime.length).fill(event.target.checked);
    setPartTime(partTimeCheck);
    const physicalCheck = new Array(snap.physical.length).fill(event.target.checked);
    setPhysical(physicalCheck);
    const sieneseCheck = new Array(snap.sienese.length).fill(event.target.checked);
    setSienese(sieneseCheck);
    const specialSchoolCheck = new Array(snap.specialSchool.length).fill(event.target.checked);
    setSpecialSchool(specialSchoolCheck);
    const welfareRelatedCheck = new Array(snap.welfareRelated.length).fill(event.target.checked);
    setWelfareRelated(welfareRelatedCheck);
  };
  const CourseOfStudyCheckChecked = [
    snap.agricultural.every(checkBoolean),
    snap.art.every(checkBoolean),
    snap.business.every(checkBoolean),
    snap.educational.every(checkBoolean),
    snap.generalDepartment.every(checkBoolean),
    snap.hightLevel.every(checkBoolean),
    snap.industrial.every(checkBoolean),
    snap.international.every(checkBoolean),
    snap.music.every(checkBoolean),
    snap.nursing.every(checkBoolean),
    snap.partTime.every(checkBoolean),
    snap.physical.every(checkBoolean),
    snap.sienese.every(checkBoolean),
    snap.specialSchool.every(checkBoolean),
    snap.welfareRelated.every(checkBoolean),
  ].every(checkBoolean);

  const CourseOfStudyCheckIndeterminate = [
    [
      snap.agricultural.some(checkBoolean),
      snap.art.some(checkBoolean),
      snap.business.some(checkBoolean),
      snap.educational.some(checkBoolean),
      snap.generalDepartment.some(checkBoolean),
      snap.hightLevel.some(checkBoolean),
      snap.industrial.some(checkBoolean),
      snap.international.some(checkBoolean),
      snap.music.some(checkBoolean),
      snap.nursing.some(checkBoolean),
      snap.partTime.some(checkBoolean),
      snap.physical.some(checkBoolean),
      snap.sienese.some(checkBoolean),
      snap.specialSchool.some(checkBoolean),
      snap.welfareRelated.some(checkBoolean),
    ].some(checkBoolean),
    !CourseOfStudyCheckChecked,
  ].every(checkBoolean);
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <FormControlLabel
          control={
            <Checkbox
              indeterminate={CourseOfStudyCheckIndeterminate}
              checked={CourseOfStudyCheckChecked}
              onChange={(event) => {
                changeCourseCheck(event);
              }}
            />
          }
          label="学科"
        />
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

export default CourseOfStudyCheckBox;
