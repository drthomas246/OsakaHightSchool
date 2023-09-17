import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setHightLevel } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { HightLevelLabel } from "../../../CourseData";

const HightLevelCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLHightLevel: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={snap.hightLevel[Props.number]}
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
    const check = new Array(snap.hightLevel.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.hightLevel.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.hightLevel[i];
        }
      }
    }
    setHightLevel(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                checked={snap.hightLevel.every((value: boolean) => {
                  return value && snap.hightLevel[0];
                })}
                indeterminate={snap.hightLevel.some((value: boolean) => {
                  return value !== snap.hightLevel[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={HightLevelLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {HightLevelLabel.sub.map((value, number) => (
              <FClLHightLevel key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default HightLevelCheckBox;
