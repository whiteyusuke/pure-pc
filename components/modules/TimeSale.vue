<template>
  <MainColumnSection class="time-sale">
    <p>
      <picture>
        <source srcset="~/assets/images/timesale/timesale_bnr.webp" type="image/webp" />
        <img
          v-lazy="require('~/assets/images/timesale/timesale_bnr.jpg')"
          width="680"
          height="180"
          alt="ぴゅあらばタイムセール"
        />
      </picture>
    </p>
    <p class="count-down">
      <span class="limited">掲載残り時間</span>
      <picture>
        <source srcset="~/assets/images/timesale/angle-arrow.webp" type="image/webp" />
        <img
          v-lazy="require('~/assets/images/timesale/angle-arrow.png')"
          width="40"
          height="30"
          alt="矢印"
        />
      </picture>
      <time>2時間32分54秒</time>
    </p>
    <ul class="time-sale-list">
      <li v-for="index in 3" :key="index">
        <article>
          <a href>
            <picture>
              <source srcset="~/assets/images/sample/170-227.webp" type="image/webp" />
              <img
                v-lazy="require('~/assets/images/sample/170-227.jpg')"
                width="170"
                height="227"
                alt="女の子"
              />
            </picture>
            <div class="infor">
              <h3 class="girlName">ひなみ(28)</h3>
              <p class="area">横浜(関内･曙町) / デリヘル・ソープ</p>
            </div>
            <div class="discount">
              <div class="badge">
                <picture>
                  <source srcset="~/assets/images/timesale/timesale_off.webp" type="image/webp" />
                  <img
                    v-lazy="require('~/assets/images/timesale/timesale_off.png')"
                    width="57"
                    height="57"
                    alt="女の子"
                  />
                </picture>
                <p class="number">99</p>
              </div>
            </div>
            <div class="overlay">Check!!</div>
          </a>
        </article>
      </li>
      <li>
        <article>
          <a href>
            <picture>
              <source srcset="~/assets/images/sample/170-227.webp" type="image/webp" />
              <img
                v-lazy="require('~/assets/images/sample/170-227.jpg')"
                width="170"
                height="227"
                alt="女の子"
              />
            </picture>
            <div class="infor">
              <h3 class="girlName">ひなみ(28)</h3>
              <p class="area">横浜(関内･曙町) / デリヘル・ソープ</p>
            </div>
            <div class="discount">
              <div class="badge">
                <picture>
                  <source srcset="~/assets/images/timesale/timesale_off.webp" type="image/webp" />
                  <img
                    v-lazy="require('~/assets/images/timesale/timesale_off.png')"
                    width="57"
                    height="57"
                    alt="女の子"
                  />
                </picture>
                <span class="number">1</span>
              </div>
            </div>
            <div class="overlay">Check!!</div>
          </a>
        </article>
      </li>
    </ul>
    <LinkSeeMore height="is-tall" link-name="激安タイムセールをもっと見る" />
  </MainColumnSection>
</template>

<script>
import LinkSeeMore from "~/components/parts/LinkSeeMore.vue";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    LinkSeeMore,
    MainColumnSection,
  },
};
</script>

<style>
.time-sale .count-down {
  background: theme("colors.base");
  @apply flex items-center justify-center p-8;
}
.time-sale .count-down .limited {
  @apply text-fz34 leading-lh49 font-bold text-white;
}
.time-sale .count-down time {
  @apply text-fz34 leading-lh49 font-bold;
  color: theme("colors.light-yellow");
}
.time-sale .count-down img {
  @apply mx-16;
}
.time-sale .time-sale-list {
  @apply flex;
}
.time-sale .time-sale-list li article a {
  @apply relative block;
}
.time-sale .time-sale-list li article a .infor {
  @apply absolute bottom-0 opacity-8 p-8 w-full;
  background: theme("colors.red");
}
.time-sale .time-sale-list li article a .infor .girlName {
  @apply text-white text-fz16 leading-lh16 font-bold;
}
.time-sale .time-sale-list li article a .infor .area {
  @apply text-fz12 leading-lh12 text-white truncate block;
}
.time-sale .time-sale-list li article a .infor .girlName + .area {
  @apply mt-4;
}
.time-sale .time-sale-list li article a .discount {
  @apply absolute;
  right: 5px;
  bottom: 60px;
}
.time-sale .time-sale-list li article a .discount .badge {
  @apply relative;
}
.time-sale .time-sale-list li article a .discount .badge .number {
  @apply absolute text-fz24 leading-lh25 font-bold text-center;
  color: theme("colors.red");
  top: 8px;
  left: 8px;
  transform: rotate(-15deg);
  width: 28px;
}

/* hoverアニメーション */
.time-sale .time-sale-list li article a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.time-sale .time-sale-list li article a:hover .overlay {
  transform: scale(1);
}
/* ---------------------------------------------------------------------------------------------- */
</style> 