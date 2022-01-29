<template>
  <v-data-table
    :headers="columnas"
    :items="filas"
    :item-key="llave"
    class="elevation-5"
    :search="buscado"
    :custom-filter="filterOnlyCapsText"
  >
    <template v-slot:top>
      <v-text-field
        v-model="buscado"
        :label="'Buscar por \'' + llave + '\''"
        class="mx-4"
      />
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { LISTAR } from "@/services/crud";
import { Persona } from "@/models/Persona";

export default Vue.extend({
  name: "tabla",
  data: () => ({
    buscado: "",
    columnas: [],
    filas: [],
  }),
  props: {
    coleccion: String,
    llave: String,
  },
  methods: {
    filterOnlyCapsText(value: any, search: any) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search.toUpperCase()) !==
          -1
      );
    },
    async cargarInformacion() {
      const atributos = Object.keys(new Persona());
      await atributos.forEach((atributo) => {
        const columna = { text: atributo.toUpperCase(), value: atributo };
        this.columnas.push(columna);
      });
      (await LISTAR(this.coleccion)).forEach((item) =>
        this.filas.push(item.data())
      );
    },
  },
  async created() {
    await this.cargarInformacion();
  },
});
</script>
