import { Grid } from "@mui/material";
import React from "react";
import Avatar from "../atoms/Avatar";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";

interface HeaderProps {
  section: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { section } = props;

  const handleSell = () => {};
  const handleBuy = () => {};

  return (
    <Grid flexDirection={"row"}>
      <TypographyComponent>{section}</TypographyComponent>
      <Grid>
        <ButtonComponent onClick={handleSell}>SELL</ButtonComponent>
        <ButtonComponent onClick={handleBuy}>BUY</ButtonComponent>
        <Avatar src="" />
      </Grid>
    </Grid>
  );
};

export default Header;
