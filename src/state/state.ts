import { proxy } from "valtio";
import {
  DistinctionOfSexLabel,
  InstallationClassificationLabel,
  ArtLabel,
  AgriculturalLabel,
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
} from "../components/CourseData";

export const currentLocationDisplay = proxy<CurrentLocationDisplayType>({
  enabled: false,
});
export const lenderSetting = proxy<LenderSettingType>({
  showPanel: 0,
});

export const filteredData = proxy<FilteredDataType>({
  searchResultData: [],
});

export const filteringItems = proxy<FilteringItemsType>({
  distinctionOfSex: new Array(DistinctionOfSexLabel.sub.length).fill(false),
  installationClassification: new Array(InstallationClassificationLabel.sub.length).fill(false),
  agricultural: new Array(AgriculturalLabel.sub.length).fill(false),
  art: new Array(ArtLabel.sub.length).fill(false),
  business: new Array(BusinessLabel.sub.length).fill(false),
  educational: new Array(EducationalLabel.sub.length).fill(false),
  generalDepartment: new Array(GeneralDepartmentLabel.sub.length).fill(false),
  hightLevel: new Array(HightLevelLabel.sub.length).fill(false),
  industrial: new Array(IndustrialLabel.sub.length).fill(false),
  international: new Array(InternationalLabel.sub.length).fill(false),
  music: new Array(MusicLabel.sub.length).fill(false),
  nursing: new Array(NursingLabel.sub.length).fill(false),
  partTime: new Array(PartTimeLabel.sub.length).fill(false),
  physical: new Array(PhysicalLabel.sub.length).fill(false),
  sienese: new Array(SieneseLabel.sub.length).fill(false),
  specialSchool: new Array(SpecialSchoolLabel.sub.length).fill(false),
  welfareRelated: new Array(WelfareRelatedLabel.sub.length).fill(false),
});

export const setShowPanel = (_: React.SyntheticEvent<Element, Event>, newValue: number): void => {
  lenderSetting.showPanel = newValue;
};

export const setCurrentLocationDisplay = (bool: boolean): void => {
  currentLocationDisplay.enabled = bool;
};

export const setDistinctionOfSex = (bool: boolean[]): void => {
  filteringItems.distinctionOfSex = bool;
};

export const setInstallationClassification = (bool: boolean[]): void => {
  filteringItems.installationClassification = bool;
};

export const setAgricultural = (bool: boolean[]): void => {
  filteringItems.agricultural = bool;
};

export const setArt = (bool: boolean[]): void => {
  filteringItems.art = bool;
};

export const setBusiness = (bool: boolean[]): void => {
  filteringItems.business = bool;
};

export const setEducational = (bool: boolean[]): void => {
  filteringItems.educational = bool;
};

export const setGeneralDepartment = (bool: boolean[]): void => {
  filteringItems.generalDepartment = bool;
};

export const setHightLevel = (bool: boolean[]): void => {
  filteringItems.hightLevel = bool;
};

export const setIndustrial = (bool: boolean[]): void => {
  filteringItems.industrial = bool;
};

export const setInternational = (bool: boolean[]): void => {
  filteringItems.international = bool;
};

export const setMusic = (bool: boolean[]): void => {
  filteringItems.music = bool;
};

export const setNursing = (bool: boolean[]): void => {
  filteringItems.nursing = bool;
};

export const setPartTime = (bool: boolean[]): void => {
  filteringItems.partTime = bool;
};

export const setPhysical = (bool: boolean[]): void => {
  filteringItems.physical = bool;
};

export const setSienese = (bool: boolean[]): void => {
  filteringItems.sienese = bool;
};

export const setSpecialSchool = (bool: boolean[]): void => {
  filteringItems.specialSchool = bool;
};

export const setWelfareRelated = (bool: boolean[]): void => {
  filteringItems.welfareRelated = bool;
};

export const setSearchResultData = (arrayData: HightSchoolResultData): void => {
  filteredData.searchResultData = arrayData;
};
