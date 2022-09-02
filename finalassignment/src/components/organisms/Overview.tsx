import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";
import PriceCorrelation, {
  PriceCorrelationProps,
} from "../molecules/PriceCorrelation";

interface OverviewProps {
  title?: string;
  subtitle?: string;
}

const Overview: React.FC<OverviewProps> = (props) => {
  const { title, subtitle } = props;

  const [priceCorrelation, setPriceCorrelation] =
    useState<PriceCorrelationProps[]>();

  useEffect(() => {
    axios.get("url").then((res) => {
      setPriceCorrelation(res.data);
    });
  });

  return (
    <Grid>
      {/* Graph  */}
      <Grid>
        <Grid>
          <TypographyComponent>{title}</TypographyComponent>
          <TypographyComponent>{subtitle}</TypographyComponent>
        </Grid>
        <Grid>
          <Grid flexDirection={"row"}>
            <Logo source="globle.png" />
            <TypographyComponent>Official Website</TypographyComponent>
          </Grid>
          <Grid flexDirection={"row"}>
            <Logo source="paper.png" />
            <TypographyComponent>White Paper</TypographyComponent>
          </Grid>
        </Grid>
        <Grid>
          <TypographyComponent>Price Correlation with</TypographyComponent>
          {priceCorrelation &&
            priceCorrelation.map((item: PriceCorrelationProps) => {
              return (
                <PriceCorrelation
                  title={item.title}
                  subtitle={item.subtitle}
                  percentage={item.percentage}
                  price={item.price}
                />
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overview;
