/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import modStyles from "./Chart.module.css";

export const Chart = ({ data }) => {
  const { eqName, DATA_X, DATA_Y1, DATA_Y2, DATA_Y3 } = data || {};
  return (
    <div className={modStyles.Chart}>
      <Typography variant="h6" paddingLeft={2} paddingTop={1}>
        {eqName}
      </Typography>
      <LineChart
        width={300}
        height={260}
        className="LineChart"
        title="Nooo"
        xAxis={[{ data: DATA_X || [0, 1, 2, 3, 4, 5], label: "Q (GPM)" }]}
        series={[
          {
            data: DATA_Y1 || [0, 1, 2, 3, 4, 5],
            color: !DATA_Y1?.length ? "transparent" : "blue",
            showMark: false,
            label: "Curva real de trabajo",
          },
          {
            data: DATA_Y2 || [0, 1, 2, 3, 4, 5],
            color: !DATA_Y2?.length ? "transparent" : "red",
            showMark: false,
            label: "Curva de desempeño de fabricante",
          },
          {
            data: DATA_Y3 || [0, 1, 2, 3, 4, 5],
            color: !DATA_Y3?.length ? "transparent" : "green",
            showMark: false,
            label: "Eficiencia",
          },
        ]}
      />
      <Stack direction="column" spacing={2} paddingLeft={2} paddingTop={1}>
        <Stack direction="row">
          <Box width={20} height={20} bgcolor="red" marginRight={1}></Box>
          Curva de desempeño de fabricante
        </Stack>
        <Stack direction="row">
          <Box width={20} height={20} bgcolor="blue" marginRight={1}></Box>
          Curva real de trabajo
        </Stack>
        <Stack direction="row">
          <Box width={20} height={20} bgcolor="green" marginRight={1}></Box>
          Eficiencia
        </Stack>
      </Stack>
      <br></br>
    </div>
  );
};
