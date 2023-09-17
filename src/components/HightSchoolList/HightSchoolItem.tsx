import React, { memo } from "react";

import HightSchoolListItem from "../otherModule/HightSchoolListItem";

const HightSchoolItem: React.FC<HightSchoolItemProps> = memo((Props) => {
  return (
    <>
      {Props.result.map((dataItem: HightSchoolResultData) => (
        <HightSchoolListItem
          id={dataItem.item.id}
          name={dataItem.item.name}
          site={dataItem.item.site}
          address={dataItem.item.address}
          course={dataItem.item.course}
          tel={dataItem.item.tel}
          key={dataItem.item.id}
        />
      ))}
    </>
  );
});

HightSchoolItem.displayName = "LoopItem";
export default HightSchoolItem;
