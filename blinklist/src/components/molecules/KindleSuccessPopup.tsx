import { Grid } from "@mui/material";
import React from "react";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";

interface KindleSuccessPopupProps {
  title?: string;
  subtitle?: string;
  onClick?: () =>void;
}

const KindleSuccessPopup: React.FC<KindleSuccessPopupProps> = (props) => {
  const { title, subtitle, onClick } = props;

  return (
    <Grid>
      <TypographyComponent>{title}</TypographyComponent>
      <TypographyComponent>{subtitle}</TypographyComponent>
      <ButtonComponent onClick={onClick}>Continue reading</ButtonComponent>
    </Grid>
  );
};

export default KindleSuccessPopup;
