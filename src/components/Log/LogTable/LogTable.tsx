import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  impactedKPI: string,
  impactedSubKPI: string,
  impactedVCStep: string,
  geography: string,
  description: string,
  owner: string
) {
  return {
    impactedKPI,
    impactedSubKPI,
    impactedVCStep,
    geography,
    description,
    owner,
  };
}

const rows = [
  createData(
    "Regulation enforcement rate",
    "Regulation clause​​",
    "Plan / Detect",
    "Riyadh",
    "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    "Enforcement Team"
  ),
];

export const LogTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Impacted KPI</TableCell>
            <TableCell align="left">Impacted Sub-KPI</TableCell>
            <TableCell align="left">Impacted VC step</TableCell>
            <TableCell align="left">Geography</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.impactedKPI}
              </TableCell>
              <TableCell align="left">{row.impactedSubKPI}</TableCell>
              <TableCell align="left">{row.impactedVCStep}</TableCell>
              <TableCell align="left">{row.geography}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
