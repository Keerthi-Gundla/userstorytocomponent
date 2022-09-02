import { Grid } from "@mui/material";
import React from "react";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";

const SpeedDelivery = () => {
  return (
    <div>
      <TypographyComponent>Select speed delivery</TypographyComponent>
      <Grid>
        <Logo source="truck.png" alt="" />
        <Grid>
          <TypographyComponent>Instant:2-5 min</TypographyComponent>
          <TypographyComponent>Transaction fees: 0.001BTC</TypographyComponent>
          {/* delivery options */}
        </Grid>
      </Grid>
    </div>
  );
};

export default SpeedDelivery;
