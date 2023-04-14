import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";

const TableData = ({ data, input }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.white,
      fontSize: 19,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
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

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className="row">
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((val) => {
                if (
                  val.firstName
                    .toLowerCase()
                    .includes(input.toLocaleLowerCase())
                ) {
                  return val;
                } else if (input === "") {
                  return val;
                }
              })
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.firstName} {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.phone}</StyledTableCell>
                  <StyledTableCell align="center">{row.gender}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.address.city}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {row.company.department}
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">
                {row.company.title}
              </StyledTableCell> */}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{width:"100%",margin:"10px auto"}}>
      <Button>
        <ArrowUpwardIcon
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Button>
      </div>
    </div>
  );
};

export default TableData;
