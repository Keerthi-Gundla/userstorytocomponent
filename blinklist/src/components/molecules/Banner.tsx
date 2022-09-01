import { Grid } from "@mui/material";
import React from "react";

interface BannerProps {
  text?: string;
  image?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  const { text, image } = props;

  return (
    <Grid container>
      <Grid>{text}</Grid>
      <Grid>
        <img src={image} alt="Banner" />
      </Grid>
    </Grid>
  );
};

export default Banner;
