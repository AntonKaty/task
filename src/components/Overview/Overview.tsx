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
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "34px", color: "#383874" }}>
        Regulation activation overview
      </Typography>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.90)",
          marginTop: "20px",
          height: "496px",
          width: "100%",
          borderRadius: "10px",
          padding: "28px",
        }}
      >
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
    </Box>
  );
};
