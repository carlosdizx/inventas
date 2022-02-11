<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <v-btn color="red darken-4" dark @click="dialog = !dialog">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        small
        color="info darken-3"
        @click="cargarInformacion"
        v-bind="attrs"
        v-on="on"
        outlined
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-subheader>Detalle</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in llaves" :key="index">
            {{ item }}: {{ valores[index] }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-btn color="red darken-4" dark @click="dialog = !dialog">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-dialog>
</template>

<script>
export default {
  name: "Detail",
  data: () => ({
    dialog_details: false,
    llaves: [],
    valores: [],
  }),
  props: {
    campos_detalle: Array,
    objeto: Object,
  },
  methods: {
    async cargarInformacion() {
      this.llaves = await Object.keys(this.objeto);
      this.valores = await Object.values(this.objeto);
    },
  },
};
</script>

<style scoped></style>
