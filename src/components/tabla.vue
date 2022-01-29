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
            <v-text-field
              v-model="buscado"
              :label="'Buscar por \'' + llave + '\''"
              class="mx-6"
            />
            <v-btn class="mx-4 my-2" fab dark color="primary">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </template>
        <template v-slot:item.acciones="{}">
          <v-btn color="amber" fab small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn dark color="deep-orange" fab small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
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
    filas: [],
  }),
  props: {
    coleccion: String,
    titulo: String,
    objeto: Object,
    columnas: Array,
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
      (await LISTAR(this.coleccion)).forEach((item) => {
        this.filas.push(item.data());
      });
      const timestamp = 1643346000;
    },
  },
  async created() {
    await this.cargarInformacion();
  },
});
</script>
