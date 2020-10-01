<template>
  <MainColumnSection class="area-comic">
    <HeadMain title="関東の風俗体験マンガ" headLine="short">
      <span slot="icon" class="icon">
        <icon-comic class="fill-current" width="24" height="19" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">様々な業種の体験プレイを元にマンガでご紹介！</p>
    </HeadMain>
    <div class="contents">
      <ul>
        <li>
          <a href>
            <div class="thumb">
              <img v-lazy="'http://placehold.jp/325x245.png'" width="325" height="245" />
              <div class="description">
                <p class="title">十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～</p>
                <p class="area-genre">秋葉原･神田 / デリヘル(アロマ･エステ)秋葉原･神田 / デリヘル(アロマ･エステ)</p>
              </div>
            </div>
            <div class="overlay">Check!!</div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img v-lazy="'http://placehold.jp/325x245.png'" width="325" height="245" />
              <div class="description">
                <p class="title">十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～</p>
                <p class="area-genre">秋葉原･神田 / デリヘル(アロマ･エステ)秋葉原･神田 / デリヘル(アロマ･エステ)</p>
              </div>
            </div>
            <div class="overlay">Check!!</div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img v-lazy="'http://placehold.jp/325x245.png'" width="325" height="245" />
              <div class="description">
                <p class="title">十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～</p>
                <p class="area-genre">秋葉原･神田 / デリヘル(アロマ･エステ)秋葉原･神田 / デリヘル(アロマ･エステ)</p>
              </div>
            </div>
            <div class="overlay">Check!!</div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img v-lazy="'http://placehold.jp/325x245.png'" width="325" height="245" />
              <div class="description">
                <p class="title">十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～>十恋人～トレンド～</p>
                <p class="area-genre">秋葉原･神田 / デリヘル(アロマ･エステ)秋葉原･神田 / デリヘル(アロマ･エステ)</p>
              </div>
            </div>
            <div class="overlay">Check!!</div>
          </a>
        </li>
      </ul>
    </div>
  </MainColumnSection>
</template>
<script>
import IconComic from "~/components/icons/IconComic"
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    IconComic,
    MainColumnSection
  },
};
</script>

<style>
.area-comic .contents {
  @apply p-8;
  background: theme("colors.back-gray");
}
.area-comic .contents ul {
  @apply flex flex-wrap;
  margin-right: -16px;
  margin-bottom: -8px;
}
.area-comic .contents ul li {
  @apply pr-16 pb-8 w-1/2;
}
.area-comic .contents ul li a {
  @apply block relative;
}
.area-comic .contents ul li a .thumb {
  @apply relative;
  width: 325px;
  height: 245px;
}
.area-comic .contents ul li a .thumb .description {
  @apply absolute bottom-0 text-white w-full p-8;
   background: rgba(51,51,51,0.8);
}
.area-comic .contents ul li a .thumb .description .title {
  @apply text-fz14 leading-lh20 font-bold truncate;
}
.area-comic .contents ul li a .thumb .description .area-genre {
  @apply text-fz12 leading-lh12 truncate;
}
.area-comic .contents ul li a .thumb .description .title + .area-genre {
  @apply mt-4;
}
.area-comic .contents ul li a .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}

/* hoverアニメーション */
.area-comic .contents ul li a:hover .overlay {
  transform: scale(1);
}
.area-comic .contents ul li a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
/* ------------------------------------------------------------------------------------- */
</style>