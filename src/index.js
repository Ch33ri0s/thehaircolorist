import 'stylesheets/app.scss';
import Vue from "vue";
import VueRouter from "vue-router";
import "@fortawesome/fontawesome-pro/js/all.js";

import AppComponent from "views/app.vue";

const App = new Vue(AppComponent);
App.$mount("#app");