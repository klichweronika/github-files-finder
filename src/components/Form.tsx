import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { SearchButton } from "./SearchButton";
import { useState } from "react";
import Button from "@mui/material/Button";

export const Form = () => {
  const [currency, setCurrency] = useState("All");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "go",
      label: "Go",
    },
    {
      value: "java",
      label: "Java",
    },
    {
      value: "javaScript",
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

        <Box p={2} justifyContent="center" textAlign="center">
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
    </>
  );
};
