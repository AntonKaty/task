import { Box, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Status = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography sx={{ fontSize: "34px", color: "#383874" }}>
        Regulation Enforcement Status
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          background: "rgba(255, 255, 255, 0.90)",
          height: "492px",
          borderRadius: "10px",
          padding: "28px",
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
            <Typography fontSize="16px" color="#383874">
              Current state
            </Typography>
            <Typography fontSize="34px" color="#383874">
              60%
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="16px" color="#383874">
              Target state
            </Typography>
            <Typography fontSize="34px" color="#383874">
              80%
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};
