import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";

interface CryptoOptionsType {
  cryptoType?: string;
  amount?: string;
  logo?: string;
}

const BuyCrypto = () => {
  const [cryptoOptions, setCryptoOptions] = useState<CryptoOptionsType[]>();

  useEffect(() => {
    axios.get("api url").then((res) => {
      setCryptoOptions(res.data);
    });
  });

  return (
    <Grid flexDirection={"row"}>
      {cryptoOptions &&
        cryptoOptions.map((item: CryptoOptionsType) => {
          return (
            <Grid flexDirection={"column"}>
              <Logo source={item.logo} alt="crypto logo" />
              <TypographyComponent>{item.cryptoType}</TypographyComponent>
              <TypographyComponent>{item.amount}</TypographyComponent>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default BuyCrypto;
