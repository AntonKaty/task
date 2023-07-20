/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { overview } from "../../mock/overview";
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
          boxShadow:
            " 0px 2.767256498336792px 2.2138051986694336px 0px rgba(108, 73, 172, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(108, 73, 172, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(108, 73, 172, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(108, 73, 172, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(108, 73, 172, 0.05), 0px 100px 80px 0px rgba(108, 73, 172, 0.07);",
        }}
        pt="28px"
        pl="28px"
        pr="10px"
        pb="28px"
      >
        <Box>
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

          <Box mt="20px" pl="10px" pr="10px">
            <PieChart
              series={[
                {
                  data: [
                    { value: 37, color: "#FF708B" },
                    { value: 47, color: "#23A698" },
                    { value: 16, color: "#FFBA69" },
                  ],
                  innerRadius: 30,
                  outerRadius: 40,
                  paddingAngle: 10,
                  cornerRadius: 10,
                  startAngle: 360,
                  endAngle: 0,
                  cx: 40,
                  cy: 40,
                },
              ]}
              width={100}
              height={100}
            />
            <Typography fontSize="12px" display="flex" alignItems="center">
              <Box
                mr="6px"
                sx={{
                  width: "10px",
                  height: "10px",
                  border: " 2px solid #FF708B",
                  borderRadius: "50%",
                }}
              ></Box>
              Not activated
            </Typography>
            <Typography fontSize="12px" display="flex" alignItems="center">
              <Box
                mr="6px"
                sx={{
                  width: "10px",
                  height: "10px",
                  border: " 2px solid #23A698",
                  borderRadius: "50%",
                }}
              ></Box>
              Activated
            </Typography>
            <Typography fontSize="12px" display="flex" alignItems="center">
              <Box
                mr="6px"
                sx={{
                  width: "10px",
                  height: "10px",
                  border: " 2px solid #FFBA69",
                  borderRadius: "50%",
                }}
              ></Box>
              Partially active
            </Typography>
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

            overflowY: "scroll",
            height: "300px",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          {overview.map(el => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <img style={{ marginRight: "6px" }} src={el.icon} />
              <Typography mr="12px">{el.name}</Typography>

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
