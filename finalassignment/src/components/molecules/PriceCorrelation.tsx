import { Grid } from "@mui/material";
import React from "react";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";

export interface PriceCorrelationProps {
  title?: string;
  subtitle?: string;
  price?: number;
  percentage?: number;
}

const PriceCorrelation: React.FC<PriceCorrelationProps> = (props) => {
  const { title, subtitle, price, percentage } = props;

  return (
    <Grid>
      <Logo source="" alt="logo" />
      <Grid>
        <TypographyComponent>{title}</TypographyComponent>
        <TypographyComponent>{subtitle}</TypographyComponent>
      </Grid>
      <Grid>
        <TypographyComponent>${price}</TypographyComponent>
        <TypographyComponent>{percentage}%</TypographyComponent>
      </Grid>
    </Grid>
  );
};

export default PriceCorrelation;
