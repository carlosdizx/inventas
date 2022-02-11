<template>
  <v-container>
    <CRUD
      class="my-2"
      coleccion="personas"
      :paginador="paginador"
      titulo="Personas"
      :columnas="columnas"
      llave="documento"
      :elimacion="true"
    />
  </v-container>
</template>

<script lang="ts">
import CRUD from "@/components/CRUD.vue";
export default {
  name: "Sales",
  components: { CRUD },
  data: () => ({
    paginador: 15,
    columnas: [
      { text: "Detalle", value: "detalle", align: "start", sortable: false },
      { text: "Nombres", value: "nombres" },
      { text: "Apellidos", value: "apellidos" },
      { text: "Documento", value: "documento" },
      { text: "Fecha de nacimiento", value: "fecha_nacimiento" },
      { text: "Fecha de expedición", value: "fecha_expedicion" },
      { text: "Género", value: "genero" },
      { text: "Salario", value: "salario" },
      { text: "Calificación", value: "calificacion" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "acciones", sortable: false },
    ],
    campos_detalle: [
      { text: "Subtotal", value: "subtotal" },
      { text: "Descuento %", value: "descuento" },
      { text: "Total", value: "total" },
    ],
  }),
};
</script>

<style scoped></style>
