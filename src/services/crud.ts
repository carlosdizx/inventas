import { collection, getDocs, addDoc } from "firebase/firestore";
import { FIRESTORE } from "@/firebase/config";

export const LISTAR = async (coleccion: string) =>
  getDocs(collection(FIRESTORE, coleccion));

export const GUARDAR = async (colection: string, datos: any) =>
  addDoc(collection(FIRESTORE, colection), datos);

/*
try {
    const docRef = await addDoc(collection(FIRESTORE, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
 */
