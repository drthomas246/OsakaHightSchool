import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setPhysical } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { PhysicalLabel } from "../../../CourseData";

const PhysicalCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLPhysical: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.physical[Props.number]}
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
    const check = new Array(snap.physical.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.physical.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.physical[i];
        }
      }
    }
    setPhysical(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.physical.every((value: boolean) => {
                  return value && snap.physical[0];
                })}
                indeterminate={snap.physical.some((value: boolean) => {
                  return value !== snap.physical[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={PhysicalLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {PhysicalLabel.sub.map((value, number) => (
              <FClLPhysical key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default PhysicalCheckBox;
