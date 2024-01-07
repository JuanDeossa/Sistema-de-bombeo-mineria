/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import modStyles from './Chart.module.css'


export const Chart = ({ data }) => {
  const { eqName, DATA_X, DATA_Y1, DATA_Y2, DATA_Y3 } = data || {};
  return (
    <div className={modStyles.Chart}>
      <Typography variant="h6" paddingLeft={2} paddingTop={1}>
        {eqName}
      </Typography>
      <LineChart
        width={300}
        height={300}
        title="Nooo"
        xAxis={[{ data: DATA_X || [0, 1, 2, 3, 4, 5], label: "Q (GPM)" }]}
        series={[
          {
            data: DATA_Y1 || [0, 1, 2, 3, 4, 5],
            color: !DATA_Y1?.length ? "transparent" : "blue",
            showMark: false,
            label: "P (MCA)",
          },
          {
            data: DATA_Y2 || [0, 1, 2, 3, 4, 5],
            color: !DATA_Y2?.length ? "transparent" : "red",
            showMark: false,
            label: "P (mca)",
          },
          {
            data: DATA_Y3 || [0, 1, 2, 3, 4, 5],
            color: !DATA_Y3?.length ? "transparent" : "green",
            showMark: false,
            label: "Shaft Power (Kw)",
          },
        ]}
      />
    </div>
  );
};
