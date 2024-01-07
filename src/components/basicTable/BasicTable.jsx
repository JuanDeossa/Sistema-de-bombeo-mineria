import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { round } from "../../helpers/math";

export const createData2 = (caudal, presion) => {
  return {
    caudal: round(caudal),
    presion: round(presion),
    caudalGPM: round(caudal * 15.85),
    presionMCA: round(presion * 10.2),
  };
};

const row2 = [
  createData2(4.63, 16.19),
  createData2(9.42, 16.06),
  createData2(14.05, 15.93),
  createData2(18.73, 15.76),
  createData2(23.53, 15.53),
  createData2(28.16, 15.17),
  createData2(33.0, 14.48),
  createData2(38.29, 13.46),
];

export const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            {/* <TableCell align="right">Bar&nbsp;(g)</TableCell> */}
            <TableCell align="left">
              <b>L/S</b>
            </TableCell>
            <TableCell align="left">
              <b>Bar</b>
            </TableCell>
            <TableCell align="left">
              <b>GPM</b>
            </TableCell>
            <TableCell align="left">
              <b>MCA</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row2.map((row) => (
            <TableRow
              key={row.caudal}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left">{row.caudal}</TableCell>
              <TableCell align="left">{row.presion}</TableCell>
              <TableCell align="left">{row.caudalGPM}</TableCell>
              <TableCell align="left">{row.presionMCA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
