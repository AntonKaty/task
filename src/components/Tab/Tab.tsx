import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const Tab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "15px",
      }}
    >
      <Typography
        fontSize="30px"
        color={"#383874"}
        fontWeight={500}
        variant="h4"
      >
        Regulation enforcement performance
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ padding: 0 }} id="demo-simple-select-standard-label">
          KSA
        </InputLabel>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "white",
          padding: "12px",
          borderRadius: "6px",
          gap: "12px",
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={"4px"}>
          <Box
            sx={{
              width: "20px",
              height: "16px",
              background: "#FF708B",
              borderRadius: "2px",
            }}
          ></Box>
          <Typography fontSize="12px" color="#383874">
            {"< 20% of target"}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"4px"}>
          <Box
            sx={{
              width: "20px",
              height: "16px",
              background: "#FFBA69",
              borderRadius: "2px",
            }}
          ></Box>
          <Typography fontSize="12px" color="#383874">
            {"< 10% of target"}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"4px"}>
          <Box
            sx={{
              width: "20px",
              height: "16px",
              background: "#23A698",
              borderRadius: "2px",
            }}
          ></Box>
          <Typography fontSize="12px" color="#383874">
            {">= target"}
          </Typography>
        </Box>
      </Box>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Previous month</InputLabel>
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            color: "#383874",
            background: "white",
          }}
          label="Previous month"
        >
          <MenuItem value="">
            <em>Previous month</em>
          </MenuItem>
          <MenuItem value={10}>Previous month</MenuItem>
          <MenuItem value={20}>Previous month</MenuItem>
          <MenuItem value={30}>Previous month</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
