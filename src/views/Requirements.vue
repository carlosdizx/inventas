<template>
  <v-container>
    <Tabla
      class="my-2"
      coleccion="requirements"
      titulo="Requerimientos"
      :columnas="columnas"
      llave="id_llave"
      :campos_form="campos_form"
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
      { text: "ID RF", value: "id_rf" },
      { text: "Descripción corta", value: "descripción_corta" },
      { text: "Autor", value: "autor" },
      { text: "Prioridad", value: "calificacion" },
      { text: "Tiempo (horas)", value: "tiempo" },
      { text: "estado", value: "estado" },
    ],
    campos_detalle: [
      { text: "ID RF", value: "id_rf" },
      { text: "Descripción corta", value: "descripción_corta" },
      { text: "Autor", value: "autor" },
      { text: "Prioridad", value: "calificacion" },
      { text: "Tiempo (horas)", value: "tiempo" },
      { text: "estado", value: "estado" },
    ],
    campos_form: [
      { label: "Campo 1", prepend_icon: "mdi-home", type: 1 },
      { label: "Campo 2", prepend_icon: "mdi-car", type: 2 },
      { label: "Campo 3", prepend_icon: "mdi-airplane", type: 2 },
      { label: "Campo 4", prepend_icon: "mdi-arrow-left", type: 2 },
      { label: "Campo 5", prepend_icon: "mdi-close", type: 2 },
      { label: "Campo 6", prepend_icon: "mdi-air-horn", type: 2 },
      { label: "Campo 7", prepend_icon: "mdi-air-horn", type: 3 },
      { label: "Campo 8", prepend_icon: "mdi-badge-account-alert", type: 4 },
      { label: "Campo 9", prepend_icon: "mdi-badge-account-alert", type: 4 },
      { label: "Campo 10", prepend_icon: "mdi-badge-account-alert", type: 4 },
      { label: "Campo 11", prepend_icon: "mdi-badge-account-alert", type: 5 },
      {
        label: "Campo 12",
        type: 5,
        options: [
          { value: "1", label: "Opc 1" },
          { value: "2", label: "Opc 2" },
          { value: "3", label: "Opc 3" },
          { value: "4", label: "Opc 4" },
          { value: "5", label: "Opc 5" },
          { value: "6", label: "Opc 6" },
          { value: "7", label: "Opc 7" },
          { value: "8", label: "Opc 8" },
        ],
        model: {},
      },
    ],
  }),
});
</script>

<style scoped></style>
