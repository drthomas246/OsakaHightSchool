import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setAgricultural } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { AgriculturalLabel } from "../../../CourseData";

const AgriculturalCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLAgricultural: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.agricultural[Props.number]}
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
    const check = new Array(snap.agricultural.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.agricultural.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.agricultural[i];
        }
      }
    }
    setAgricultural(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={AgriculturalLabel.course}
                checked={snap.agricultural.every((value: boolean) => {
                  return value && snap.agricultural[0];
                })}
                indeterminate={snap.agricultural.some((value: boolean) => {
                  return value !== snap.agricultural[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={AgriculturalLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {AgriculturalLabel.sub.map((value, number) => (
              <FClLAgricultural key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default AgriculturalCheckBox;
