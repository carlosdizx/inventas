import { async } from "@firebase/util";
import moment from "moment";
moment.locale("es");

const toDate = (dat: string): any => moment(dat).format("dddd Do MMMM, YYYY");

export const tipo_dato = (valor: any) => {
  let aux = "...";
  Object.keys(valor).forEach((key, index) => {
    if (key === "fecha") {
      aux = toDate(Object.values(valor)[index].seconds * 1000);
      //} else if (false) {
    } else {
      aux = "Error en formato";
    }
  });
  return aux;
};
