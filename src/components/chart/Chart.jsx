import { LineChart } from "@mui/x-charts";

export const Chart = ({ data }) => {
  const { DATA_X, DATA_Y1, DATA_Y2 } = data || {};
  return (
    <LineChart
      width={300}
      height={300}
      xAxis={[{ data: DATA_X || [0, 1, 2, 3, 4, 5],label:"Q (GPM)", }]}
      series={[
        {
          // data: [1, 5.5, 2, 8.5, 1.5, 5],
          data: DATA_Y1 || [0, 1, 2, 3, 4, 5],
          color: !DATA_Y1?.length ? "transparent" : "blue",
          showMark:false,
          label:"P (MCA)",
        },
        {
          // data: [1, 5.5, 2, 8.5, 1.5, 5],
          data: DATA_Y2 || [0, 1, 2, 3, 4, 5],
          color: !DATA_Y2?.length ? "transparent" : "red",
          showMark:false,
          label:"P (mca)",
        },
      ]}
    />
  );
};

// const DATA_X = [
//   0, 79.25, 158.5, 237.75, 317, 396.25, 475.5, 554.75, 634, 713.25, 792.5,
//   871.75, 951, 1030.25, 1109.5,
// ];
// const DATA_Y1 = [
//   null,
//   100.3283006,
//   101.5134666,
//   104.024776,
//   108.303229,
//   114.771141,
//   123.8369752,
//   135.8982504,
//   151.3434779,
//   170.5535407,
//   193.9027219,
//   221.7595015,
//   254.4871893,
//   292.4444396,
//   335.9856781,
// ];
// const DATA_Y2 = [
//   null,
//   165.138,
//   163.812,
//   162.486,
//   160.752,
//   158.406,
//   154.734,
//   147.696,
//   137.292,
// ];
