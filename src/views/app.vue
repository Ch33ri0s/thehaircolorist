<template lang="pug">
.app
    header
        img.logo(src="resources/busy-logo.png")
        h1 haircolorist
        nav
            li: router-link(exact to="/") Home
    .view-wrapper
        router-view 
    footer
        span Copyright ©{{year}}  Busy Human LLC, All Rights Reserved
</template>

<script>
import router from "../router.js";

export default {
    router,
    data () {
        return {
            year: (new Date()).getFullYear()
        }
    }
}
</script>

<style>

</style>
