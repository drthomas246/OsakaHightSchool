import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setSienese } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { SieneseLabel } from "../../../CourseData";

const SieneseCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLSienese: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.sienese[Props.number]}
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
    const check = new Array(snap.sienese.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.sienese.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.sienese[i];
        }
      }
    }
    setSienese(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={SieneseLabel.course}
                checked={snap.sienese.every((value: boolean) => {
                  return value && snap.sienese[0];
                })}
                indeterminate={snap.sienese.some((value: boolean) => {
                  return value !== snap.sienese[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={SieneseLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {SieneseLabel.sub.map((value, number) => (
              <FClLSienese key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default SieneseCheckBox;
