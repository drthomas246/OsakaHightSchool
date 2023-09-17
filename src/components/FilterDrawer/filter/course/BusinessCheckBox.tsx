import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setBusiness } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { BusinessLabel } from "../../../CourseData";

const BusinessCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLBusiness: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.business[Props.number]}
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
    const check = new Array(snap.business.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.business.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.business[i];
        }
      }
    }
    setBusiness(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.business.every((value: boolean) => {
                  return value && snap.business[0];
                })}
                indeterminate={snap.business.some((value: boolean) => {
                  return value !== snap.business[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={BusinessLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {BusinessLabel.sub.map((value, number) => (
              <FClLBusiness key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default BusinessCheckBox;
