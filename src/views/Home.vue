<template>
  <v-container>
    <tabla
      coleccion="personas"
      titulo="Personas"
      llave="nombres"
      :objeto="objeto"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import tabla from "@/components/tabla.vue";
import { Persona } from "@/models/Persona";

export default Vue.extend({
  name: "Home",
  components: { tabla },
  data: () => ({
    objeto: new Persona(),
  }),
});
</script>
