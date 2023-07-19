import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const Overview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4">Regulation activation overview</Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="KSA"
        >
          <MenuItem value="">
            <em>KSA</em>
          </MenuItem>
          <MenuItem value={10}>KSA</MenuItem>
          <MenuItem value={20}>KSA</MenuItem>
          <MenuItem value={30}>KSA</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
