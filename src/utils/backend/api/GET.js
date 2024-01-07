import { round } from "../../../helpers/math";
import { caudalFC, presionFC } from "../../constants";
import EQUIPMENTS from "../entities/EQUIPMENTS.json";

export const getAllEquipments = () => {
  return EQUIPMENTS?.map((eq) => {
    return {
      ...eq,
      values: eq?.values?.map((val, i) => ({
        id: i,
        ...val,
        caudalGPM: round(val?.caudal * caudalFC),
        presionMCA: round(val?.presion * presionFC),
      })),
    };
  });
};
//
export const getEquipmentByPK = (pk) => {
  const equipmentFound = EQUIPMENTS?.find((eq) => eq.id === pk);
  if (!equipmentFound) {
    return;
  }
  return {
    ...equipmentFound,
    values: equipmentFound?.values?.map((val, i) => ({
      id: i,
      ...val,
      caudalGPM: round(val?.caudal * caudalFC),
      presionMCA: round(val?.presion * presionFC),
    })),
  };
};

const INTERVAL = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];

export const calculateResult = (data) => {
  const { P, R, E } = data;
  let presion = P;
  return {
    name: E,
    values: INTERVAL.map((caudal) => {
      const caudalM3S = caudal / 1000;
      const perdidas =  R * caudalM3S ** 1.852;
      presion = presion+perdidas;
      return {
        caudalLS: caudal,
        cauldalGPM: round(caudal * caudalFC),
        caudalM3S: round(caudalM3S,6),
        perdidas: round(perdidas,6),
        presionMCA: presion,
      };
    }),
  };
};
