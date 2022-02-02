<template>
  <v-container>
    <Tabla
      class="my-2"
      coleccion="personas"
      titulo="Personas"
      :columnas="columnas"
      llave="documento"
    />
    <!--
    <Tabla
      class="my-2"
      coleccion="ventas"
      titulo="Ventas"
      :columnas="columnas_ventas"
      llave="fecha"
    />
    -->
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Tabla from "@/components/Tabla.vue";

export default Vue.extend({
  name: "Home",
  components: { Tabla },
  data: () => ({
    columnas: [
      { text: "Detalle", value: "detalle" },
      { text: "Nombres", value: "nombres" },
      { text: "Apellidos", value: "apellidos" },
      { text: "Documento", value: "documento" },
      { text: "Fecha de nacimiento", value: "fecha_nacimiento" },
      { text: "Fecha de expedición", value: "fecha_expedicion" },
      { text: "Género", value: "genero" },
      { text: "Salario", value: "salario" },
      { text: "Calificación", value: "calificacion" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "acciones" },
    ],
    columnas_ventas: [
      { text: "Detalle", value: "detalle" },
      { text: "Fecha de generación", value: "fecha_generacion" },
      { text: "Subtotal", value: "subtotal" },
      { text: "Descuento", value: "descuento" },
      { text: "Total", value: "total" },
    ],
  }),
});
</script>
