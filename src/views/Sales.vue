<template>
  <v-container>
    <CRUD
      class="my-2"
      coleccion="sales"
      :paginador="paginador"
      titulo="Ventas"
      :columnas="columnas"
      llave="id"
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
      { text: "Subtotal $", value: "subtotal" },
      { text: "Descuento %", value: "descuento" },
      { text: "Total $", value: "total" },
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
