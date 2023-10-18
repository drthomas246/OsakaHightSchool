declare module "*.png";
declare module "*.json";

interface FilterTypes {
  $path: string[];
  $val: string;
}
interface CourseFiltersTypes {
  $or: FilterTypes[];
}

interface FormControlLabelProps {
  number: number;
  label: string;
}

interface HightSchoolData {
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
}

interface CurrentLocationDisplayType {
  enabled: boolean;
}

interface LenderSettingType {
  showPanel: number;
}

interface FilteredDataType {
  searchResultData: Array<Fuse.FuseResult<HightSchoolData>>;
}

interface FilteringItemsType {
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
}

interface MarkerProps {
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
}

interface HightSchoolistItemProps {
  id: number;
  name: string;
  site: string;
  address: string;
  course: string;
  tel: string;
  toggleDownDrawer?: (open: boolean) => void;
}

interface NavigationButtonsProps {
  tel: string;
  site: string;
  address: string;
}

interface FilterDrawerProps {
  filterDrawer: boolean;
  handleFilterDrawerClose: () => void;
}

interface MenuDrawerProps {
  menuDrawer: boolean;
  handleMenuDrawerClose: () => void;
}

interface MapRecenterProps {
  lat: number;
  lng: number;
}

interface DistinctionOfSexCheckBoxProps {
  children: React.ReactNode;
}

interface HightSchoolItemProps {
  result: ReadonlyArray<Fuse.FuseResult<HightSchoolData>>;
}

interface DetailProps {
  detailId: number;
}

interface LatitudeLongitude {
  latitude: number;
  longitude: number;
}

interface SnapshotFilteringItemsType {
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
}

type HightSchoolResultData = Fuse.FuseResult<HightSchoolData>;

declare module "~/components/file.json" {
  const value: HightSchoolData[];
  export = value;
}
