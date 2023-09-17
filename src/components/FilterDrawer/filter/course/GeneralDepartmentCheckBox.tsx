import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setGeneralDepartment } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { GeneralDepartmentLabel } from "../../../CourseData";

const GeneralDepartmentCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLGeneralDepartment: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.generalDepartment[Props.number]}
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
    const check = new Array(snap.generalDepartment.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.generalDepartment.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.generalDepartment[i];
        }
      }
    }
    setGeneralDepartment(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.generalDepartment.every((value: boolean) => {
                  return value && snap.generalDepartment[0];
                })}
                indeterminate={snap.generalDepartment.some((value: boolean) => {
                  return value !== snap.generalDepartment[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={GeneralDepartmentLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {GeneralDepartmentLabel.sub.map((value, number) => (
              <FClLGeneralDepartment key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default GeneralDepartmentCheckBox;
