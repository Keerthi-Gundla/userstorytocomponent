import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import Image from "../atoms/Image";
import TypographyComponent from "../atoms/Typography";

interface CheckoutProps {
  successText?: string;
  crypto?: "BUY CRYPTO" | "SELL CRYPTO";
}

const Checkout: React.FC<CheckoutProps> = (props) => {
  const { successText, crypto } = props;

  const handleCrypto = () => {};

  const handleGoToUSDCoin = () => {};

  return (
    <Grid>
      <Image source="sucess.png" alt="success" />
      <TypographyComponent variant="h3">BTC </TypographyComponent>
      <TypographyComponent>{successText}</TypographyComponent>
      <Grid flexDirection={"row"}>
        <ButtonComponent onClick={handleCrypto}>{crypto}</ButtonComponent>
        <ButtonComponent onClick={handleGoToUSDCoin}>
          GO TO USD COIN
        </ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default Checkout;
