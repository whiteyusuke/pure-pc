<template>
  <MainColumnSection class="area-raw-movie">
    <HeadMain title="東京の投稿！生動画" headLine="short">
      <span slot="icon" class="icon">
        <icon-map class="fill-current" width="24" height="24" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">風俗店が投稿した動画をチェック！</p>
    </HeadMain>
    <div class="list-wrap">
      <ul>
        <li v-for="index in 3" :key="index">
          <article>
            <a href>
              <div class="thumb">
                <picture>
                  <source srcset="~/assets/images/sample/332-214.webp" type="image/webp" />
                  <img
                    v-lazy="require('~/assets/images/sample/332-214.jpg')"
                    width="332"
                    height="214"
                    alt="生動画"
                  />
                </picture>
                <p class="play-time">59:40</p>
              </div>
              <div class="contents">
                <h3>衝撃映像流出!! 痴女の腰使いがヤバイ！</h3>
                <p class="shop-name">ノーハンドで楽しませる人妻 品川店</p>
                <p class="area-genre">品川 / デリヘル,エステ･性感マッサージ</p>
                <p class="views">7,681回視聴</p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a href>
              <div class="thumb">
                <img v-lazy="'http://placehold.jp/100x100.png'" width="100" height="100" />
                <p class="play-time">59:40</p>
              </div>
              <div class="contents">
                <h3>衝撃映像流出!! 痴女の腰使いがヤバイ！衝撃映像流出!! 痴女の腰使いがヤバイ！</h3>
                <p class="shop-name">ノーハンドで楽しませる人妻 品川店ノーハンドで楽しませる人妻 品川店</p>
                <p class="area-genre">品川 / デリヘル,エステ･性感マッサージ品川 / デリヘル,エステ･性感マッサージ</p>
                <p class="views">7,681回視聴</p>
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
import IconMap from "~/components/icons/IconMap";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    IconMap,
    MainColumnSection,
  },
};
</script>

<style>
.area-raw-movie .list-wrap {
  @apply p-8;
  background: theme("colors.back-gray");
}
.area-raw-movie .list-wrap ul {
  @apply flex flex-wrap;
  margin-right: -8px;
  margin-bottom: -8px;
}
.area-raw-movie .list-wrap ul li {
  @apply w-1/2 pr-8 pb-8;
}
.area-raw-movie .list-wrap ul li article a {
  @apply block relative;
}
.area-raw-movie .list-wrap ul li article a .thumb {
  @apply relative w-full;
  background: theme("colors.back-gray");
  height: 214px;
}
.area-raw-movie .list-wrap ul li article a .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-raw-movie .list-wrap ul li article a .thumb .play-time {
  @apply absolute right-0 text-white text-fz12 leading-lh12 bg-opacity-9 px-2 py-4 rounded-2;
  bottom: 7px;
  background: theme("colors.base");
}
.area-raw-movie .list-wrap ul li article a .contents {
  @apply bg-black p-8 bg-opacity-75;
}
.area-raw-movie .list-wrap ul li article a .contents h3 {
  @apply text-fz14 font-bold truncate;
  color: theme("colors.primary");
}
.area-raw-movie .list-wrap ul li article a .contents .shop-name {
  @apply text-fz14 leading-lh20 truncate text-white;
}
.area-raw-movie .list-wrap ul li article a .contents .area-genre {
  @apply text-fz12 leading-lh12 truncate text-white;
}
.area-raw-movie .list-wrap ul li article a .contents .shop-name .area-genre {
  @apply mt-4;
}
.area-raw-movie .list-wrap ul li article a .contents .area-genre + .views {
  @apply mt-4;
}
.area-raw-movie .list-wrap ul li article a .contents .views {
  @apply text-fz10 leading-lh10;
  color: theme("colors.dark-gray");
}
/* hoverアニメーション */
.area-raw-movie .list-wrap ul li article a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.area-raw-movie .list-wrap ul li article a:hover .overlay {
  transform: scale(1);
}
/* ---------------------------------------------------------------------------------------------- */
</style>