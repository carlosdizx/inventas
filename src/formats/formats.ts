import { async } from "@firebase/util";
import moment from "moment";
moment.locale("es");

const toDate = (dat: any) => moment(dat).format("dddd Do MMMM, YYYY");

const toNumber = (dat: any) => new Intl.NumberFormat().format(dat);

export const tipo_dato = (valor: any) => {
  let aux = null;
  Object.keys(valor).forEach((key, index) => {
    const dato: any = Object.values(valor)[index];
    if (key === "fecha") {
      aux = toDate(dato.seconds * 1000);
    } else if (key === "numero") {
      aux = toNumber(dato);
    } else if (key === "moneda") {
      aux = "$" + toNumber(dato);
    } else if (key === "calificacion") {
      aux = parseInt(dato);
    } else {
      console.log(dato);
      aux = "Error en formato";
    }
  });
  return aux;
};
