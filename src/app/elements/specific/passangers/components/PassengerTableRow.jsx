import React from "react";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

const PassengerTableRow = ({ passenger }) => {
  const { name, calories, fat, carbs, protein } = passenger;

  return (
    <TableRow
      key={name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="right">{calories}</TableCell>
      <TableCell align="right">{fat}</TableCell>
      <TableCell align="right">{carbs}</TableCell>
      <TableCell align="right">{protein}</TableCell>
    </TableRow>
  );
};

export default PassengerTableRow;
