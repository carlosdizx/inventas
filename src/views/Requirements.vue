<template>
  <v-container>
    <Tabla
      class="my-2"
      coleccion="requirements"
      titulo="Requerimientos"
      :columnas="columnas"
      llave="id_llave"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Tabla from "@/components/Tabla.vue";

export default Vue.extend({
  name: "Requirements",
  components: { Tabla },
  data: () => ({
    columnas: [
      { text: "Detalle", value: "detalle" },
      { text: "Descripción corta", value: "descripción_corta" },
      { text: "Autor", value: "autor" },
      { text: "Prioridad", value: "calificacion" },
      { text: "Tiempo (horas)", value: "tiempo" },
      { text: "estado", value: "estado" },
    ],
  }),
});
</script>

<style scoped></style>
