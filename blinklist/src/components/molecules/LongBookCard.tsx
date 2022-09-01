import { Grid } from "@mui/material";
import React from "react";
import BookThumbnail from "../atoms/BookThumbnail";
import TypographyComponent from "../atoms/Typography";

interface LongBookCardProps {
  title?: string;
  subtitle?: string;
}

const LongBookCard: React.FC<LongBookCardProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <Grid flexDirection={"row"}>
      <BookThumbnail />
      <Grid flexDirection={"column"}>
        <TypographyComponent>{title}</TypographyComponent>
        <TypographyComponent>{subtitle}</TypographyComponent>
      </Grid>
    </Grid>
  );
};

export default LongBookCard;
