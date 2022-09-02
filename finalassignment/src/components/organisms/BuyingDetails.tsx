import { Grid, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";

const BuyingDetails = () => {
  const calculateTotal = () => {
    return <Typography></Typography>;
  };

  const handleBuyNow = () => {};

  return (
    <Grid>
      <Grid flexDirection={"column"}>
        <TypographyComponent>You are buying</TypographyComponent>
        <TypographyComponent>BTC</TypographyComponent>
        <TypographyComponent>1BTC= ${}</TypographyComponent>
      </Grid>
      <Grid flexDirection={"column"}>
        {/* payment method */}
        {/* Delivery fees */}
        {/* Deposit to */}
      </Grid>
      <Grid>
        <TypographyComponent>Transaction fee------ ${}</TypographyComponent>
        <Typography>Total------------{calculateTotal()}</Typography>
        <ButtonComponent onClick={handleBuyNow}>Buy Now</ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default BuyingDetails;
