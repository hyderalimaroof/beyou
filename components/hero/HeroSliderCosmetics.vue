<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index"
                class="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider bg-img pt-0"
                :style="{ backgroundImage: `url(${slider.backgroundImage})`, opacity: 0.5 }">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-13 slider-animation-1">
                                <h5>{{ slider.subTitle }}</h5>
                                <h1 v-html="slider.title"></h1>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">SHOP NOW</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                loop: true,
                speed: 750,
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 6000
                },
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            sliderData: [
                {
                    subTitle: "Natural Beauty Products",
                    title: "BeYou <br> Serums",
                    backgroundImage: "/img/slider/1.jpg"
                },
                {
                    subTitle: "Sunscreen",
                    title: "BeYou <br> Sunscreen",
                    backgroundImage: "/img/slider/2.jpg"
                },
                {
                    subTitle: "Nature's Essence",
                    title: "BeYou <br> Spray",
                    backgroundImage: "/img/slider/3.jpg"
                },
                {
                    subTitle: "Aloe Vera Bliss",
                    title: "Natural <br> Hydration",
                    backgroundImage: "/img/slider/4.jpg"
                }
            ]
        }
    },
};
</script>