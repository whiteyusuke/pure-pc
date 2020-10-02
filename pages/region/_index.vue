<template>
  <no-ssr>
    <main id="region">
      <div class="slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="index in 5" :key="index">
                <a href>
                  <img width="540" height="135" src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
                  <div class="overlay">Check!!</div>
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <AllColumnWrapper>
        <AreaSearch />
        <AreaRanking />
        <AreaExperienceMovie />
        <AreaComic />
        <a href class="bnr">
          <img
            v-lazy="'http://placehold.jp/FFCCCC/FF0000/750x360.png?text=地方トップスペシャル'"
            width="750"
            height="360"
          />
          <div class="overlay">Check!!</div>
        </a>
        <AreaReview />
        <OtherArea />
      </AllColumnWrapper>
    </main>
  </no-ssr>
</template>

<script>
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
import AreaSearch from "~/components/modules/AreaSearch.vue";
import AreaExperienceMovie from "~/components/modules/AreaExperienceMovie.vue";
import AreaComic from "~/components/modules/AreaComic.vue";
import AreaRanking from "~/components/modules/AreaRanking.vue";
import AreaReview from "~/components/modules/AreaReview.vue";
import OtherArea from "~/components/modules/OtherArea.vue";
export default {
  components: {
    AreaSearch,
    AreaRanking,
    AreaExperienceMovie,
    AreaComic,
    AreaReview,
    OtherArea,
    AllColumnWrapper,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },
    };
  },
};
</script>

<style>
#region .slider + .all-column-wrapper {
  @apply mt-20;
}
#region .slider .swiper-container .swiper-wrapper .swiper-slide a {
  @apply relative block;
}
#region .slider .swiper-container .swiper-wrapper .swiper-slide a:hover .overlay {
  transform: scale(1);
}
#region .slider .swiper-container .swiper-wrapper .swiper-slide a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
#region .bnr {
  @apply relative;
}
#region .bnr:hover .overlay {
  transform: scale(1);
}
#region .bnr .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
/*! purgecss start ignore */
.testishii {
  font-size: 20px;
  color: red;
}
/*! purgecss end ignore */
</style>