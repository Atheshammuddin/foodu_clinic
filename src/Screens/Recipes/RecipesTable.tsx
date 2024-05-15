import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#007BFF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function RecipesTable({ data }: any) {
  const [page, setPage] = useState(1);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const rowsPerPage = 6;

  return (
    <div>
      <div className="tables">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className="heads">
                  Recipes Name
                </StyledTableCell>
                <StyledTableCell className="heads">
                  Serving size
                </StyledTableCell>
                <StyledTableCell className="heads" align="left">
                  Cost per serving
                </StyledTableCell>
                <StyledTableCell className="heads" align="left">
                  Actions
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((item: any) => (
                  <StyledTableRow key={item?.id}>
                    <TableCell component="th" scope="row" className="tbodys">
                      {item?.name}
                    </TableCell>
                    <TableCell align="left" className="tbodys">
                      {item?.servingSize}
                    </TableCell>
                    <TableCell align="left" className="tbodys">
                      {item?.costPerServing}
                    </TableCell>
                    <TableCell align="left" className="tbodys">
                      <div className="tabletn">
                        <button>
                          <MdOutlineRemoveRedEye />
                        </button>
                        <button>
                          <FaRegEdit />
                        </button>
                        <button>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </TableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="pagesignation">
        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
