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
    campos_form: [
      { label: "Campo 1", prepend_icon: "mdi-home", type: 1 },
      { label: "Campo 2", prepend_icon: "mdi-car", type: 2 },
      { label: "Campo 3", prepend_icon: "mdi-airplane", type: 2 },
      { label: "Campo 3", prepend_icon: "mdi-airplane", type: 2 },
      { label: "Campo 3", prepend_icon: "mdi-airplane", type: 2 },
    ],
  }),
});
</script>

<style scoped></style>
