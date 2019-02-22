<template lang="pug">
    #home
        .cover
</template>

<script>
export default {

}
</script>

<style lang="scss">
#home {
    width: 100vw;
    height: 1080px;
    .cover {
        width: 100%;
        height: 100%;
        background: url("/resources/cover.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: .1;
    }
}
</style>
