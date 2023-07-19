import {
  Box,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const mock = [
  {
    name: "Amana 5",
    progress: 87,
  },
  {
    name: "Amana 4",
    progress: 82,
  },
  {
    name: "Amana 3",
    progress: 79,
  },
  {
    name: "Amana 2",
    progress: 75,
  },
  {
    name: "Amana 1",
    progress: 72,
  },
];

export const Performance = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "34px", color: "#383874" }}>
        Amanas performance
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          background: "white",
          borderRadius: "10px",
          width: "100%",
          height: "492px",
          padding: "28px",
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            sx={{ color: "#383874", fontWeight: "700", fontSize: "14px" }}
            id="demo-simple-select-standard-label"
          >
            Top
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Top"
          >
            <MenuItem value="">
              <em>KSA</em>
            </MenuItem>
            <MenuItem value={10}>Top</MenuItem>
            <MenuItem value={20}>Top</MenuItem>
            <MenuItem value={30}>Top</MenuItem>
          </Select>
        </FormControl>
        <Box>
          {mock.map(el => (
            <>
              <Typography fontSize="20px" mb="9px" mt="28px">
                {el.name}{" "}
              </Typography>

              <LinearProgress
                sx={{
                  backgroundColor: "white",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#23A698",
                  },
                  height: "11px",
                  borderRadius: " 2px 0px 0px 2px",
                }}
                variant="determinate"
                value={el.progress}
              ></LinearProgress>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
