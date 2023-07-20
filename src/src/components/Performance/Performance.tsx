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
        width: "calc((100% - (16px * 2)) / 3)",
        maxWidth: "434px",
      }}
    >
      <Typography sx={{ fontSize: "24px", color: "#383874" }}>
        Amanas performance
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          background: "white",
          height: "400px",
          padding: "28px",
          borderRadius: "10px",
          boxShadow:
            " 0px 2.767256498336792px 2.2138051986694336px 0px rgba(108, 73, 172, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(108, 73, 172, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(108, 73, 172, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(108, 73, 172, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(108, 73, 172, 0.05), 0px 100px 80px 0px rgba(108, 73, 172, 0.07);",
        }}
      >
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 90 }}>
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
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          {mock.map(el => (
            <Box mb="10px">
              <Typography
                display="flex"
                fontSize="16px"
                alignItems="center"
                mb="9px"
                color={"#383874"}
              >
                <Box
                  mr="6px"
                  sx={{
                    width: "10px",
                    height: "10px",
                    border: " 2px solid #23A698",
                    borderRadius: "50%",
                  }}
                ></Box>{" "}
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
