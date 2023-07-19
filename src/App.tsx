import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { Log } from "./components/Log/Log";
import { Overview } from "./components/Overview/Overview";
import { Performance } from "./components/Performance/Performance";
import { Status } from "./components/Status/Status";
import { Tab } from "./components/Tab/Tab";
function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />

      <Tab />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Status />
        <Performance />
        <Overview />
      </Box>
      <Log />
    </Container>
  );
}

export default App;
