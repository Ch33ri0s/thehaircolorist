<template lang="pug">
    #home
        .cover
            .hero-wrapper
                .title Miranda Reda
                .tagline Class Instructor & Blonde Mastermind
        .cta-strip
            .cta-block
                .cta-header Sign Up For My Class!
                button.btn-hallow Sign Up

</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#home {
  position: relative;
  .cover {
    width: 100vw;
    height: 100vh;
    background: url("/resources/cover.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .hero-wrapper {
      display: flex; 
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.45),
        rgba(255, 255, 255, 1)
      );
      width: 100%;
      height: 100%;
      position: relative;
      .title {
        font-size: 40px;
        color: #727272;
        font-family: "Raleway", sans-serif;
        font-weight: lighter;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(114, 114, 114, 0.35);
      }
      .tagline {
        font-size: 21px;
        padding-top: 20px;
        padding-bottom: 100px;
        font-family: "Raleway", sans-serif;
        font-weight: lighter;
        color: #727272;
      }
    }
  }
  .cta-strip {
    width: 100%;
    position: relative;
    height: 150px;
    background: white;
    z-index: 1;
    .cta-block {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: auto;
      transform: translateY(-50%);
      width: 700px;
      border-radius: 1000px;
      height: 120px;
      background: white;
      box-shadow: 0 0px 50px rgba(0, 0, 0, 0.08);
      z-index: 2;
      transition: all 1s ease;
      &:hover {
        transform: translateY(-52%);
      }
      .cta-header {
        font-size: 24px;
        font-family: "Playfair Display", sans-serif;
        padding-right: 40px;
        color: #727272;
      }
    }
  }
}
</style>
