<template>
  <v-card class="elevation-5" color="black">
    <v-card-title class="white--text">Listado de {{ titulo }} </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="columnas"
        :items="filas"
        :item-key="llave"
        class="elevation-2"
        :search="buscado"
        :custom-filter="filtrarPorLlave"
      >
        <template v-slot:top>
          <v-row class="mx-2">
            <v-col cols="10">
              <v-text-field
                v-model="buscado"
                :label="'Buscar por \'' + llave + '\''"
              />
            </v-col>
            <v-col cols="2">
              <Form :titulo="titulo" :campos="campos" />
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.acciones="{ item }">
          <v-btn
            fab
            color="deep-orange"
            dark
            small
            outlined
            @click="eliminar(item.id)"
            v-if="elimacion"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn fab color="amber" small outlined>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template v-slot:item.detalle="{ item }">
          <Detail :objeto="item" />
        </template>
        <template v-slot:item.calificacion="{ item }">
          <v-rating :value="item.calificacion" small dense readonly />
        </template>
        <template v-slot:item.estado="{ item }">
          <v-icon color="green" v-if="item.estado === 'Activo'">
            mdi-check-circle
          </v-icon>
          <v-icon color="red" v-if="item.estado === 'Inactivo'">
            mdi-close-circle
          </v-icon>
          <v-icon color="warning" v-if="item.estado === 'Pendiente'">
            mdi-alert-circle
          </v-icon>
          <v-icon color="blue" v-if="item.estado === 'Revisión'">
            mdi-cube-scan
          </v-icon>
          <v-icon color="green" v-if="item.estado === 'Aprobado'">
            mdi-cash-check
          </v-icon>
          <v-icon color="red" v-if="item.estado === 'Desaprobado'">
            mdi-cash-remove
          </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { BUSCAR, ELIMINAR, LISTAR } from "@/services/crud";
import Swal from "sweetalert2";
import { tipo_dato } from "../formats/formats";
import Detail from "@/components/Detail.vue";
import Form from "@/components/Form.vue";

export default Vue.extend({
  name: "Tabla",
  components: { Detail, Form },
  data: () => ({
    buscado: "",
    filas: [],
    campos: [
      { label: "Campo 1", prepend_icon: "mdi-home", type: 1 },
      { label: "Campo 2", prepend_icon: "mdi-car", type: 2 },
      { label: "Campo 3", prepend_icon: "mdi-airplane", type: 2 },
    ],
  }),
  props: {
    coleccion: String,
    titulo: String,
    columnas: Array,
    llave: String,
    elimacion: Boolean,
  },
  methods: {
    filtrarPorLlave(valor: any, buscado: any) {
      return (
        valor != null &&
        buscado != null &&
        typeof valor === "string" &&
        valor.toString().toLocaleUpperCase().indexOf(buscado.toUpperCase()) !==
          -1
      );
    },
    async cargarInformacion() {
      (await LISTAR(this.coleccion)).forEach((item) => {
        let obj = JSON.parse(JSON.stringify(item.data()));
        obj.id = item.id;
        Object.values(obj).map((value: any, index: number) => {
          if (typeof value === "object" && value) {
            value = tipo_dato(value);
            const key: string = Object.keys(obj)[index].toString();
            obj[key] = value;
          }
        });
        this.filas.push(obj);
      });
    },
    async eliminar(id: string) {
      Swal.fire({
        title: "¿Desea eliminar el registro?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        confirmButtonColor: "green",
        denyButtonText: `No aún no!`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await ELIMINAR(this.coleccion, id);
          this.filas = [];
          await this.cargarInformacion();
          await Swal.fire("Eliminado!", "", "success");
        }
      });
    },
  },
  async created() {
    await this.cargarInformacion();
  },
});
</script>
