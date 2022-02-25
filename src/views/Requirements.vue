<template>
  <v-container>
    <Tabla
      class="my-2"
      coleccion="requirements"
      titulo="Requerimientos"
      :columnas="columnas"
      llave="id_llave"
      :campos_detalle="campos_detalle"
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
      { text: "Estado", value: "estado" },
    ],
    objeto: {},
    campos_form: [
      {
        label: "Campo 1",
        prepend_icon: "mdi-home",
        type: 1,
        format: "number",
        required: "required",
      },
      {
        label: "Campo 6",
        prepend_icon: "mdi-air-horn",
        type: 2,
        items: [
          { id: 1, nombre: "opc 1" },
          { id: 2, nombre: "opc 2" },
          { id: 3, nombre: "opc 3" },
        ],
        llave: "nombre",
      },
      { label: "Campo 7", prepend_icon: "mdi-air-horn", type: 3 },
      { label: "Campo 8", prepend_icon: "mdi-badge-account-alert", type: 4 },
      {
        label: "Campo 11",
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
      },
      {
        label: "Campo 12",
        prepend_icon: "mdi-badge-account-alert",
        type: 6,
        items: ["Text 1", "Text 2", "Text 3", "Text 4"],
      },
    ],
  }),
});
</script>

<style scoped></style>
