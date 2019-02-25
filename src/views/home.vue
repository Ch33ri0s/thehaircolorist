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
        .service-block(v-for="(service, index) in services" :key="index")
            .service-title {{service.title}}
            .service-content {{service.content}}
            img(:src="service.url")
        .cta-
</template>

<script>
export default {
 data () {
     return {
         services: [
             { title: 'Balayage', content: 'This is the content, put whatever you want here.', url: '/resources/cover.jpg' },
             { title: 'Color Melts', content: 'This is the content, put whatever you want here.', url: '/resources/cover.jpg'},
             { title: 'Highlights', content: 'This is the content, put whatever you want here.', url: '/resources/cover.jpg'},
         ]
     }
 }
}
</script>

<style lang="scss">
#home {
    width: 100vw;
    .cover {
        position: relative;
        width: 100vw;
        height: 90vh;
        background: url("/resources/cover.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        .hero-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 1));
            width: 100%;
            height: 100%;
            position: relative;
            .title {
                font-size: 80px;
                color: #727272;
                font-family: "Playfair Display", sans-serif;
                font-weight: bolder;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(114, 114, 114, .35);
            }
            .tagline {
                font-size: 35px;
                padding-top: 20px;
                padding-bottom: 100px;
                font-family: 'Raleway', sans-serif;
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
                font-family: 'Playfair Display', sans-serif;
                padding-right: 40px;
                color: #727272;
            }
        }
    }

    .service-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 360px;
        // background: linear-gradient(to bottom right, white, #f2f2f2);
        background: white;
        z-index: 0;
        .service-title {
            position: relative;
            font-size: 120px;
            font-family: 'Playfair Display', sans-serif;
            font-weight: lighter;
            color: #f2f2f2;
            padding-left: 50px;
            padding-right: 50px;
            text-shadow: inset 0 3px rgba(0, 0, 0, 1);
            z-index: 1;
        }
        .service-content {
            position: relative;
            font-size: 18.72px;
            font-family: 'Raleway', sans-serif;
            font-weight: lighter;
            padding-right: 50px;
            padding-left: 50px;
            z-index: 1;
        }
        img {
            position: relative;
            width: 33%;
            height: 100%;
            opacity: 1;
            z-index: 0;
        }
        &:nth-child(even) {
            background: white;
            flex-direction: row-reverse;
        }
    }
}

</style>
