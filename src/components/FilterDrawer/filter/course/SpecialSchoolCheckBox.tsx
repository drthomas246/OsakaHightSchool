import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setSpecialSchool } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { SpecialSchoolLabel } from "../../../CourseData";

const SpecialSchoolCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLSpecialSchool: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.specialSchool[Props.number]}
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
    const check = new Array(snap.specialSchool.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.specialSchool.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.specialSchool[i];
        }
      }
    }
    setSpecialSchool(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={SpecialSchoolLabel.course}
                checked={snap.specialSchool.every((value: boolean) => {
                  return value && snap.specialSchool[0];
                })}
                indeterminate={snap.specialSchool.some((value: boolean) => {
                  return value !== snap.specialSchool[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={SpecialSchoolLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {SpecialSchoolLabel.sub.map((value, number) => (
              <FClLSpecialSchool key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default SpecialSchoolCheckBox;
