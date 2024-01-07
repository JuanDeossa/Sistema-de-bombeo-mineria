import { Box, Button, Paper, Stack } from "@mui/material";
import { Chart } from "../components/chart/Chart";
import { BasicTable } from "../components/basicTable/BasicTable";
import { useState } from "react";

export const MainPage = () => {
  const [constants, setConstants] = useState({
    D: 0.1776,
    L: 750,
    C: 110,
    R: 5994.862241,
  });

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={5}
      paddingTop={4}
      width={390}
      border="1px solid gray"
      borderBottom="0px"
    >
      <Paper elevation={4}>
        <Chart />
      </Paper>
      {/* <Paper elevation={4}>
        <Box overflow="auto">
          <BasicTable />
        </Box>
      </Paper> */}
      <Button variant="contained">Calcular</Button>
    </Stack>
  );
};
