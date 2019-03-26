<template lang="pug">
.app
    navbar
    //- header
    //-     img.logo(src="resources/busy-logo.png")
    //-     h1 haircolorist
    //-     nav
    //-         li: router-link(exact to="/") Home
    .view-wrapper
        transition(name="fade")
            router-view 
    footer
        span Created & Designed by Tenyson Partridge {{year}}
        span
            i.fab.fa-facebook-f
            i.fab.fa-instagram
            i.fab.fa-twitter

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
    width: 500px;
    footer {
        display: flex;
        background: #bdccb7;
        height: 180px;
        justify-content: space-evenly;
        align-items: center;
        span {
            color: white;
            padding: 10px;
            svg {
                font-size: 24px;
                color: white;
                margin: 14px;
                &:hover {
                    color: #f2f2f2;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
