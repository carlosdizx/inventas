<template>
  <v-data-table
    :headers="columnas"
    :items="filas"
    item-key="documento"
    class="elevation-5"
    :search="buscado"
    :custom-filter="filtradoTextoMayusculas"
  >
    <template v-slot:top>
      <v-text-field v-model="buscado" label="Buscar por ..." class="mx-4" />
    </template>
  </v-data-table>
</template>

<script>
import { LISTAR } from "@/services/crud";

export default {
  name: "tabla",
  data: () => ({
    buscado: "",
    columnas: [],
    filas: [],
    coleccion: "personas",
  }),
  methods: {
    filtradoTextoMayusculas(valor, buscado) {
      return (
        valor != null &&
        buscado != null &&
        typeof valor === "string" &&
        valor.toString().toLocaleUpperCase().indexOf(buscado) !== -1
      );
    },
    async cargarInformacion() {
      (await LISTAR(this.coleccion)).forEach((item) =>
        this.filas.push(item.data())
      );
      console.log(this.filas);
    },
  },
  async created() {
    await this.cargarInformacion();
  },
};
</script>
