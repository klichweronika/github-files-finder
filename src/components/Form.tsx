import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { SearchButton } from "./SearchButton";
import { useState } from "react";

export const Form = () => {
  const [currency, setCurrency] = useState("All");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Go",
      label: "Go",
    },
    {
      value: "Java",
      label: "Java",
    },
    {
      value: "JavaScript",
      label: "JavaScript",
    },
  ];

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", textAlign: "center" },
        }}
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        <TextField required label="Text" variant="outlined"></TextField>
        <TextField required label="User" variant="outlined"></TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Language"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <SearchButton value="something"></SearchButton>
      </Box>
    </>
  );
};
