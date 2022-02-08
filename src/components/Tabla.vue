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
          <v-row>
            <v-text-field
              v-model="buscado"
              :label="'Buscar por \'' + llave + '\''"
              class="mx-6"
            />
            <v-btn class="mx-4 my-6" fab dark color="info">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </template>
        <template v-slot:item.acciones="{}">
          <v-btn fab color="deep-orange" dark small outlined>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn fab color="amber" small outlined>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template v-slot:item.detalle="{}">
          <v-btn icon color="primary" outlined>
            <v-icon>mdi-eye</v-icon>
          </v-btn>
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
import { BUSCAR, ELIMINAR, GUARDAR, LISTAR } from "@/services/crud";
import Swal from "sweetalert2";
import { tipo_dato, toDateWithDetail } from "../formats/formats";
import { Persona } from "@/models/Persona";
import { lang } from "moment";

export default Vue.extend({
  name: "Tabla",
  data: () => ({
    buscado: "",
    filas: [],
  }),
  props: {
    coleccion: String,
    titulo: String,
    columnas: Array,
    llave: String,
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
      /*
      for (let i = 0; i < 10; i++) {
        const persona: Persona = {
          nombres: "Nombres_" + i,
          apellidos: "Apellidos" + i,
          documento: 1082749250 + i + "",
          fecha_nacimiento: { fecha: new Date() },
          fecha_expedicion: { fecha: new Date() },
          genero: "M",
          correo: "correo@mail_" + i,
          celular: "3026508102",
          direccion: "Calle " + i,
          salario: { moneda: 5000.56 },
          calificacion: { calificacion: "4.5" },
          estado: "Activo",
        };
        await GUARDAR(this.coleccion, persona);
      }
       */
      (await LISTAR(this.coleccion)).forEach((item) => {
        const obj = item.data();
        obj.id = item.id;
        Object.values(obj).map((value, index) => {
          if (typeof value === "object") {
            value = tipo_dato(value);
            const key: string = Object.keys(obj)[index].toString();
            obj[key] = value;
          }
        });
        this.filas.push(obj);
      });
      //let documento = await BUSCAR(this.coleccion, "1PMqZ8yCWozDHTjWVuh0");
      //let documento = await ELIMINAR(this.coleccion, "1PMqZ8yCWozDHTjWVuh0");
    },
  },
  async created() {
    await this.cargarInformacion();
  },
});
</script>
