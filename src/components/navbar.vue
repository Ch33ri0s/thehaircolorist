<template lang="pug">
  #navbar
    .nav-wrapper
      .logo Thehaircolorist
      ul
        li(v-for="(link, index) in links" :key="index")
          router-link(exact to=`/${link}`) {{link}}
        li: button Contact
        li: i.fas.fa-shopping-bag
        li: i.fas.fa-user
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      links: ["Home", "Services", "Education", "Shop", "About"]
    };
  },
  mounted() {
    console.log(this.links);
  }
};
</script>

<style lang="scss">
#navbar {
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    max-width: 1920px;
    height: 100%;
    .logo {
      position: relative;
      font-family: "Raleway", sans-serif;
      font-size: 32px;
      font-weight: lighter;
      letter-spacing: 2px;
      padding-left: 20px;
      text-transform: uppercase;
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
          font-family: "Playfair Display", sans-serif;
          color: #727272;
          font-size: 16px;
          text-decoration: none;
          padding-left: 20px;
          padding-right: 20px;
        }
        button {
          font-size: 18px;
          font-family: "Raleway", sans-serif;
          font-weight: lighter;
          margin-left: 10px;
          margin-right: 20px;
          width: 150px;
          height: 40px;
          border: none;
          background: #bdccb7;
          outline: none;
          color: white;
          border-radius: 1000px;
        }
        svg {
          font-size: 28px;
          height: 100%;
          padding-left: 30px;
          padding-right: 30px;
          border: 1px solid #f2f2f2;
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
