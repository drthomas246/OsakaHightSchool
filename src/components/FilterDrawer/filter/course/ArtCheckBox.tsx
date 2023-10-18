import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setArt } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { ArtLabel } from "../../../CourseData";

const ArtCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLArt: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.art[Props.number]}
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
    const check = new Array(snap.art.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.art.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.art[i];
        }
      }
    }
    setArt(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={ArtLabel.course}
                checked={snap.art.every((value: boolean) => {
                  return value && snap.art[0];
                })}
                indeterminate={snap.art.some((value: boolean) => {
                  return value !== snap.art[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={ArtLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {ArtLabel.sub.map((value, number) => (
              <FClLArt key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default ArtCheckBox;
