import { Box, Typography } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Status = () => {
  return (
    <>
      <Typography variant="h5">Regulation Enforcement Status</Typography>
      <Box sx={{ background: "rgba(255, 255, 255, 0.90)" }}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography>Current state</Typography>
            <Typography>60%</Typography>
          </Box>
          <Box>
            <Typography>Target state</Typography>
            <Typography>80%</Typography>
          </Box>
        </Box>
        <PieChart>
          <Pie
            data={data}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
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
      </Box>
    </>
  );
};
