<template>
  <v-container>
    <v-card color="orange" dark>
      <v-card-title>Listado con operaciones crud</v-card-title>
      <v-card-text>
        <listado />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import listado from "../components/general/Listado.vue";

export default {
  name: "general",
  components: { listado },
};
</script>

<style scoped></style>
