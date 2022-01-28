import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE } from "@/firebase/config";

const coleccion = "personas";

export const LISTAR = async () => getDocs(collection(FIRESTORE, coleccion));
