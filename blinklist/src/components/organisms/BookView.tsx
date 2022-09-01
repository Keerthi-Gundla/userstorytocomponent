import { Grid, Modal, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import BookThumbnail from "../atoms/BookThumbnail";
import Button from "../atoms/Button";
import KindleSetup from "./KindleSetup";

const BookView = () => {
  const [openKindle, setOpenKindle] = useState<boolean>(false);

  const handleReadNow = () => {};

  const handleBuy = () => {};

  return (
    <Grid>
      <Grid>
        <Typography variant="h2">BookName</Typography>
        <Typography variant="h2">Description</Typography>
        <Typography variant="h2">Authorname</Typography>
        {/* Icons with read time and audio available text */}

        <Button variant="contained" label="Read Now" />
        <Button variant="outlined" label="Buy book" />
        <Button variant="text" label="Send to Kindle" />
      </Grid>
      <Grid>
        <BookThumbnail />
      </Grid>
      <Tabs />

      <Modal open={openKindle}>
        <KindleSetup subtitle1={""} subtitle2={""} />
      </Modal>
    </Grid>
  );
};

export default BookView;
