<template>
  <v-container>
    <v-card color="orange" dark>
      <v-card-title>Listado con operaciones crud</v-card-title>
      <v-card-text>
        <listado titulo="Soy la tabla 1" :columnas="columnas" elevation="10" />
        <listado titulo="Soy la tabla 2" :columnas="columnas" elevation="10" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import listado from "../components/general/Listado.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: { listado },
  data: () => ({
    columnas: [],
  }),
  methods: {
    metodo() {
      const numero = 6;
      const characters = "abcdefghijklmnopqrstuvwxyz";
      const num = Math.floor(Math.random() * characters.length) + 1;
      for (let i = 0; i < numero; i++) {
        let nombre_columna = "";
        for (let i = 0; i < numero; i++) {
          nombre_columna += characters.charAt(Math.floor(Math.random() * num));
        }
        this.columnas.push({ text: nombre_columna, value: nombre_columna });
      }
      this.columnas.map(
        (columna) => (columna.text = columna.text.toUpperCase())
      );
    },
  },
  created() {
    this.metodo();
  },
});
</script>

<style scoped></style>
