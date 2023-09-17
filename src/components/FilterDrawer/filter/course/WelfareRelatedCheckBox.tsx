import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setWelfareRelated } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { WelfareRelatedLabel } from "../../../CourseData";

const WelfareRelatedCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLWelfareRelated: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.welfareRelated[Props.number]}
            onChange={(event) => {
              changeCourseCheck(event, Props.number);
            }}
          />
        }
        label={Props.label}
      />
    );
  };
  const changeCourseCheck = (event: React.ChangeEvent<HTMLInputElement>, CourseId: number): void => {
    const check = new Array(snap.welfareRelated.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.welfareRelated.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.welfareRelated[i];
        }
      }
    }
    setWelfareRelated(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.welfareRelated.every((value: boolean) => {
                  return value && snap.welfareRelated[0];
                })}
                indeterminate={snap.welfareRelated.some((value: boolean) => {
                  return value !== snap.welfareRelated[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={WelfareRelatedLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {WelfareRelatedLabel.sub.map((value, number) => (
              <FClLWelfareRelated key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default WelfareRelatedCheckBox;
