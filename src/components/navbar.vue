<template lang="pug">
  #navbar
    .nav-wrapper
      .logo: router-link(exact to="/") Thehaircolorist
      ul
        li(v-for="(link, index) in links" :key="index")
          router-link(:to="link") {{link}}
        li: button.btn-green Contact
        //- li: i.fas.fa-shopping-bag
        li: i.fas.fa-user
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
  position: relative;
  width: 100%;
  height: 100px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 9999;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    max-width: 1920px;
    height: 100%;
    .logo a {
      position: relative;
      font-family: "Raleway", sans-serif;
      font-size: 32px;
      font-weight: lighter;
      letter-spacing: 2px;
      margin-left: 20px;
      text-transform: uppercase;
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
          font-size: 17px;
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
        svg {
          font-size: 35px;
          height: 100%;
          padding-left: 30px;
          padding-right: 30px;
          border-left: 1px solid #f2f2f2;
          border-right: 1px solid #f2f2f2;
          color: #727272;
          &:hover {
            color: #828282;
          }
        }
      }
    }
  }
}
</style>
