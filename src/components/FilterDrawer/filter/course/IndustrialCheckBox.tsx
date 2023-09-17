import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setIndustrial } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { IndustrialLabel } from "../../../CourseData";

const IndustrialCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLIndustrial: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.industrial[Props.number]}
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
    const check = new Array(snap.industrial.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.industrial.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.industrial[i];
        }
      }
    }
    setIndustrial(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.industrial.every((value: boolean) => {
                  return value && snap.industrial[0];
                })}
                indeterminate={snap.industrial.some((value: boolean) => {
                  return value !== snap.industrial[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={IndustrialLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {IndustrialLabel.sub.map((value, number) => (
              <FClLIndustrial key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default IndustrialCheckBox;
