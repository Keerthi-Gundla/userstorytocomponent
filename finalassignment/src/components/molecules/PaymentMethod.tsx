import { Grid } from "@mui/material";
import React from "react";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";

const PaymentMethod = () => {
  return (
    <Grid justifyContent={"space-between"}>
      <Grid>
        <Logo source="dollar.png" />
        <Grid>
          <TypographyComponent>USD Coin(Cash)</TypographyComponent>
          <TypographyComponent>Total Balance- $34,000</TypographyComponent>
        </Grid>
      </Grid>
      <TypographyComponent variant="h5">Default</TypographyComponent>
    </Grid>
  );
};

export default PaymentMethod;
