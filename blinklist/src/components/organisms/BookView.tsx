import { Grid, Tabs, Typography } from "@mui/material";
import React from "react";
import BookThumbnail from "../atoms/BookThumbnail";
import Button from "../atoms/Button";

const BookView = () => {
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
    </Grid>
  );
};

export default BookView;
