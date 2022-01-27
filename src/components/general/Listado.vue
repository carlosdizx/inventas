<template>
  <v-container>
    <v-card color="indigo" :elevation="elevation">
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
  }),
  props: {
    titulo: String,
    columnas : Array,
    elevation : String,
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
