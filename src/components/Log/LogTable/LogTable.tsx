import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
function createData(
  impactedKPI: string,
  percentage: string,
  impactedSubKPI: string,
  impactedVCStep: string,
  geography: string,
  description: string,
  owner: string
) {
  return {
    impactedKPI,
    percentage,
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
    "10%",
    "Regulation clause​​",
    "Plan / Detect",
    "Riyadh",
    "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    "Enforcement Team"
  ),
  createData(
    "Regulation enforcement rate",
    "10%",
    "Regulation clause​​",
    "Plan / Detect",
    "Riyadh",
    "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    "Enforcement Team"
  ),
  createData(
    "Regulation enforcement rate",
    "10%",
    "Regulation clause​​",
    "Plan / Detect",
    "Riyadh",
    "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    "Enforcement Team"
  ),
  createData(
    "Regulation enforcement rate",
    "10%",
    "Regulation clause​​",
    "Plan / Detect",
    "Riyadh",
    "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    "Enforcement Team"
  ),
  createData(
    "Regulation enforcement rate",
    "10%",
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
                fontWeight: 400,
              }}
            >
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  fontWeight: 400,
                }}
                component="th"
                scope="row"
              >
                {row.impactedKPI}
                <Box
                  sx={{
                    padding: "2px 4px",
                    background: "rgba(255, 112, 139, 0.10)",
                    width: "40px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  <Typography
                    textAlign="center"
                    fontSize="12px"
                    sx={{ color: "#FF708B" }}
                  >
                    {row.percentage}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
                  fontWeight: 400,
                }}
                align="left"
              >
                {row.impactedSubKPI}
                <Box
                  sx={{
                    padding: "2px 4px",
                    background: "rgba(49, 207, 128, 0.10)",
                    width: "40px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  <Typography
                    textAlign="center"
                    fontSize="12px"
                    sx={{ color: "#23A698" }}
                  >
                    {row.percentage}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
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
                  fontWeight: 400,
                }}
                align="left"
              >
                <Box display="flex" alignItems="center">
                  <FmdGoodIcon style={{ color: "#C4C4C4" }} />
                  {row.geography}
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "10px",
                  color: "#383874",
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
