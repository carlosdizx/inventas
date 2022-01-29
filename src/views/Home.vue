<template>
  <v-container>
    <tabla
      class="my-2"
      coleccion="personas"
      titulo="Personas"
      :objeto="objeto"
      :columnas="columnas"
      llave="nombres"
    />
    <tabla
      class="my-2"
      coleccion="ventas"
      titulo="Ventas"
      :objeto="objeto"
      :columnas="columnas_ventas"
      llave="fecha"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import tabla from "@/components/tabla.vue";
import { Persona } from "@/models/Persona";

export default Vue.extend({
  name: "Home",
  components: { tabla },
  data: () => ({
    objeto: new Persona(),
    columnas: [
      { text: "Nombres", value: "nombres" },
      { text: "Apellidos", value: "apellidos" },
      { text: "Documento", value: "documento" },
      { text: "Fecha de nacimiento", value: "fecha_nacimiento" },
      { text: "Fecha de expedición", value: "fecha_expedicion" },
      { text: "Género", value: "genero" },
      { text: "Acciones", value: "acciones" },
    ],
    columnas_ventas: [
      { text: "Fecha de generación", value: "fecha_generacion" },
      { text: "Subtotal", value: "subtotal" },
      { text: "Descuento", value: "descuento" },
      { text: "Total", value: "total" },
    ],
  }),
});
</script>
