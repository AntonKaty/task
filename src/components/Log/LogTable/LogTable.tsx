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
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Impacted KPI
            </TableCell>
            <TableCell
              sx={{
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="left"
            >
              Impacted Sub-KPI
            </TableCell>
            <TableCell
              sx={{
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="left"
            >
              Impacted VC step
            </TableCell>
            <TableCell
              sx={{
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="left"
            >
              Geography
            </TableCell>
            <TableCell
              sx={{
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="left"
            >
              Description
            </TableCell>
            <TableCell
              sx={{
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="left"
            >
              Owner
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                fontSize: "10px",
                color: "#383874",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
                component="th"
                scope="row"
              >
                {row.impactedKPI}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
                align="left"
              >
                {row.impactedSubKPI}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
                align="left"
              >
                {row.impactedVCStep}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
                align="left"
              >
                {row.geography}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
                align="left"
              >
                {row.description}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
                align="left"
              >
                {row.owner}
              </TableCell>
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
