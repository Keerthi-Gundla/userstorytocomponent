import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "../atoms/SearchBar";
import LongBookCard from "../molecules/LongBookCard";

interface Book {
  title?: string;
  author?: string;
}

const SearchResultGrid = () => {
  const [searchedText, setSearchedText] = useState<string>();
  const [searchResult, setSearchResult] = useState<Book[]>();

  const search = () => {
    //search logic based on searchedText
  };

  const handleChange = (value: string) => {
    setSearchedText(value);
  };

  useEffect(() => {
    search();
  }, [searchedText]);

  return (
    <Grid>
      <SearchBar placeholder="Search" handleChange={handleChange} />
      <Grid>
        {searchResult &&
          searchResult.map(() => {
            return <LongBookCard />;
          })}
      </Grid>
    </Grid>
  );
};

export default SearchResultGrid;
