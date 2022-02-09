<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <v-btn color="red darken-4" dark @click="dialog = !dialog">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab color="info darken-3" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-titulo>
        <h1>Formulario de creación para {{ titulo }}</h1>
      </v-card-titulo>
      <v-card-text>
        <v-form autocomplete="off">
          <v-text-field label="algo de texto" prepend-icon="mdi-home" counter />
          <v-text-field label="algo de texto" prepend-icon="mdi-car" counter />
        </v-form>
      </v-card-text>
    </v-card>
    <v-btn color="red darken-4" dark @click="dialog = !dialog">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-dialog>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    dialog: false,
  }),
  props: {
    titulo: String,
    campos: Array,
  },
};
</script>

<style scoped></style>
