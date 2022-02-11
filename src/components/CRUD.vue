<template>
  <v-card elevation="5" color="black">
    <v-card-title class="white--text">Listado de {{ titulo }} </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="columnas"
        :items="filas"
        :item-key="llave"
        :search="buscado"
        :items-per-page="paginador"
        :custom-filter="filtrarPorLlave"
        multi-sort
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
              <Form :titulo="titulo" :campos_form="campos_form" />
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
        <template v-slot:item.calificacion="{ item }">
          <v-tooltip color="primary" bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">
                <v-rating
                  :value="item.calificacion"
                  small
                  dense
                  readonly
                  half-increments
                />
              </span>
            </template>
            <span>{{ item.calificacion }}</span>
          </v-tooltip>
        </template>
        <template v-slot:item.estado="{ item }">
          <v-tooltip color="green" bottom v-if="item.estado === 'Activo'">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="green" v-bind="attrs" v-on="on">
                mdi-check-circle
              </v-icon>
            </template>
            <span>Activo</span>
          </v-tooltip>
          <v-tooltip color="red" bottom v-if="item.estado === 'Inactivo'">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="red" v-bind="attrs" v-on="on">
                mdi-close-circle
              </v-icon>
            </template>
            <span>Inactivo</span>
          </v-tooltip>
          <v-tooltip color="warning" bottom v-if="item.estado === 'Pendiente'">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="warning" v-bind="attrs" v-on="on">
                mdi-alert-circle
              </v-icon>
            </template>
            <span>Pendiente</span>
          </v-tooltip>
          <v-tooltip color="primary" bottom v-if="item.estado === 'Revisión'">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="primary" v-bind="attrs" v-on="on">
                mdi-cube-scan
              </v-icon>
            </template>
            <span>Revisión</span>
          </v-tooltip>
          <v-tooltip color="green" bottom v-if="item.estado === 'Aprobado'">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="green" v-bind="attrs" v-on="on">
                mdi-cash-check
              </v-icon>
            </template>
            <span>Aprobado</span>
          </v-tooltip>
          <v-tooltip color="red" bottom v-if="item.estado === 'Desaprobado'">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="red" v-bind="attrs" v-on="on">
                mdi-cash-remove
              </v-icon>
            </template>
            <span>Desaprobado</span>
          </v-tooltip>
        </template>
        <template v-slot:item.detalle="{ item }">
          <v-dialog v-model="dialog_details" persistent max-width="600">
            <v-btn
              color="red darken-4"
              dark
              @click="dialog_details = !dialog_details"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                small
                color="info darken-3"
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
                  {{ item }}
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              color="red darken-4"
              dark
              @click="dialog_details = !dialog_details"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ELIMINAR, LISTAR } from "@/services/crud";
import { tipo_dato } from "@/formats/formats";
import Swal from "sweetalert2";

export default Vue.extend({
  name: "CRUD",
  data: () => ({
    buscado: "",
    filas: [],
    dialog_details: false,
  }),
  props: {
    coleccion: String,
    paginador: Number,
    titulo: String,
    columnas: Array,
    llave: String,
    elimacion: Boolean,
    campos_detalle: Array,
    campos_form: Array,
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
        const obj = JSON.parse(JSON.stringify(item.data()));
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

<style scoped></style>
