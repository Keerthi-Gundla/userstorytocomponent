import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  handleChange: (value:string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { placeholder,handleChange } = props;

  return (
    <div>
      <TextField placeholder={placeholder} onChange={(e)=>handleChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;
