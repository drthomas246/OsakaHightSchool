import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnapshot } from "valtio";

import { filteringItems, setInstallationClassification } from "../../../state/state";
import { InstallationClassificationLabel } from "../../CourseData";

const InstallationClassificationCheckBox: React.FC = () => {
  const snap = useSnapshot<FilteringItemsType>(filteringItems);
  const FClLInstallationClassification: React.FC<FormControlLabelProps> = (Props) => {
    return (
      <FormControlLabel
        data-testid={Props.label}
        control={
          <Checkbox
            checked={snap.installationClassification[Props.number]}
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
    const check = new Array(snap.installationClassification.length).fill(event.target.checked);
    if (CourseId !== -1) {
      for (let i = 0; i < snap.installationClassification.length; i++) {
        if (i !== CourseId) {
          check[i] = snap.installationClassification[i];
        }
      }
    }
    setInstallationClassification(check);
  };
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <FormControlLabel
          control={
            <Checkbox
              data-testid={InstallationClassificationLabel.course}
              checked={snap.installationClassification.every((value: boolean) => {
                return value && snap.installationClassification[0];
              })}
              indeterminate={snap.installationClassification.some((value: boolean) => {
                return value !== snap.installationClassification[0];
              })}
              onChange={(event) => {
                changeCourseCheck(event, -1);
              }}
            />
          }
          label={InstallationClassificationLabel.course}
        />
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {InstallationClassificationLabel.sub.map((value, number) => (
            <FClLInstallationClassification key={value} number={number} label={value} />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default InstallationClassificationCheckBox;
