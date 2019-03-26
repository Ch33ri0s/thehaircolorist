<template lang="pug">
  #navbar
    .nav-wrapper
      .logo: router-link(exact to="/") BabesGoBlonde
      ul
        li(v-for="(link, index) in links" :key="index")
          router-link(:to="link") {{link}}
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      links: ["Services", "Classes", "Shop", "About"]
    };
  },
  mounted() {
    console.log(this.links);
  }
};
</script>

<style lang="scss">

#navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 80px;
  // background: white;
  background: linear-gradient(to bottom, white, transparent);
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 9999;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    width: 1040px;
    max-width: 100%;
    height: 100%;
    .logo a {
      position: relative;
      font-family: "Countryside", sans-serif;
      font-size: 32px;
      font-weight: lighter;
      letter-spacing: 2px;
      margin-left: 20px;
      text-decoration: none;
      padding: 4px;
      outline: none;
      color: #727272;
    }
    ul {
      display: flex;
      height: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        a {
          font-family: "Raleway", sans-serif;
          color: #727272;
          font-size: 14px;
          text-decoration: none;
          outline: none;
          padding-left: 24px;
          padding-right: 24px;
          letter-spacing: 1px;
        }
        button {
          margin-left: 10px;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
