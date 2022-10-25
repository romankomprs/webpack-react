import React from "react";
import { TableCell, TableRow } from "@mui/material";

const PassengersTableHeader = () => (
  <TableRow>
    <TableCell>Dessert (100g serving)</TableCell>
    <TableCell align="right">Calories</TableCell>
    <TableCell align="right">Fat&nbsp;(g)</TableCell>
    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    <TableCell align="right">Protein&nbsp;(g)</TableCell>
  </TableRow>
);

export default PassengersTableHeader;
