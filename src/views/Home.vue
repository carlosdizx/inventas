<template>
  <v-container>
    <div v-for="(persona, index) of personas" :key="index">
      {{ persona }}
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";
import { LISTAR } from "@/services/crud";

export default Vue.extend({
  name: "Home",
  data: () => ({
    personas: [],
  }),
  components: {},
  async mounted() {
    const listado = await LISTAR("personas");
    listado.forEach((item) => this.personas.push(item.data()));
  },
});
</script>
