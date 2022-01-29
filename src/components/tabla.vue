<template>
  <v-card class="elevation-5" color="primary">
    <v-card-title class="white--text">Listado de {{ titulo }} </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="columnas"
        :items="filas"
        :item-key="llave"
        class="elevation-2"
        :search="buscado"
        :custom-filter="filtrarPorLlave"
      >
        <template v-slot:top>
          <v-row>
            <v-col cols="11">
              <v-text-field
                v-model="buscado"
                :label="'Buscar por \'' + llave + '\''"
                class="mx-4"
              />
            </v-col>
            <v-col cols="1">
              <v-btn class="mx-2" fab dark color="primary">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
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
    titulo: String,
    llave: String,
  },
  methods: {
    filtrarPorLlave(value: any, search: any) {
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
