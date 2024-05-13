import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import Stack from "@mui/material/Stack";
const rows = [
  {
    id: "01",
    name: "jhon",
    email: "jhon@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "02",
    name: "mike",
    email: "mike@gmail.com",
    status: false,
    contact: "01010021001",
  },
  {
    id: "03",
    name: "Alis",
    email: "alis@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "04",
    name: "yarn",
    email: "yarn@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "05",
    name: "Hobbs",
    email: "hobbs@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "06",
    name: "Tyson",
    email: "tyspn@gmail.com",
    status: false,
    contact: "01010021001",
  },
  {
    id: "07",
    name: "moris",
    email: "moris@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "08",
    name: "mike",
    email: "mike@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "09",
    name: "hammer",
    email: "hammer@gmail.com",
    status: false,
    contact: "01010021001",
  },
  {
    id: "10",
    name: "stone",
    email: "stoen@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "11",
    name: "phillips",
    email: "phillips@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "12",
    name: "Morgan",
    email: "morgn@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "13",
    name: "bella",
    email: "bella@gmail.com",
    status: false,
    contact: "01010021001",
  },
  {
    id: "14",
    name: "victoria",
    email: "victoria",
    status: true,
    contact: "01010021001",
  },
  {
    id: "15",
    name: "Dan",
    email: "dan@gmail.com",
    status: true,
    contact: "01010021001",
  },
  {
    id: "16",
    name: "domanic",
    email: "dominic@gmail.com",
    status: false,
    contact: "01010021001",
  },
  {
    id: "17",
    name: "roman",
    email: "roman@gmail.com",
    status: false,
    contact: "01010021001",
  },
  {
    id: "18",
    name: "warner",
    email: "warner@gmail.com",
    status: true,
    contact: "01010021001",
  },
];
const darkTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
        },
      },
    },
  },
});
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: "170px" }}>Name</TableCell>
                <TableCell style={{ minWidth: "170px" }} align={"center"}>
                  Email
                </TableCell>
                <TableCell style={{ minWidth: "170px" }} align={"center"}>
                  Status
                </TableCell>
                <TableCell style={{ minWidth: "170px" }} align={"center"}>
                  Contact
                </TableCell>
                <TableCell align={"center"} style={{ minWidth: "170px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align={"center"}>{row.email}</TableCell>
                    <TableCell align={"center"}>
                      {row.status ? "Active" : "Blocked"}
                    </TableCell>
                    <TableCell align={"center"}>{row.contact}</TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        // width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ textAlign: "center", align: "center" }}
                      >
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          sx={{
                            borderColor: "black", // Black outline
                            color: "black", // Black text
                            "&:hover": {
                              borderColor: "black", // Keep border black on hover
                              backgroundColor: "rgba(0, 0, 0, 0.08)", // Light hover background
                            },
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          endIcon={<BlockIcon />}
                          sx={{
                            borderColor: "black", // Black outline
                            color: "white",
                            backgroundColor: "black",
                            "&:hover": {
                              borderColor: "black", // Keep border black on hover
                              backgroundColor: "rgba(0, 0, 0, 0.08)", // Light hover background
                            },
                          }}
                        >
                          Block
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </ThemeProvider>
  );
}
