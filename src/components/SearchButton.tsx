import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface SearchButtonProps {
  value: string;
}

export const SearchButton = (props: SearchButtonProps) => {
  const { value } = props;

  return (
    <Box p={2} justifyContent="center" textAlign="center">
      <Button variant="contained">Search</Button>
    </Box>
  );
};
