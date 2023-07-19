import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { Log } from "./components/Log/Log";
import { Overview } from "./components/Overview/Overview";
import { Performance } from "./components/Performance/Performance";
import { Status } from "./components/Status/Status";
import { Tab } from "./components/Tab/Tab";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <CssBaseline />

      <Tab />
      <Box
        sx={{
          display: "flex",
          gap: "38px",
          width: "100%",
          alignItems: "center",
          marginBottom: "44px",
        }}
      >
        <Status />
        <Performance />
        <Overview />
      </Box>
      <Log />
    </div>
  );
}

export default App;
