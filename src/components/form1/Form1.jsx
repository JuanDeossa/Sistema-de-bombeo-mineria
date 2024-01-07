import { DevTool } from "@hookform/devtools";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { round } from "../../helpers/math";
import { initialProcessValues } from "../../utils/constants";
import {
  calculateResult,
  getAllEquipments,
  getEquipmentByPK,
} from "../../utils/backend/api/GET";
import { useEffect } from "react";

const EQUIPMENTS = getAllEquipments();

export const Form1 = ({ setDataToChart }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      E: EQUIPMENTS[0].id,
      P: 100,
      D: initialProcessValues?.D,
      L: initialProcessValues?.L,
      C: initialProcessValues?.C,
    },
  });

  const submitAction = (data) => {
    const newData = {
      E: data.E,
      P: round(data.P, 6),
      D: round(data.D, 6),
      L: round(data.L, 6),
      C: round(data.C, 6),
    };
    const { C, D, L, P, E } = newData;
    const R = round(10.67 * (1 / C ** 1.852) * (L / D ** 4.87), 6);
    // console.log(newData, R);
    // return

    const res = calculateResult({ P, R, E });
    console.log(res)
    const equipmentProps = getEquipmentByPK(res.name);

    const cauldalGPMArray = res?.values?.map((value) => value?.cauldalGPM);
    const presionMCAArray = res?.values?.map((value) => value?.presionMCA);
    const presionMcaArray = equipmentProps?.values?.map(
      (value) => value?.presionMCA
    );

    setDataToChart((prev) => ({
      ...prev,
      eqName:res.name,
      GPM: cauldalGPMArray,
      MCA: presionMCAArray,
      mca: presionMcaArray,
    }));
  };

  return (
    <Box width={300}>
      <form onSubmit={handleSubmit(submitAction)}>
        <Stack direction="column" spacing={2}>
          <TextField
            select
            defaultValue={EQUIPMENTS[0].id}
            label="Selecciona un Equipo"
            {...register("E", {
              required: true,
            })}
          >
            {EQUIPMENTS?.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="PRESIÓN (mca)"
            variant="outlined"
            type="text"
            size="small"
            {...register("P", {
              required: true,
              pattern: /^[0-9.]+$/,
            })}
          />
          <Divider />
          <TextField
            id="outlined-basic"
            label="Diámetro interno (m)"
            variant="outlined"
            type="text"
            size="small"
            {...register("D", {
              required: true,
              pattern: /^[0-9.]+$/,
            })}
          />
          <TextField
            id="outlined-basic"
            label="Longitud (m)"
            variant="outlined"
            type="text"
            size="small"
            {...register("L", {
              required: true,
              pattern: /^[0-9.]+$/,
            })}
          />
          <TextField
            id="outlined-basic"
            label="C"
            variant="outlined"
            type="text"
            size="small"
            {...register("C", {
              required: true,
              pattern: /^[0-9.]+$/,
            })}
          />
          {/* <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            type="text"
            size="small"
            {...register("R", {
              required: true,
              pattern: /^[0-9.]+$/,
              disabled: true,
            })}
          /> */}
          <Button type="submit" variant="contained">
            Calcular
          </Button>
        </Stack>
        <DevTool control={control} />
      </form>
    </Box>
  );
};
