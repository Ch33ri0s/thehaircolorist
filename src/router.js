import Vue from "vue";
import VueRouter from "vue-router";

import EventHub from "./events.js";

Vue.use(VueRouter);

import HomeView from "views/home.vue";
import ServicesView from "views/services.vue";
import ClassesView from "views/classes.vue";
import ShopView from "views/shop.vue";
import AboutView from "views/about.vue";

const router = new VueRouter({
    routes: [
        { path: '/', component: HomeView, name: "Home" },
        { path: '/services', component: ServicesView, name: "Services" },
        { path: '/classes', component: ClassesView, name: "Classes" },
        { path: '/shop', component: ShopView, name: "Shop" },
        { path: '/about', component: AboutView, name: "About" }
    ]
});

var analyticsRetries = 0;
const MAX_RETRIES = 6;
function attemptAnalyticsEvent(to) {
   try {
        ga("set", "page", to.fullPath);
        ga("send", "pageview");
        analyticsRetries = 0;
   } catch(err) {
        if(analyticsRetries < MAX_RETRIES) {
            analyticsRetries++;
            console.log("Google Analytics not loaded yet. Retrying...");
            setTimeout(() => {
                attemptAnalyticsEvent(to);
            }, 1000);
        } else {
            console.warn("Reached maximium analytics retries");
        }       
       
   }
}


router.beforeEach((to, from, next) => {
    document.title = to.name;
    EventHub.$emit("navigation", to, from);
    attemptAnalyticsEvent(to);
    next();
});

export default router;