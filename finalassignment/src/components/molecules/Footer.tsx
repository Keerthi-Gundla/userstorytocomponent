import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";

const Footer = () => {
  return (
    <Grid flexDirection={"row"}>
      <Grid>
        <TypographyComponent>Dashbord</TypographyComponent>
        <TypographyComponent>Careers</TypographyComponent>
        <TypographyComponent>Legal & privacy</TypographyComponent>
        <TypographyComponent>@2021 Minet</TypographyComponent>
      </Grid>
      <Grid>
        <TypographyComponent>English</TypographyComponent>
        <ButtonComponent>NEED HELP</ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default Footer;
