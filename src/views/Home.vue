<template>
  <v-container>
    <tabla />
  </v-container>
</template>

<script>
import Vue from "vue";
import tabla from "@/components/tabla";

export default Vue.extend({
  name: "Home",
  components: { tabla },
  data: () => ({}),
});
</script>
