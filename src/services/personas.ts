import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE } from "@/firebase/config";

export const LISTAR = async () => getDocs(collection(FIRESTORE, "personas"));
