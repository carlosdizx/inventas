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
          {{ objeto_form }}
          <div v-for="(campo, index) in campos" :key="index">
            <v-text-field
              v-if="campo.type === 1"
              :label="campo.label"
              :prepend-icon="campo.prepend_icon"
              :type="campo.format"
              dense
              outlined
              :required="campo.required"
              v-model="objeto_form"
            />
            <v-combobox
              v-if="campo.type === 2"
              :label="campo.label"
              :prepend-icon="campo.prepend_icon"
              :items="campo.items"
              :item-text="campo.llave"
              :multiple="campo.multiple"
              hide-selected
              small-chips
              dense
              outlined
              required
            />
            <v-textarea
              v-if="campo.type === 3"
              outlined
              :label="campo.label"
              :prepend-icon="campo.prepend_icon"
              dense
              counter
            />
            <v-switch
              color="deep-purple"
              v-if="campo.type === 4"
              inset
              :label="campo.label"
            />
            <v-radio-group :label="campo.label" v-if="campo.type === 5" row>
              <br />
              <v-radio
                v-for="dato in campo.options"
                :key="dato.value"
                :label="dato.label"
                :value="dato.value"
              />
            </v-radio-group>
            <v-select
              v-if="campo.type === 6"
              :items="campo.items"
              :label="campo.label"
              solo
            />
          </div>
          <v-card-actions>
            <v-btn block color="success" type="submit">Registrar</v-btn>
          </v-card-actions>
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
    objeto_form: null,
    titulo_form: "",
    campos: [],
  }),
  props: {
    titulo: String,
    objeto: Object,
    campos_form: Array,
  },
  methods: {
    cargarInformacion() {
      this.titulo_form = this.titulo;
      this.objeto_form = this.objeto;
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
