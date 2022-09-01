import { Grid, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../atoms/Button";
import TypographyComponent from "../atoms/Typography";
import KindleSuccessPopup from "../molecules/KindleSuccessPopup";

interface KindleSetupProps {
  subtitle1: string;
  subtitle2: string;
}

const KindleSetup: React.FC<KindleSetupProps> = (props) => {
  const { subtitle1, subtitle2 } = props;
  const [addEmail, setAddEmail] = useState<boolean>(false);

  const handleAddEmail = () => {
    setAddEmail(true);
  };
  const handleContinueReading = () => {};

  return (
    <Grid>
      <TypographyComponent variant="h5">{subtitle1}</TypographyComponent>
      <TypographyComponent variant="h5">{subtitle2}</TypographyComponent>
      <Grid container direction="row">
        <TextField placeholder="email" />
        <TextField placeholder="@kindle.com" />
      </Grid>
      <ButtonComponent onClick={handleAddEmail}>Add email</ButtonComponent>
      <TypographyComponent>Need help</TypographyComponent>
      <Modal open={addEmail}>
        <KindleSuccessPopup onClick={handleContinueReading} />
      </Modal>
    </Grid>
  );
};

export default KindleSetup;
