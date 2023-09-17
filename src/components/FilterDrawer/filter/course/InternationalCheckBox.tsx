import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setInternational } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { InternationalLabel } from "../../../CourseData";

const InternationalCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLInternational: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.international[Props.number]}
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
    const check = new Array(snap.international.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.international.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.international[i];
        }
      }
    }
    setInternational(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.international.every((value: boolean) => {
                  return value && snap.international[0];
                })}
                indeterminate={snap.international.some((value: boolean) => {
                  return value !== snap.international[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={InternationalLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {InternationalLabel.sub.map((value, number) => (
              <FClLInternational key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default InternationalCheckBox;
