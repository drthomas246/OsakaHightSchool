import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setMusic } from "../../../../state/state";
import { AccordionDetailsWrapper } from "../../../otherModule/styled";
import { MusicLabel } from "../../../CourseData";

const MusicCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLMusic: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.music[Props.number]}
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
    const check = new Array(snap.music.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.music.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.music[i];
        }
      }
    }
    setMusic(check);
  };
  return (
    <AccordionDetailsWrapper>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={MusicLabel.course}
                checked={snap.music.every((value: boolean) => {
                  return value && snap.music[0];
                })}
                indeterminate={snap.music.some((value: boolean) => {
                  return value !== snap.music[0];
                })}
                onChange={(event) => {
                  changeCourseCheck(event, -1);
                }}
              />
            }
            label={MusicLabel.course}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {MusicLabel.sub.map((value, number) => (
              <FClLMusic key={value} number={number} label={value} />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </AccordionDetailsWrapper>
  );
};

export default MusicCheckBox;
