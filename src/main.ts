import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import firebase from "firebase/app";
import database from "firebase/database";
import storage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFzkqsaf-5MDzXHlO-hOFSUI5fd-4iZLw",
  authDomain: "inventas-app.firebaseapp.com",
  databaseURL: "https://inventas-app-default-rtdb.firebaseio.com",
  projectId: "inventas-app",
  storageBucket: "inventas-app.appspot.com",
  messagingSenderId: "533111161621",
  appId: "1:533111161621:web:33225404310a005e489f1c",
  measurementId: "G-NK2YTKY68M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DATABASE = database;
export const STORAGE = storage;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
