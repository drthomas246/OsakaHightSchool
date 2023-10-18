import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setDistinctionOfSex } from "../../../state/state";
import { DistinctionOfSexLabel } from "../../CourseData";

const DistinctionOfSexCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLDistinctionOfSex: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.distinctionOfSex[Props.number]}
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
    const check = new Array(snap.distinctionOfSex.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.distinctionOfSex.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.distinctionOfSex[i];
        }
      }
    }
    setDistinctionOfSex(check);
  };
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <FormControlLabel
          control={
            <Checkbox
              data-testid={DistinctionOfSexLabel.course}
              checked={snap.distinctionOfSex.every((value: boolean) => {
                return value && snap.distinctionOfSex[0];
              })}
              indeterminate={snap.distinctionOfSex.some((value: boolean) => {
                return value !== snap.distinctionOfSex[0];
              })}
              onChange={(event) => {
                changeCourseCheck(event, -1);
              }}
            />
          }
          label={DistinctionOfSexLabel.course}
        />
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {DistinctionOfSexLabel.sub.map((value, number) => (
            <FClLDistinctionOfSex key={value} number={number} label={value} />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default DistinctionOfSexCheckBox;
