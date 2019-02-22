<template lang="pug">
.app
    navbar
    //- header
    //-     img.logo(src="resources/busy-logo.png")
    //-     h1 haircolorist
    //-     nav
    //-         li: router-link(exact to="/") Home
    .view-wrapper
        router-view 
    footer
        span Created & Designed by Tenyson Partridge {{year}}
</template>

<script>
import router from "../router.js";
import navbar from "../components/navbar.vue";

export default {
    router,
    components: { navbar },
    data () {
        return {
            year: (new Date()).getFullYear()
        }
    }
}
</script>

<style lang="scss">
.app {
    max-width: 100%;
    overflow: hidden;
    footer {
        display: flex;
        background: #bdccb7;
        padding: 100px;
        justify-content: center;
        span {
            color: white;
        }
    }
}
</style>
