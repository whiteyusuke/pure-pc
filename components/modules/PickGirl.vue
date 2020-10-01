<template>
  <no-ssr>
    <MainColumnSection class="pick-girl">
      <HeadMain title="今すぐ遊べるピックアップ嬢" headLine="short">
        <span slot="icon" class="icon">
          <icon-map class="fill-current" width="24" height="24" />
        </span>
        <p slot="btn" class="btn">
          <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る" />
        </p>
        <p slot="lead" class="lead">待たずに遊べる女の子をピックアップ！</p>
      </HeadMain>
      <div class="girl-list">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href>
              <img
                v-lazy="'http://placehold.jp/FFCCCC/FF0000/150x150.png'"
                width="150"
                height="150"
                alt="女の子"
              />
              <div class="infor">
                <span class="girlName">かれん(18)</span>
                <span class="area">吉祥寺･国分寺 / エステシャン吉祥寺･国分寺 / エステシャン</span>
              </div>
              <span class="status">16:00～待機中</span>
              <div class="overlay">Check!!</div>
            </a>
          </swiper-slide>
          <swiper-slide v-for="index in 8" :key="index">
            <a href>
               <picture>
                  <source srcset="~/assets/images/sample/150-200.webp" type="image/webp" />
                  <img
                    v-lazy="require('~/assets/images/sample/150-200.jpg')"
                    width="150"
                    height="200"
                    alt="女の子"
                  />
                </picture>
              <div class="infor">
                <span class="girlName">かれん(18)</span>
                <span class="area">吉祥寺･国分寺 / エステシャン吉祥寺･国分寺 / エステシャン</span>
              </div>
              <span class="status">16:00～待機中</span>
              <div class="overlay">Check!!</div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </MainColumnSection>
  </no-ssr>
</template>

<script>
import HeadMain from "~/components/parts/HeadMain.vue";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    HeadMain,
    MainColumnSection
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 8,
        loop: false,
      },
    };
  },
};
</script>

<style>
.pick-girl .girl-list {
  @apply overflow-hidden;
}
.pick-girl .girl-list a {
  @apply block relative;
  width: 150px;
  height: 200px;
}
.pick-girl .girl-list a img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.pick-girl .girl-list a .infor {
  @apply absolute bottom-0 bg-black bg-opacity-8 p-8 w-full;
}
.pick-girl .girl-list a .infor .girlName {
  @apply text-white font-bold text-fz16 leading-lh16;
}
.pick-girl .girl-list a .infor .area {
  @apply text-white text-fz12 leading-lh12 truncate block;
}
.pick-girl .girl-list a .infor .girlName + .area {
  @apply mt-4;
}
.pick-girl .girl-list a .status {
  @apply rounded-30 py-4 px-8 absolute flex items-center justify-center transform -translate-x-1/2 text-white text-fz12 leading-lh12 bg-opacity-8;
  left: theme("inset.half");
  background: theme("colors.status-red");
  width: 100px;
  bottom: 60px;
}
.pick-girl .girl-list .swiper-container .swiper-wrapper .swiper-slide {
  width: 22% !important;
}

/* hoverアニメーション */
.pick-girl .girl-list a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.pick-girl .girl-list a:hover .overlay {
  transform: scale(1);
}
/* ---------------------------------------------------------------------------------------------- */
</style>
