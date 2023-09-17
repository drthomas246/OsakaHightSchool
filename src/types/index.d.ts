declare module "*.png";
declare module "*.json";

type FormControlLabelProps = {
  number: number;
  label: string;
};

type HightSchoolData = {
  id: number;
  name: string;
  ruby: string;
  site: string;
  address: string;
  label: string;
  education: string;
  course: string;
  tel: string;
  lat: number;
  lng: number;
  near: string;
};

type CurrentLocationDisplayType = {
  enabled: boolean;
};

type LenderSettingType = {
  showPanel: number;
};

type FilteredDataType = {
  searchResultData: Array<Fuse.FuseResult<HightSchoolData>>;
};

type FilteringItemsType = {
  distinctionOfSex: boolean[];
  installationClassification: boolean[];
  agricultural: boolean[];
  art: boolean[];
  business: boolean[];
  educational: boolean[];
  generalDepartment: boolean[];
  hightLevel: boolean[];
  industrial: boolean[];
  international: boolean[];
  music: boolean[];
  nursing: boolean[];
  partTime: boolean[];
  physical: boolean[];
  sienese: boolean[];
  specialSchool: boolean[];
  welfareRelated: boolean[];
};

type MarkerProps = {
  id?: number;
  name: string;
  site?: string;
  address?: string;
  label?: string;
  course?: string;
  tel?: string;
  color: string;
  position: import("leaflet").LatLng;
  location?: boolean;
};

type HightSchoolistItemProps = {
  id: number;
  name: string;
  site: string;
  address: string;
  course: string;
  tel: string;
  toggleDownDrawer?: (open: boolean) => void;
};

type NavigationButtonsProps = {
  tel: string;
  site: string;
  address: string;
};

type FilterDrawerProps = {
  filterDrawer: boolean;
  handleFilterDrawerClose: () => void;
};

type MenuDrawerProps = {
  menuDrawer: boolean;
  handleMenuDrawerClose: () => void;
};

type MapRecenterProps = {
  lat: number;
  lng: number;
};

type DistinctionOfSexCheckBoxProps = {
  children: React.ReactNode;
};

type HightSchoolItemProps = {
  result: ReadonlyArray<Fuse.FuseResult<HightSchoolData>>;
};

type DetailProps = {
  detailId: number;
};

type LatitudeLongitude = {
  latitude: number;
  longitude: number;
};

type SnapshotFilteringItemsType = {
  readonly distinctionOfSex: readonly boolean[];
  readonly installationClassification: readonly boolean[];
  readonly agricultural: readonly boolean[];
  readonly art: readonly boolean[];
  readonly business: readonly boolean[];
  readonly educational: readonly boolean[];
  readonly generalDepartment: readonly boolean[];
  readonly hightLevel: readonly boolean[];
  readonly industrial: readonly boolean[];
  readonly international: readonly boolean[];
  readonly music: readonly boolean[];
  readonly nursing: readonly boolean[];
  readonly partTime: readonly boolean[];
  readonly physical: readonly boolean[];
  readonly sienese: readonly boolean[];
  readonly specialSchool: readonly boolean[];
  readonly welfareRelated: readonly boolean[];
};

type HightSchoolResultData = Fuse.FuseResult<HightSchoolData>;

declare module "~/components/file.json" {
  const value: HightSchoolData[];
  export = value;
}
