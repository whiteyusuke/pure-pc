<template>
  <MainColumnSection class="shop-gravure">
    <HeadMain title="お店蔵出しグラビア" headLine="short">
      <span slot="icon" class="icon">
        <icon-gravure class="fill-current" width="24" height="19" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">お店配信のグラビア画像から好みの女の子を探そう！</p>
    </HeadMain>
    <div class="gravure-wrap">
      <ul class="gravure-list">
        <li v-for="index in 3" :key="index" class="gravure-item">
          <article>
            <a href>
              <div class="thumb">
                <picture>
                  <source srcset="~/assets/images/sample/332-324.webp" type="image/webp" />
                  <img
                    v-lazy="require('~/assets/images/sample/332-324.jpg')"
                    width="332"
                    height="324"
                    alt="グラビア"
                  />
                </picture>
                <div class="data">
                  <ul class="tag-list">
                    <li class="tag-item">
                      <p>#スレンダー</p>
                    </li>
                    <li class="tag-item">
                      <p>#巨乳</p>
                    </li>
                  </ul>
                  <div class="infor">
                    <h3>KANA(22)</h3>
                    <p class="shop-name">素人妻達☆マイふぇらレディー</p>
                    <p class="area-genre">蒲田 / エステ･性感マッサージ</p>
                  </div>
                </div>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </article>
        </li>
        <li class="gravure-item">
          <article>
            <a href>
              <div class="thumb">
                <img v-lazy="'http://placehold.jp/100x100.png'" width="100" height="100" />
                <div class="data">
                  <ul class="tag-list">
                    <li class="tag-item">
                      <p>#スレンダー</p>
                    </li>
                    <li class="tag-item">
                      <p>#巨乳</p>
                    </li>
                  </ul>
                  <div class="infor">
                    <h3>KANA(22)</h3>
                    <p class="shop-name">素人妻達☆マイふぇらレディー</p>
                    <p class="area-genre">蒲田 / エステ･性感マッサージ</p>
                  </div>
                </div>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </article>
        </li>
      </ul>
    </div>
  </MainColumnSection>
</template>

<script>
import IconGravure from "~/components/icons/IconGravure";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    IconGravure,
    MainColumnSection,
  },
};
</script>

<style>
.shop-gravure .gravure-wrap {
  @apply p-10;
  background: theme("colors.back-gray");
}
.shop-gravure .gravure-wrap .gravure-list {
  @apply flex flex-wrap;
  margin-right: -12px;
  margin-bottom: -8px;
}
.shop-gravure .gravure-wrap .gravure-list .gravure-item {
  @apply w-1/2 pr-12 pb-8;
}
.shop-gravure .gravure-wrap .gravure-list .gravure-item article a {
  @apply block relative;
}
.shop-gravure .gravure-wrap .gravure-list .gravure-item article a .thumb {
  @apply w-full relative;
  height: 324px;
  background: theme("colors.back-gray");
}
.shop-gravure .gravure-wrap .gravure-list .gravure-item article a .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.shop-gravure .gravure-wrap .gravure-list .gravure-item article a .thumb .data {
  @apply absolute w-full bg-black bg-opacity-75 left-0 p-8 bottom-0;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .tag-list {
  @apply flex items-center;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .tag-list
  .tag-item {
  @apply pr-8;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .tag-list
  .tag-item
  p {
  background: theme("colors.orange");
  @apply text-white text-fz10 leading-lh10 px-6 py-4 rounded-tl-12 rounded-tr-4 rounded-br-12 rounded-bl-4;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .infor
  h3 {
  color: theme("colors.primary");
  @apply text-fz14 leading-lh20 font-bold truncate;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .infor
  .shop-name {
  @apply text-fz12 leading-lh17 text-white truncate;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .infor
  .area-genre {
  @apply text-white text-fz12 leading-lh12 truncate;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .tag-list
  + .infor {
  @apply mt-4;
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a
  .thumb
  .data
  .infor
  .shop-name
  + .area-genre {
  @apply mt-4;
}
/* hoverアニメーション */
.shop-gravure .gravure-wrap .gravure-list .gravure-item article a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.shop-gravure
  .gravure-wrap
  .gravure-list
  .gravure-item
  article
  a:hover
  .overlay {
  transform: scale(1);
}
/* ---------------------------------------------------------------------------------------------- */
</style>