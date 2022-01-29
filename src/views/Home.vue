<template>
  <v-container>
    <tabla coleccion="personas" llave="nombres" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import tabla from "@/components/tabla.vue";

export default Vue.extend({
  name: "Home",
  components: { tabla },
  data: () => ({}),
});
</script>
