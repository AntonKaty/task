import { Box, Typography } from "@mui/material";

import { PieChart } from "@mui/x-charts/PieChart";

export const Status = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "calc((100% - (16px * 2)) / 3)",
      }}
    >
      <Typography sx={{ fontSize: "24px", color: "#383874" }}>
        Regulation Enforcement Status
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          background: "rgba(255, 255, 255, 0.90)",
          borderRadius: "10px",
          padding: "28px",
          height: "400px",
          boxShadow:
            " 0px 2.767256498336792px 2.2138051986694336px 0px rgba(108, 73, 172, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(108, 73, 172, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(108, 73, 172, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(108, 73, 172, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(108, 73, 172, 0.05), 0px 100px 80px 0px rgba(108, 73, 172, 0.07);",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontWeight="300" fontSize="14px" color="#383874">
              Current state
            </Typography>
            <Typography fontWeight="400" fontSize="24px" color="#383874">
              60%
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="300" fontSize="14px" color="#383874">
              Target state
            </Typography>
            <Typography fontWeight="400" fontSize="24px" color="#383874">
              80%
            </Typography>
          </Box>
        </Box>
        <Box>
          <PieChart
            series={[
              {
                data: [
                  { value: 80, color: "#23A698" },
                  { value: 10, color: "#383874" },
                  { value: 10, color: "#DBDFF1" },
                ],
                innerRadius: 120,
                outerRadius: 140,
                paddingAngle: 0,
                cornerRadius: 10,
                startAngle: -125,
                endAngle: 125,
                cx: 200,
                cy: 150,
              },
            ]}
            width={400}
            height={300}
          />
        </Box>
      </Box>
    </Box>
  );
};
