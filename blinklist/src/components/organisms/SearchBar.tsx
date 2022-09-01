import { Grid, TextField } from "@mui/material";
import React from "react";

interface SearchBarProps {
  placeholder?: string;
  handleChange: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { placeholder, handleChange } = props;

  return (
    <Grid>
      <TextField placeholder={placeholder} onChange={handleChange} />
    </Grid>
  );
};

export default SearchBar;
