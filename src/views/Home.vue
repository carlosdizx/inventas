<template>
  <v-container>
    <div v-for="(persona, index) of personas" :key="index">
      {{ persona }}
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { LISTAR } from "@/services/personas";

export default Vue.extend({
  name: "Home",
  data: () => ({
    personas: [],
  }),
  components: {},
  async mounted() {
    const listado = await LISTAR();
    listado.forEach((item) => this.personas.push(item.data()));
  },
});
</script>
