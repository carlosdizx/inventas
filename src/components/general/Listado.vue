<template>
  <v-container>
    <v-card color="indigo" elevation="20">
      <v-card-title>{{ titulo }}</v-card-title>
      <v-card>
        <!--
        Código que importa
        -->
        <v-data-table
          :headers="columnas"
          :items="filas"
          item-key="documento"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Buscar por documento"
              class="mx-4"
            />
          </template>
          <template v-slot:item.detalle="{ item }">
            <DetallesEgresado :datos="item" />
          </template>
        </v-data-table>
        <!--
        Código que importa
        -->
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Listado",
  data: () => ({
    search: "",
    columnasxd: [
      { text: "Documento", value: "documento" },
      { text: "Nombres", value: "nombres" },
      { text: "Apellidos", value: "apellidos" },
      { text: "Celular", value: "celular", sortable: false },
      { text: "Correo", value: "correo", sortable: false },
      { text: "Más detalles", value: "detalle" },
    ],
    filas: [],
  }),
  props: {
    titulo: String,
    columnas : Array,
  },
  methods: {
    filterOnlyCapsText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
};
</script>

<style scoped></style>
