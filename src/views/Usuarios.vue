<template>
  <v-container>
    <Tabla
      class="my-2"
      coleccion="usuarios"
      titulo="Usuarios"
      :columnas="columnas"
      llave="documento"
      :campos_detalle="campos_detalle"
      :campos_form="campos_form"
    />
  </v-container>
</template>

<script lang="ts">
import Tabla from "@/components/Tabla.vue";
import { CAMPOS } from "@/models/Usuarios/FormUsuario";
import Vue from "vue";

export default Vue.extend({
  name: "Usuarios",
  components: { Tabla },
  data: () => ({
    columnas: [
      { text: "Detalle", value: "detalle" },
      { text: "Documento", value: "documento" },
      { text: "Nombres", value: "nombres" },
      { text: "Apellidos", value: "apellidos" },
      { text: "Correo", value: "correo" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "acciones" },
    ],
    campos_detalle: [
      { text: "Documento", value: "documento" },
      { text: "Nombres", value: "nombres" },
      { text: "Apellidos", value: "apellidos" },
      { text: "Correo", value: "correo" },
      { text: "Estado", value: "estado" },
      { text: "Celular", value: "celular" },
      { text: "Dirección", value: "direccion" },
      { text: "Género", value: "genero" },
      { text: "Fecha de nacimiento", value: "fecha_nacimiento" },
    ],
    campos_form: CAMPOS,
  }),
});
</script>

<style scoped></style>
