import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setPartTime } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { PartTimeLabel } from "../../../CourseData";

const PartTimeCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLPartTime: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.partTime[Props.number]}
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
    const check = new Array(snap.partTime.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.partTime.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.partTime[i];
        }
      }
    }
    setPartTime(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={PartTimeLabel.course}
                checked={snap.partTime.every((value: boolean) => {
                  return value && snap.partTime[0];
                })}
                indeterminate={snap.partTime.some((value: boolean) => {
                  return value !== snap.partTime[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={PartTimeLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {PartTimeLabel.sub.map((value, number) => (
              <FClLPartTime key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default PartTimeCheckBox;
