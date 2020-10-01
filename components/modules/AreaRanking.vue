<template>
  <MainColumnSection class="area-ranking">
    <HeadMain title="関東の風俗ランキング" headLine="short">
      <span slot="icon" class="icon">
        <icon-crown class="fill-current" width="24" height="24" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">あなたのお気に入りのお店や女の子の順位をチェック！</p>
    </HeadMain>
    <div class="genre-wrap">
      <input id="shop" type="radio" name="ranking" class="change" checked="checked" />
      <label class="title" for="shop">お店</label>
      <div class="genre-content">
        <p class="total-ranking">総合ランキング</p>
        <ol class="ranking-list">
          <li class="first new is-first-new triangle">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample1.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample1.jpg')"
                  width="340"
                  height="454"
                  alt="女の子"
                />
              </picture>
              <div class="number number-1">
                <strong>1</strong>位
              </div>
              <div class="girl-infor is-first">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle silver">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-2">
                <strong>2</strong>位
              </span>
              <div class="arrow is-top">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle blonze">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-3">
                <strong>3</strong>位
              </span>
              <div class="arrow is-right">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-4">
                <strong>4</strong>位
              </span>
              <div class="arrow is-bottom">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray new is-other-new">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <div class="number number-5">
                <strong>5</strong>位
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
        </ol>
      </div>
      <input id="review" type="radio" name="ranking" class="change" />
      <label class="title" for="review">口コミ</label>
      <div class="genre-content">
        <p class="total-ranking">総合ランキング</p>
        <ul class="ranking-list">
          <li class="first new is-first-new triangle">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample1.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample1.jpg')"
                  width="340"
                  height="454"
                  alt="女の子"
                />
              </picture>
              <div class="number number-1">
                <strong>1</strong>位
              </div>
              <div class="girl-infor is-first">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle silver">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-2">
                <strong>2</strong>位
              </span>
              <div class="arrow is-top">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle blonze">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-3">
                <strong>3</strong>位
              </span>
              <div class="arrow is-right">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray">
            <a href>
              <img v-lazy="'http://placehold.jp/150x150.png'" width="170" height="227" />
              <span class="number number-4">
                <strong>4</strong>位
              </span>
              <div class="arrow is-bottom">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray new is-other-new">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <div class="number number-5">
                <strong>5</strong>位
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
        </ul>
      </div>
      <input id="girl" type="radio" name="ranking" class="change" />
      <label class="title" for="girl">女の子</label>
      <div class="genre-content">
        <p class="total-ranking">総合ランキング</p>
        <ul class="ranking-list">
          <li class="first new is-first-new triangle">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample1.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample1.jpg')"
                  width="340"
                  height="454"
                  alt="女の子"
                />
              </picture>
              <div class="number number-1">
                <strong>1</strong>位
              </div>
              <div class="girl-infor is-first">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle silver">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-2">
                <strong>2</strong>位
              </span>
              <div class="arrow is-top">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle blonze">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-3">
                <strong>3</strong>位
              </span>
              <div class="arrow is-right">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray">
            <a href>
              <img v-lazy="'http://placehold.jp/150x150.png'" width="170" height="227" />
              <span class="number number-4">
                <strong>4</strong>位
              </span>
              <div class="arrow is-bottom">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray new is-other-new">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <div class="number number-5">
                <strong>5</strong>位
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
        </ul>
      </div>
      <input id="movie" type="radio" name="ranking" class="change" />
      <label class="title" for="movie">生動画</label>
      <div class="genre-content">
        <p class="total-ranking">総合ランキング</p>
        <ul class="ranking-list">
          <li class="first new is-first-new triangle">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample1.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample1.jpg')"
                  width="340"
                  height="454"
                  alt="女の子"
                />
              </picture>
              <div class="number number-1">
                <strong>1</strong>位
              </div>
              <div class="girl-infor is-first">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle silver">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-2">
                <strong>2</strong>位
              </span>
              <div class="arrow is-top">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOILOILOILOILOILOILOILOILOI(22)</span>
                <span class="area">新宿 / デリヘル新宿 / デリヘル新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle blonze">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <span class="number number-3">
                <strong>3</strong>位
              </span>
              <div class="arrow is-right">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray">
            <a href>
              <img v-lazy="'http://placehold.jp/150x150.png'" width="170" height="227" />
              <span class="number number-4">
                <strong>4</strong>位
              </span>
              <div class="arrow is-bottom">
                <icon-arrow class="fill-current" width="16" height="20" />
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li class="ranking-item triangle gray new is-other-new">
            <a href>
              <picture>
                <source srcset="~/assets/images/sample/sample2.webp" type="image/webp" />
                <img
                  v-lazy="require('~/assets/images/sample/sample2.jpg')"
                  width="170"
                  height="227"
                  alt="女の子"
                />
              </picture>
              <div class="number number-5">
                <strong>5</strong>位
              </div>
              <div class="girl-infor is-other">
                <span class="girl-name">LOI(22)</span>
                <span class="area">新宿 / デリヘル</span>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <LinkSeeMore height="is-middle" link-name="女の子ランキングをもっと見る" />
  </MainColumnSection>
</template>

<script>
import HeadMain from "~/components/parts/HeadMain.vue";
import LinkSeeMore from "~/components/parts/LinkSeeMore.vue";
import IconCrown from "~/components/icons/IconCrown";
import IconArrow from "~/components/icons/IconArrow";
import ButtonLink from "~/components/parts/ButtonLink";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    HeadMain,
    IconCrown,
    IconArrow,
    ButtonLink,
    LinkSeeMore,
    MainColumnSection,
  },
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>

<style>
/* cssスライダー */
.area-ranking .genre-wrap {
  @apply flex flex-wrap overflow-hidden border-solid border-b-6;
  border-color: theme("colors.border-red");
}
.area-ranking .genre-wrap .title {
  @apply text-fz20 leading-lh20 text-black p-16 cursor-pointer flex-1 font-bold relative text-center select-none whitespace-no-wrap;
  order: -1;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  -webkit-tap-highlight-color: transparent;
}
.area-ranking .genre-wrap .title::after {
  @apply block bottom-0 left-0 top-0 right-0 opacity-0 pointer-events-none absolute w-full h-full transform translate-x-full;
  background: theme("colors.red");
  z-index: theme("zIndex.1");
  content: "";
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s 80ms;
  z-index: -1;
}
.area-ranking .genre-wrap .change:checked + .title {
  @apply text-white;
}
.area-ranking .genre-wrap .genre-content {
  @apply h-0 opacity-0 pointer-events-none w-full;
  transform: translateX(-30%);
  transition: transform 0.3s 80ms, opacity 0.3s 80ms;
}
.area-ranking .genre-wrap .change {
  @apply hidden;
}
.area-ranking .genre-wrap .change:checked ~ .title::after {
  @apply transform -translate-x-full;
}
.area-ranking .genre-wrap .change:checked + .title::after {
  @apply opacity-100 transform translate-x-0;
}
.area-ranking .genre-wrap .change:checked ~ .genre-content {
  transform: translateX(30%);
}
.area-ranking .genre-wrap .change:checked + .title + .genre-content {
  @apply h-auto opacity-100 pointer-events-auto order-1 transform translate-x-0;
}
/* --------------------------------------------------------------------------------------------------------------- */
.area-ranking .genre-wrap .genre-content .total-ranking {
  @apply flex items-center justify-center text-white text-fz18 leading-lh18 p-8;
  background: theme("colors.red");
}
.area-ranking .genre-wrap .genre-content .ranking-list {
  @apply grid text-center;
  grid-template-columns: [col1] 50% [col2] 25% [col3] 25%;
  grid-template-rows: [row1] 50% [row2] 50%;
}
.area-ranking .genre-wrap .genre-content .ranking-list li a img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-ranking .genre-wrap .genre-content .ranking-list li a .girl-infor {
  @apply bottom-0 absolute block bg-black bg-opacity-8 w-full text-white;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor.is-first {
  @apply p-12;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor.is-other {
  @apply p-8;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor
  .girl-name {
  @apply block text-left font-bold truncate;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor.is-first
  .girl-name {
  @apply text-fz24 leading-lh24;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor.is-other
  .girl-name {
  @apply text-fz16 leading-lh16;
}
.area-ranking .genre-wrap .genre-content .ranking-list li a .girl-infor .area {
  @apply block text-left truncate;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor.is-first
  .area {
  @apply text-fz14 leading-lh20;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor.is-other
  .area {
  @apply text-fz12 leading-lh12;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  li
  a
  .girl-infor
  .girl-name
  + .area {
  @apply mt-4;
}
.area-ranking .genre-wrap .genre-content .ranking-list .ranking-item::before {
  border-width: 70px 70px 0 0;
}
.area-ranking .genre-wrap .genre-content .ranking-list .triangle::before {
  content: "";
  @apply w-0 h-0 border-solid absolute border-transparent top-0 left-0 pointer-events-none;
  z-index: theme("zIndex.1");
}
.area-ranking .genre-wrap .genre-content .ranking-list .first {
  @apply col-start-1;
  grid-row: 1 / 3;
}
.area-ranking .genre-wrap .genre-content .ranking-list .first a {
  width: 340px;
  height: 454px;
}
.area-ranking .genre-wrap .genre-content .ranking-list .first .number {
  color: theme("colors.red");
  top: 10px;
  left: 20px;
}
.area-ranking .genre-wrap .genre-content .ranking-list li .number {
  z-index: theme("zIndex.10");
}
.area-ranking .genre-wrap .genre-content .ranking-list .number-1 strong {
  @apply text-fz34;
}
.area-ranking .genre-wrap .genre-content .ranking-list .new::after {
  content: "NEW";
  @apply absolute border-2 border-solid text-fz16 leading-lh23 font-bold pointer-events-none;
  border-color: theme("colors.new-icon");
  width: 56px;
  height: 26px;
  color: theme("colors.new-icon");
  background: theme("colors.red");
  border-radius: theme("borderRadius.4");
  z-index: theme("zIndex.100");
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .new.is-first-new::after {
  top: 60px;
  left: 10px;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .new.is-other-new::after {
  top: 40px;
  @apply left-0;
}

/* 三角形の背景色 */
.area-ranking .genre-wrap .genre-content .ranking-list .first::before {
  border-width: 120px 120px 0 0;
  border-color: #ffcc21 transparent transparent transparent;
}
.area-ranking .genre-wrap .genre-content .ranking-list .silver::before {
  border-color: #c3c0b1 transparent transparent transparent;
}
.area-ranking .genre-wrap .genre-content .ranking-list .blonze::before {
  border-color: #b29383 transparent transparent transparent;
}
.area-ranking .genre-wrap .genre-content .ranking-list .gray::before {
  border-color: #8c8c8c transparent transparent transparent;
}
/* ------------------------------------------------------------------------- */

.area-ranking .genre-wrap .genre-content .ranking-list li a {
  @apply block;
}
.area-ranking .genre-wrap .genre-content .ranking-list .ranking-item a {
  width: 170px;
  height: 227px;
}
.area-ranking .genre-wrap .genre-content .ranking-list li .number {
  @apply text-fz14 absolute font-bold;
}
.area-ranking .genre-wrap .genre-content .ranking-list .ranking-item .number {
  color: theme("colors.base");
  @apply top-0;
  left: 5px;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .number
  strong {
  @apply text-fz30 leading-lh43;
}

/* 矢印 */
.area-ranking .genre-wrap .genre-content .ranking-list .ranking-item .arrow {
  width: 26px;
  height: 26px;
  @apply border-solid border-2 absolute bg-white flex items-center justify-center;
  z-index: theme("zIndex.1000");
  border-radius: theme("borderRadius.2");
  top: 40px;
  left: 10px;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .arrow.is-top {
  border-color: theme("colors.primary");
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .arrow.is-top
  svg {
  color: theme("colors.primary");
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .arrow.is-right {
  border-color: theme("colors.green");
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .arrow.is-right
  svg {
  color: theme("colors.green");
  @apply transform rotate-90;
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .arrow.is-bottom {
  border-color: theme("colors.light-blue");
}
.area-ranking
  .genre-wrap
  .genre-content
  .ranking-list
  .ranking-item
  .arrow.is-bottom
  svg {
  color: theme("colors.light-blue");
  @apply transform rotate-180;
}
/* -------------------------------------------------------------------------- */

/* hoverアニメーション */
.area-ranking .genre-wrap .genre-content .ranking-list li a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.area-ranking .genre-wrap .genre-content .ranking-list li a:hover .overlay {
  transform: scale(1);
}
/* --------------------------------------------------------------------------- */

.area-ranking .genre-wrap .genre-content .ranking-list li {
  @apply relative;
}
.area-ranking .genre-wrap .genre-content .ranking-list li a {
  @apply bg-black relative overflow-hidden;
}
</style>