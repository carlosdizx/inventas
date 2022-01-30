<template>
  <v-card class="elevation-5" color="black">
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
            <v-btn class="mx-4 my-6" fab dark color="info">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-row>
          <v-btn color="green" class="mx-4 my-4" dark>
            <v-icon>mdi-microsoft-excel</v-icon>
          </v-btn>
          <v-btn color="orange" class="mx-4 my-4" dark>
            <v-icon>mdi-air-horn</v-icon>
          </v-btn>
          <v-btn color="deep-orange" class="mx-4 my-4" dark>
            <v-icon>mdi-allergy</v-icon>
          </v-btn>
          <v-btn color="deep-purple" class="mx-4 my-4" dark>
            <v-icon>mdi-virus</v-icon>
          </v-btn>
          <v-btn color="cyan" class="mx-4 my-4" dark>
            <v-icon>mdi-account-key</v-icon>
          </v-btn>
          <v-btn color="indigo" class="mx-4 my-4" dark>
            <v-icon>mdi-charity</v-icon>
          </v-btn>
        </template>
        <template v-slot:item.acciones="{}">
          <v-btn fab color="deep-orange" dark small outlined>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn fab color="amber" small outlined>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template v-slot:item.detalle="{}">
          <v-btn icon color="primary" outlined>
            <v-icon>mdi-eye</v-icon>
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
  name: "Tabla",
  data: () => ({
    buscado: "",
    filas: [],
  }),
  props: {
    coleccion: String,
    titulo: String,
    columnas: Array,
    llave: String,
  },
  methods: {
    filtrarPorLlave(valor: any, buscado: any) {
      return (
        valor != null &&
        buscado != null &&
        typeof valor === "string" &&
        valor.toString().toLocaleUpperCase().indexOf(buscado.toUpperCase()) !==
          -1
      );
    },
    async cargarInformacion() {
      (await LISTAR(this.coleccion)).forEach((item) => {
        const obj: any = item.data();
        obj.id = item.id;
        this.filas.push(obj);
      });
    },
  },
  async created() {
    await this.cargarInformacion();
  },
});
</script>
