import React, { useState } from "react";
import { Autocomplete, Box, Grid, styled, TextField } from "@mui/material";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import Image from "./Image";
import { ERROR_LABEL, FEMALE, MALE } from "../utils/constant";

const StyledGrid=styled(Grid)({
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'center',
    gap:"20px",
    paddingBottom:'20px'
})

const Form = () => {
  const [name, setName] = useState<String>();
  const [age, setAge] = useState<Number>();
  const [gender, setGender] = useState<String | null>();
  const [errorText,setErrorText]=useState<String>("");

  let genderOptions = [MALE, FEMALE];

  const updateAge = (age: String) => {
    if (!Number.isNaN(Number(age))) {
      setErrorText("")
      setAge(Number(age));
    } else {
      setErrorText(ERROR_LABEL);
    }
  };

  const ageIcon=()=>{
      let output;
      age && (age<16 && age>0) && (output=<Image source="child.jpg" />)
      age && (age<50 && age>16) && (output=<Image source="man.jpg" />)
      age && (age>50) && (output=<Image source="old_man.jpg" />)

      return output;
  }

  const genderIcon = () => {
    if (gender === MALE) return <ManIcon />;
    if (gender === FEMALE) return <WomanIcon />;
  };

  return (
    <div>
        
            <h1>Form</h1>
            <Box>
                <StyledGrid>
                <label>Name : </label>
                <TextField
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />
                </StyledGrid>
                {name && (
                <>
                    <StyledGrid>
                    <label>Age : </label>
                    <TextField
                        variant="outlined"
                        error={errorText!==""}
                        helperText={errorText}
                        onChange={(e) => updateAge(e.target.value)}
                        />
                        {ageIcon()}
                    </StyledGrid>
                    <StyledGrid>
                    <label>Gender </label>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={genderOptions}
                        sx={{ width: 300 }}
                        onChange={(_e, value) => setGender(value)}
                        renderInput={(params) => (
                        <TextField {...params} label="Gender" />
                        )}
                    />
                    <>{genderIcon()}</>
                    </StyledGrid>
                </>
                )}
            </Box>
    </div>
  );
};

export default Form;
