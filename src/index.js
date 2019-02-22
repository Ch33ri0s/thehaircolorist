import 'stylesheets/app.scss';
import Vue from "vue";
import VueRouter from "vue-router";
import "@fortawesome/fontawesome-pro/js/all.js";
import firebase from 'firebase';

import AppComponent from "views/app.vue";


var config = {
  apiKey: "AIzaSyARoYRXjTGhElecXINWjIRKDB-iBhQLOQI",
  authDomain: "thehaircolorist-7c03f.firebaseapp.com",
  databaseURL: "https://thehaircolorist-7c03f.firebaseio.com",
  projectId: "thehaircolorist-7c03f",
  storageBucket: "thehaircolorist-7c03f.appspot.com",
  messagingSenderId: "931332233146"
};
firebase.initializeApp(config);

const App = new Vue(AppComponent);
App.$mount("#app");