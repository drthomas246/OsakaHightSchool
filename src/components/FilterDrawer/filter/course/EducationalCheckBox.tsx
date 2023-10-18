import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setEducational } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { EducationalLabel } from "../../../CourseData";

const EducationalCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLEducational: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.educational[Props.number]}
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
    const check = new Array(snap.educational.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.educational.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.educational[i];
        }
      }
    }
    setEducational(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={EducationalLabel.course}
                checked={snap.educational.every((value: boolean) => {
                  return value && snap.educational[0];
                })}
                indeterminate={snap.educational.some((value: boolean) => {
                  return value !== snap.educational[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={EducationalLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {EducationalLabel.sub.map((value, number) => (
              <FClLEducational key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default EducationalCheckBox;
