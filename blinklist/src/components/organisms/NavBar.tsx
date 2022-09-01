import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../atoms/Button";
import Logo from "../atoms/Logo";
import TypographyComponent from "../atoms/Typography";
import Explore from "../molecules/Explore";

interface NavBarProps {
  logo?: string;
  alt?: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [openExplore, setOpenExplore] = useState<boolean>();

  const { logo, alt } = props;
  return (
    <div>
      <Grid container flexDirection="row">
        <Logo source={logo} alt={alt} />
        {/* search icon */}
        <ButtonComponent
          variant="text"
          label={"Explore"}
          onClick={() => setOpenExplore(!openExplore)}
        />
        <TypographyComponent variant="body1">My Library</TypographyComponent>
        <TypographyComponent variant="body1">Highlights</TypographyComponent>
      </Grid>
      {openExplore && <Explore exploreData={""} />}
    </div>
  );
};

export default NavBar;
