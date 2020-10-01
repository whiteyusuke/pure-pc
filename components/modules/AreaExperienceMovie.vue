
<template>
  <MainColumnSection class="area-experience-movie">
    <HeadMain title="関東の風俗体験動画" headLine="short">
      <span slot="icon" class="icon">
        <icon-film class="fill-current" width="22" height="17" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">風俗店が投稿した動画をチェック！</p>
    </HeadMain>
    <div class="movie">
      <article>
        <a href class="top">
          <div class="thumb">
            <img v-lazy="'http://placehold.jp/FFCCCC/FF0000/430x242.png'" width="430" height="242" />
            <span class="play-time">25:30</span>
            <span class="play-icon">
              <icon-triangle class="fill-current" width="24" height="24" />
            </span>
          </div>
          <div class="description">
            <h3 class="title">ウフフな40.。ムフフな50。ムフフな50。。(横浜ハレ系)</h3>
            <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
            <div class="tagArea">
              <ul>
                <li>
                  <span>#巨乳</span>
                </li>
                <li>
                  <span>#3P</span>
                </li>
                <li>
                  <span>#フェラ</span>
                </li>
                <li>
                  <span>#ギャル</span>
                </li>
                <li>
                  <span>#素人</span>
                </li>
              </ul>
            </div>
            <p class="views">
              <span>1000000</span>回再生
            </p>
          </div>
          <div class="overlay">Check!!</div>
        </a>
      </article>

      <ul class="other-list">
        <li>
          <article>
            <a href>
              <div class="image">
                <img
                  v-lazy="'http://placehold.jp/FFCCCC/FF0000/157x88.png'"
                  width="157"
                  height="88"
                />
                <span class="play-time">59:59</span>
                <span class="play-icon">
                  <icon-triangle class="fill-current" width="18" height="18" />
                </span>
              </div>
              <div class="description">
                <h3 class="title">ウフフな40.。ムフフな50。。(横浜ハレ系)</h3>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a href>
              <div class="image">
                <picture>
                  <source srcset="~/assets/images/sample/157-88.webp" type="image/webp" />
                  <img
                    v-lazy="require('~/assets/images/sample/157-88.jpg')"
                    width="157"
                    height="88"
                    alt="体験動画"
                  />
                </picture>
                <span class="play-time">59:59</span>
                <span class="play-icon">
                  <icon-triangle class="fill-current" width="18" height="18" />
                </span>
              </div>
              <div class="description">
                <p class="title">ウフフな40.。ムフフな50ウフフな40.。ムフフな50。。(横浜ハレ系)</p>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a href>
              <div class="image">
                <img
                  v-lazy="'http://placehold.jp/FFCCCC/FF0000/157x88.png'"
                  width="157"
                  height="88"
                />
                <span class="play-time">59:59</span>
                <span class="play-icon">
                  <icon-triangle class="fill-current" width="18" height="18" />
                </span>
              </div>
              <div class="description">
                <h3 class="title">ウフフな40.。ムフフな50。。(横浜ハレ系)</h3>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a href>
              <div class="image">
                <img
                  v-lazy="'http://placehold.jp/FFCCCC/FF0000/157x88.png'"
                  width="157"
                  height="88"
                />
                <span class="play-time">59:59</span>
                <span class="play-icon">
                  <icon-triangle class="fill-current" width="18" height="18" />
                </span>
              </div>
              <div class="description">
                <h3 class="title">ウフフな40.。ムフフな50。。(横浜ハレ系)</h3>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
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
import IconFilm from "~/components/icons/IconFilm";
import IconTriangle from "~/components/icons/IconTriangle";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    IconFilm,
    IconTriangle,
    MainColumnSection,
  },
};
</script>

<style>
.area-experience-movie .movie {
  @apply p-8;
  background: theme("colors.back-gray");
}
.area-experience-movie .movie article .top {
  @apply flex relative rounded-8;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.area-experience-movie .movie article .top .thumb {
  @apply relative;
  width: 430px;
  height: 242px;
}
.area-experience-movie .movie article .top .thumb .play-time {
  @apply absolute text-fz14 text-white px-4;
  background: theme("colors.base");
  border-radius: theme("borderRadius.4");
  right: theme("inset.6");
  bottom: theme("inset.8");
}
.area-experience-movie .movie article .top .thumb .play-icon {
  @apply absolute flex items-center justify-center transform -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-8 rounded-half;
  top: theme("inset.half");
  left: theme("inset.half");
  width: theme("width.50");
  height: theme("height.50");
}
.area-experience-movie .movie article .top .thumb .play-icon svg {
  @apply text-white mr-negative4;
}
.area-experience-movie .movie article .top .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2 rounded-l-8;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-experience-movie .movie article .top .description {
  @apply flex-1 p-12;
}
.area-experience-movie .movie article .top .description .title {
  @apply font-bold text-fz18 leading-lh18;
  color: theme("colors.base");
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.area-experience-movie .movie article .top .description .infor {
  color: theme("colors.base");
  @apply text-fz14 leading-lh14;
}
.area-experience-movie .movie article .top .description .tagArea ul {
  @apply flex flex-wrap;
  margin-right: -4px;
  margin-bottom: -4px;
}
.area-experience-movie .movie article .top .description .tagArea ul li {
  @apply pr-4 pb-4;
}
.area-experience-movie .movie article .top .description .tagArea ul li span {
  @apply block border-solid border-2 bg-white text-fz14 leading-lh20 py-2 px-8;
  border-color: theme("colors.primary");
  border-radius: theme("borderRadius.4");
  color: theme("colors.primary");
}
.area-experience-movie .movie article .top .description .title + .infor {
  @apply mt-12;
}
.area-experience-movie .movie article .top .description .infor + .tagArea {
  @apply mt-20;
}
.area-experience-movie .movie article .top .description .tagArea + .views {
  @apply mt-20;
}
.area-experience-movie .movie article .top .description .views {
  @apply text-fz14;
  color: theme("colors.base");
}
.area-experience-movie .movie article .top .description .views span {
  color: theme("colors.primary");
  @apply font-bold text-fz24;
}
.area-experience-movie .movie article + .other-list {
  @apply mt-8;
}
.area-experience-movie .movie .other-list {
  @apply flex;
  margin-right: -12px;
}
.area-experience-movie .movie .other-list li {
  @apply pr-12;
}
.area-experience-movie .movie .other-list li article a {
  @apply block relative rounded-8;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.area-experience-movie .movie .other-list li article a .image {
  @apply relative;
  width: 157px;
  height: 88px;
}
.area-experience-movie .movie .other-list li article a .image .play-time {
  @apply absolute text-fz14 text-white px-4;
  background: theme("colors.base");
  border-radius: theme("borderRadius.4");
  right: theme("inset.4");
  bottom: theme("inset.6");
}
.area-experience-movie .movie .other-list li article a .image .play-icon {
  @apply absolute flex items-center justify-center transform -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-8 rounded-half;
  top: theme("inset.half");
  left: theme("inset.half");
  width: 35px;
  height: 35px;
}
.area-experience-movie .movie .other-list li article a .image .play-icon svg {
  @apply text-white mr-negative4;
}
.area-experience-movie .movie .other-list li article a .image img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2 rounded-t-8;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-experience-movie .movie .other-list li article a .description {
  @apply p-8;
}
.area-experience-movie .movie .other-list li article a .description .title {
  @apply text-fz14 font-bold;
  color: theme("colors.base");
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.area-experience-movie .movie .other-list li article a .description .infor {
  @apply text-fz12;
  color: theme("colors.base");
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.area-experience-movie .movie .other-list li article a .description .views {
  @apply text-fz14;
}
.area-experience-movie
  .movie
  .other-list
  li
  article
  a
  .description
  .views
  span {
  @apply text-fz20 font-bold;
  color: theme("colors.primary");
}
/* hoverアニメーション */
.area-experience-movie .movie .top .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.area-experience-movie .movie .top:hover .overlay {
  transform: scale(1);
}
.area-experience-movie .movie .other-list li article a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.area-experience-movie .movie .other-list li article a:hover .overlay {
  transform: scale(1);
}
/* ---------------------------------------------------------------------------------------------- */
</style>
