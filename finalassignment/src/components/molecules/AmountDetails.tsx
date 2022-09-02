import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";

interface AmountDetailsProps {
  amount?: string;
  btc?: string;
}

const AmountDetails = (props: AmountDetailsProps) => {
  const { amount, btc } = props;

  return (
    <Grid>
      <Grid flexDirection={"row"}>
        <TypographyComponent>{amount}</TypographyComponent>
        <ButtonComponent>Buy max</ButtonComponent>
      </Grid>
      <Grid>
        <TypographyComponent>{btc}</TypographyComponent>
        <TypographyComponent>BTC</TypographyComponent>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default AmountDetails;
