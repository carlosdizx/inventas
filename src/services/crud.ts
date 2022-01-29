import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE } from "@/firebase/config";

export const LISTAR = async (coleccion: string) =>
  getDocs(collection(FIRESTORE, coleccion));
