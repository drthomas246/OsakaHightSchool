import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useSnapshot } from "valtio";

import HightLevelCheckBox from "./filter/course/HightLevelCheckBox";
import GeneralDepartmentCheckBox from "./filter/course/GeneralDepartmentCheckBox";
import EducationalCheckBox from "./filter/course/EducationalCheckBox";
import BusinessCheckBox from "./filter/course/BusinessCheckBox";
import InternationalCheckBox from "./filter/course/InternationalCheckBox";
import IndustrialCheckBox from "./filter/course/IndustrialCheckBox";
import MusicCheckBox from "./filter/course/MusicCheckBox";
import ArtCheckBox from "./filter/course/ArtCheckBox";
import SieneseCheckBox from "./filter/course/SieneseCheckBox";
import WelfareRelatedCheckBox from "./filter/course/WelfareRelatedCheckBox";
import PhysicalCheckBox from "./filter/course/PhysicalCheckBox";
import NursingCheckBox from "./filter/course/NursingCheckBox";
import AgriculturalCheckBox from "./filter/course/AgriculturalCheckBox";
import PartTimeCheckBox from "./filter/course/PartTimeCheckBox";
import SpecialSchoolCheckBox from "./filter/course/SpecialSchoolCheckBox";
import { DrawerHeader } from "../otherModule/styled";
import InstallationClassificationCheckBox from "./filter/InstallationClassificationCheckBox";
import DistinctionOfSexCheckBox from "./filter/DistinctionOfSexCheckBox";
import CourseOfStudyCheckBox from "./filter/CourseOfStudyCheckBox";
import Fuse from "fuse.js";

import Data from "../file.json";
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
  setDistinctionOfSex,
  setInstallationClassification,
  setSearchResultData,
} from "../../state/state";
import {
  DistinctionOfSexLabel,
  InstallationClassificationLabel,
  AgriculturalLabel,
  ArtLabel,
  BusinessLabel,
  EducationalLabel,
  GeneralDepartmentLabel,
  HightLevelLabel,
  IndustrialLabel,
  InternationalLabel,
  MusicLabel,
  NursingLabel,
  PartTimeLabel,
  PhysicalLabel,
  SieneseLabel,
  SpecialSchoolLabel,
  WelfareRelatedLabel,
} from "../CourseData";

const CourseFilter = (value: string): FilterTypes[] => {
  return [
    {
      $path: ["course1"],
      $val: value,
    },
    {
      $path: ["course2"],
      $val: value,
    },
    {
      $path: ["course3"],
      $val: value,
    },
    {
      $path: ["course4"],
      $val: value,
    },
    {
      $path: ["course5"],
      $val: value,
    },
    {
      $path: ["course6"],
      $val: value,
    },
  ];
};

const checkBoolean = (bool: boolean): boolean => {
  return !bool;
};

const CourseOfStudyCheckChecked = (values: SnapshotFilteringItemsType): boolean =>
  [
    values.agricultural.every(checkBoolean),
    values.art.every(checkBoolean),
    values.business.every(checkBoolean),
    values.educational.every(checkBoolean),
    values.generalDepartment.every(checkBoolean),
    values.hightLevel.every(checkBoolean),
    values.industrial.every(checkBoolean),
    values.international.every(checkBoolean),
    values.music.every(checkBoolean),
    values.nursing.every(checkBoolean),
    values.partTime.every(checkBoolean),
    values.physical.every(checkBoolean),
    values.sienese.every(checkBoolean),
    values.specialSchool.every(checkBoolean),
    values.welfareRelated.every(checkBoolean),
  ].every((bool: boolean): boolean => {
    return bool;
  });

const CourseFilters = (values: SnapshotFilteringItemsType): CourseFiltersTypes[] => {
  const value: CourseFiltersTypes[] = [];
  if (CourseOfStudyCheckChecked(values)) {
    for (let i = 0; i < AgriculturalLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(AgriculturalLabel.sub[i]) });
    }
    for (let i = 0; i < ArtLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(ArtLabel.sub[i]) });
    }
    for (let i = 0; i < BusinessLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(BusinessLabel.sub[i]) });
    }
    for (let i = 0; i < EducationalLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(EducationalLabel.sub[i]) });
    }
    for (let i = 0; i < GeneralDepartmentLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(GeneralDepartmentLabel.sub[i]) });
    }
    for (let i = 0; i < HightLevelLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(HightLevelLabel.sub[i]) });
    }
    for (let i = 0; i < IndustrialLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(IndustrialLabel.sub[i]) });
    }
    for (let i = 0; i < InternationalLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(InternationalLabel.sub[i]) });
    }
    for (let i = 0; i < MusicLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(MusicLabel.sub[i]) });
    }
    for (let i = 0; i < NursingLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(NursingLabel.sub[i]) });
    }
    for (let i = 0; i < PartTimeLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(PartTimeLabel.sub[i]) });
    }
    for (let i = 0; i < PhysicalLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(PhysicalLabel.sub[i]) });
    }
    for (let i = 0; i < SieneseLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(SieneseLabel.sub[i]) });
    }
    for (let i = 0; i < SpecialSchoolLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(SpecialSchoolLabel.sub[i]) });
    }
    for (let i = 0; i < WelfareRelatedLabel.sub.length; i += 1) {
      value.push({ $or: CourseFilter(WelfareRelatedLabel.sub[i]) });
    }
    return value;
  }
  values.agricultural.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(AgriculturalLabel.sub[index]) });
    }
  });
  values.art.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(ArtLabel.sub[index]) });
    }
  });
  values.business.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(BusinessLabel.sub[index]) });
    }
  });
  values.educational.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(EducationalLabel.sub[index]) });
    }
  });
  values.generalDepartment.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(GeneralDepartmentLabel.sub[index]) });
    }
  });
  values.hightLevel.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(HightLevelLabel.sub[index]) });
    }
  });
  values.industrial.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(IndustrialLabel.sub[index]) });
    }
  });
  values.international.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(InternationalLabel.sub[index]) });
    }
  });
  values.music.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(MusicLabel.sub[index]) });
    }
  });
  values.nursing.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(NursingLabel.sub[index]) });
    }
  });
  values.partTime.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(PartTimeLabel.sub[index]) });
    }
  });
  values.physical.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(PhysicalLabel.sub[index]) });
    }
  });
  values.sienese.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(SieneseLabel.sub[index]) });
    }
  });
  values.specialSchool.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(SpecialSchoolLabel.sub[index]) });
    }
  });
  values.welfareRelated.forEach((element, index) => {
    if (element) {
      value.push({ $or: CourseFilter(WelfareRelatedLabel.sub[index]) });
    }
  });
  return value;
};
const EducationFilters = (values: readonly boolean[]): FilterTypes[] => {
  const value: FilterTypes[] = [];
  if (values.every(checkBoolean)) {
    for (let i = 0; i < DistinctionOfSexLabel.sub.length; i += 1) {
      value.push({ $path: ["education"], $val: DistinctionOfSexLabel.sub[i] });
    }
    return value;
  }
  values.forEach((element, index): void => {
    if (element) {
      value.push({ $path: ["education"], $val: DistinctionOfSexLabel.sub[index] });
    }
  });
  return value;
};
const LabelFilters = (values: readonly boolean[]): FilterTypes[] => {
  const value: FilterTypes[] = [];
  if (values.every(checkBoolean)) {
    for (let i = 0; i < InstallationClassificationLabel.sub.length; i += 1) {
      value.push({ $path: ["label"], $val: InstallationClassificationLabel.sub[i] });
    }
    return value;
  }
  values.forEach((element, index) => {
    if (element) {
      value.push({ $path: ["label"], $val: InstallationClassificationLabel.sub[index] });
    }
  });
  return value;
};

const FilterDrawer: React.FC<FilterDrawerProps> = (Props) => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const allClearForCheckBox = (): void => {
    const agriculturalCheck = new Array(snap.agricultural.length).fill(false);
    setAgricultural(agriculturalCheck);
    const artCheck = new Array(snap.art.length).fill(false);
    setArt(artCheck);
    const businessCheck = new Array(snap.business.length).fill(false);
    setBusiness(businessCheck);
    const educationalCheck = new Array(snap.educational.length).fill(false);
    setEducational(educationalCheck);
    const generalDepartmentCheck = new Array(snap.generalDepartment.length).fill(false);
    setGeneralDepartment(generalDepartmentCheck);
    const hightLevelCheck = new Array(snap.hightLevel.length).fill(false);
    setHightLevel(hightLevelCheck);
    const industrialCheck = new Array(snap.industrial.length).fill(false);
    setIndustrial(industrialCheck);
    const internationalCheck = new Array(snap.international.length).fill(false);
    setInternational(internationalCheck);
    const musicCheck = new Array(snap.music.length).fill(false);
    setMusic(musicCheck);
    const nursingCheck = new Array(snap.nursing.length).fill(false);
    setNursing(nursingCheck);
    const partTimeCheck = new Array(snap.partTime.length).fill(false);
    setPartTime(partTimeCheck);
    const physicalCheck = new Array(snap.physical.length).fill(false);
    setPhysical(physicalCheck);
    const sieneseCheck = new Array(snap.sienese.length).fill(false);
    setSienese(sieneseCheck);
    const specialSchoolCheck = new Array(snap.specialSchool.length).fill(false);
    setSpecialSchool(specialSchoolCheck);
    const welfareRelatedCheck = new Array(snap.welfareRelated.length).fill(false);
    setWelfareRelated(welfareRelatedCheck);
    const distinctionOfSex = new Array(snap.distinctionOfSex.length).fill(false);
    setDistinctionOfSex(distinctionOfSex);
    const installationClassification = new Array(snap.installationClassification.length).fill(false);
    setInstallationClassification(installationClassification);
  };
  const options = {
    includeScore: true,
    useExtendedSearch: true,
    distance: 0,
    threshold: -0.1, // 完全一致させるためマイナス値
    sortFn: (a: Fuse.FuseSortFunctionArg, b: Fuse.FuseSortFunctionArg) => a.idx - b.idx,
    keys: ["label", "education", "course1", "course2", "course3", "course4", "course5", "course6"],
  };
  const fuse = new Fuse<HightSchoolData>(Data, options);
  useEffect(() => {
    const query = {
      $and: [
        {
          $or: CourseFilters(snap),
        },
        {
          $or: EducationFilters(snap.distinctionOfSex),
        },
        {
          $or: LabelFilters(snap.installationClassification),
        },
      ],
    };
    const result = fuse.search(query);
    setSearchResultData(result);
  }, [snap]);
  return (
    <Drawer
      sx={{
        width: 350,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 350,
        },
      }}
      anchor="right"
      open={Props.filterDrawer}
      onClose={Props.handleFilterDrawerClose}
    >
      <DrawerHeader>
        <Button variant="contained" onClick={allClearForCheckBox}>
          すべてクリア
        </Button>
      </DrawerHeader>
      <InstallationClassificationCheckBox />
      <DistinctionOfSexCheckBox />
      <CourseOfStudyCheckBox>
        <HightLevelCheckBox />
        <GeneralDepartmentCheckBox />
        <EducationalCheckBox />
        <BusinessCheckBox />
        <InternationalCheckBox />
        <IndustrialCheckBox />
        <MusicCheckBox />
        <ArtCheckBox />
        <SieneseCheckBox />
        <WelfareRelatedCheckBox />
        <PhysicalCheckBox />
        <NursingCheckBox />
        <AgriculturalCheckBox />
        <PartTimeCheckBox />
        <SpecialSchoolCheckBox />
      </CourseOfStudyCheckBox>
    </Drawer>
  );
};

export default FilterDrawer;
