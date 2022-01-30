import moment from "moment";

export const toDate = (dat: string): any =>
  moment(dat).lang("es").format("dddd Do MMMM, YYYY");
