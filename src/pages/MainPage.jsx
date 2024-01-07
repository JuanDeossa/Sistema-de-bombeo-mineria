import { Box, Button, Paper, Stack } from "@mui/material";
import { Chart } from "../components/chart/Chart";
import { BasicTable } from "../components/basicTable/BasicTable";
import { useEffect, useState } from "react";
import { Form1 } from "../components/form1/Form1";
import { getAllEquipments, getEquipmentByPK } from "../utils/backend/api/GET";
import { initialProcessValues } from "../utils/constants";

export const MainPage = () => {
  const [dataToChart, setDataToChart] = useState({
    eqName:"",
    GPM: null,
    MCA: null,
    mca: null,
  });

  useEffect(() => {
    // console.log(getAllEquipments());
    // console.log(getEquipmentByPK("Tsurumi-6110"));
  }, []);

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={5}
      paddingTop={4}
      width={390}
      // border="1px solid gray"
      borderBottom="0px"
    >
      <Paper elevation={4}>
        {dataToChart.GPM?<Chart
          data={{
            eqName:dataToChart?.eqName,
            DATA_X: dataToChart?.GPM,
            DATA_Y1: dataToChart?.MCA,
            DATA_Y2: dataToChart?.mca,
          }}
        />:null}
      </Paper>
      <Form1 setDataToChart={setDataToChart} />
    </Stack>
  );
};
