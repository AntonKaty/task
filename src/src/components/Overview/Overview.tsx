/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Divider,
} from "@mui/material";
import { overview } from "../../mock/overview";
import DonutChart from "react-donut-chart";
const data = [
  {
    value: 37,
    label: "Not activated",
  },
  {
    value: 47,
    label: "Activated",
  },
  {
    value: 16,
    label: "Partially active",
  },
];

const StyleMap = {
  Active: {
    color: "#23A698",
    background: "rgba(49, 207, 128, 0.10)",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  NotActive: {
    color: "#FF708B",
    background: "rgba(255, 112, 139, 0.10)",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
};

export const Overview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "calc((100% - (16px * 2)) / 3)",
      }}
    >
      <Typography sx={{ fontSize: "24px", color: "#383874" }}>
        Regulation activation overview
      </Typography>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.90)",
          marginTop: "20px",
          height: "400px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow:' 0px 2.767256498336792px 2.2138051986694336px 0px rgba(108, 73, 172, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(108, 73, 172, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(108, 73, 172, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(108, 73, 172, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(108, 73, 172, 0.05), 0px 100px 80px 0px rgba(108, 73, 172, 0.07);'
        }}
        pt="28px"
        pl="28px"
        pr="10px"
        pb="28px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pl="20px"
          pr="20px"
        >
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 90 }}>
            <InputLabel
              sx={{ color: "#383874", fontWeight: "700", fontSize: "14px" }}
              id="demo-simple-select-standard-label"
            >
              All
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Top"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>All</MenuItem>
              <MenuItem value={30}>All</MenuItem>
            </Select>
          </FormControl>
          <Box mt="20px">
            <Typography>37%</Typography>
            <Typography>47%</Typography>
            <Typography>16%</Typography>
          </Box>
        </Box>
        <Divider orientation="vertical" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            width: "70%",
            paddingLeft: "10px",
          }}
        >
          {overview.map(el => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <img src={el.icon} />
              <Typography>{el.name}</Typography>

              <Typography fontSize="12px" sx={StyleMap[el.status]}>
                {el.status}
              </Typography>
              <Typography fontSize="10px">{el.date}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
