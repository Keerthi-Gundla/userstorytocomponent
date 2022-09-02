import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";

interface WatchListProps {
  marketCap?: number;
  vol?: number;
  supply?: number;
}

const WatchList: React.FC<WatchListProps> = (props) => {
  const { marketCap, vol, supply } = props;

  return (
    <Grid flexDirection={"row"}>
      <Grid>
        <Logo source="bitcoin.png" />
      </Grid>
      <Grid>
        <TypographyComponent>Bitcoin</TypographyComponent>
        <TypographyComponent>BTC</TypographyComponent>
      </Grid>
      <Grid>
        <TypographyComponent>Market cap</TypographyComponent>
        <TypographyComponent>${marketCap}T</TypographyComponent>
      </Grid>
      <Grid>
        <TypographyComponent>Vol.24H</TypographyComponent>
        <TypographyComponent>${vol}T</TypographyComponent>
      </Grid>
      <Grid>
        <TypographyComponent>Circulating Supply</TypographyComponent>
        <TypographyComponent>{supply}M BTC</TypographyComponent>
      </Grid>
      <ButtonComponent>ADDED TO WATCHLIST</ButtonComponent>
    </Grid>
  );
};

export default WatchList;
