import { Grid } from "@mui/material";
import React from "react";
import TypographyComponent from "../atoms/Typography";

const MyPortFolioCurrency = () => {
  return (
    <Grid>
      <Grid container direction="row">
        <Grid item>
          <TypographyComponent variant="h3">
            Total investment
          </TypographyComponent>
          <TypographyComponent variant="h2">$11,900,204</TypographyComponent>
        </Grid>
        <Grid item>
          <TypographyComponent variant="h2">Bitcoin</TypographyComponent>
          <TypographyComponent variant="h2">$34000</TypographyComponent>
        </Grid>
        <Grid item>{/* time graph */}</Grid>
        <Grid item>{/* Render Graphs  */}</Grid>
      </Grid>
    </Grid>
  );
};

export default MyPortFolioCurrency;
