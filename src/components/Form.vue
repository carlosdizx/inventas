<template>
  <v-dialog v-model="dialog_form" persistent max-width="600">
    <v-btn color="red darken-4" dark @click="dialog_form = !dialog_form">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab color="info darken-3" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card class="py-2">
      <v-card-text>
        <h1>Formulario de creación para {{ titulo_form }}</h1>
      </v-card-text>
      <v-card-text>
        <v-form autocomplete="off">
          <div v-for="(campo, index) in campos" :key="index">
            <v-text-field
              v-if="campo.type === 1"
              :label="campo.label"
              :prepend-icon="campo.prepend_icon"
            />
            <v-combobox
              v-if="campo.type === 2"
              :label="campo.label"
              :prepend-icon="campo.prepend_icon"
            />
          </div>
        </v-form>
      </v-card-text>
    </v-card>
    <v-btn color="red darken-4" dark @click="dialog_form = !dialog_form">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-dialog>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    dialog_form: false,
    titulo_form: "",
    campos: [],
  }),
  props: {
    titulo: String,
    campos_form: Array,
  },
  methods: {
    cargarInformacion() {
      this.titulo_form = this.titulo;
      this.campos_form.forEach((campo) => {
        this.campos.push(campo);
      });
    },
  },
  created() {
    this.cargarInformacion();
  },
};
</script>

<style scoped></style>
