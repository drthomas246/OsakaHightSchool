import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setNursing } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { NursingLabel } from "../../../CourseData";

const NursingCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLNursing: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.nursing[Props.number]}
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
    const check = new Array(snap.nursing.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.nursing.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.nursing[i];
        }
      }
    }
    setNursing(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={NursingLabel.course}
                checked={snap.nursing.every((value: boolean) => {
                  return value && snap.nursing[0];
                })}
                indeterminate={snap.nursing.some((value: boolean) => {
                  return value !== snap.nursing[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={NursingLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {NursingLabel.sub.map((value, number) => (
              <FClLNursing key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default NursingCheckBox;
