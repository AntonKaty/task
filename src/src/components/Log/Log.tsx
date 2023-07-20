import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { LogTable } from "./LogTable/LogTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Log = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        padding: "20px",
        boxShadow:
          " 0px 2.767256498336792px 2.2138051986694336px 0px rgba(108, 73, 172, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(108, 73, 172, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(108, 73, 172, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(108, 73, 172, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(108, 73, 172, 0.05), 0px 100px 80px 0px rgba(108, 73, 172, 0.07);",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#23A698",
              height: "5px",
              borderRadius: "5px 5px 0px 0px",
              fontWeight: 700,
              color: "black",
            },
          }}
          sx={{
            "& button:active": { fontWeight: "700", color: "#383874" },
            "& button.Mui-selected": { fontWeight: "700", color: "#383874" },
          }}
        >
          <Tab
            sx={{ color: "#383874" }}
            label={"Performance Insights"}
            {...a11yProps(0)}
          />
          <Tab
            sx={{ color: "#383874" }}
            label="VP element activation overview"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LogTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
};
