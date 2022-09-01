import { Grid, TextField } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";

interface KindleSetupProps {
  subtitle1: string;
  subtitle2: string;
}

const KindleSetup: React.FC<KindleSetupProps> = (props) => {
  const { subtitle1, subtitle2 } = props;

  return (
    <Grid>
      <TypographyComponent variant="h5">{subtitle1}</TypographyComponent>
      <TypographyComponent variant="h5">{subtitle2}</TypographyComponent>
      <Grid container direction="row">
        <TextField placeholder="email" />
        <TextField placeholder="@kindle.com" />
      </Grid>
      <ButtonComponent>Add email</ButtonComponent>
      <TypographyComponent>Need help</TypographyComponent>
    </Grid>
  );
};

export default KindleSetup;
