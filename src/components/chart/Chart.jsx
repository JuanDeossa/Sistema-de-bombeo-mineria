/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export const Chart = ({ data }) => {
  const { DATA_X, DATA_Y1, DATA_Y2, eqName } = data || {};
  return (
    <>
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
        ]}
      />
    </>
  );
};
