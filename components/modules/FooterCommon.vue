<template>
  <footer class="footer-common">
    <div class="wrap">
      <div class="inner">
        <nav class="information">
          <ul class="top-link">
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />風俗情報ぴゅあらばTOP
              </a>
            </li>
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />利用規約
              </a>
            </li>
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />プライバシーポリシー
              </a>
            </li>
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />よくある質問
              </a>
            </li>
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />お問い合わせ
              </a>
            </li>
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />リンク
              </a>
            </li>
            <li>
              <a href>
                <icon-triangle class="fill-current" width="12" height="12" />運営者情報
              </a>
            </li>
          </ul>
          <ul class="other-link">
            <li>
              <a href>掲載お申込み</a>
            </li>
            <li>
              <a href>掲載についてのお問い合わせ</a>
            </li>
            <li>
              <a href>店舗様ログイン</a>
            </li>
          </ul>
        </nav>
        <div class="prefecture-wrap">
          <div class="area">
            <template v-for="item in areaJson">
              <ul v-if="item.left === 1" :key="item.value">
                <li class="title">
                  <icon-triangle class="fill-current" width="12" height="12" />
                  {{ item.value }}：
                </li>
                <li v-for="item2 in item.prefecture" :key="item2.value2" class="prefecture">
                  <a href>{{ item2.value2 }}</a>
                </li>
              </ul>
            </template>
          </div>
          <div class="area">
            <template v-for="item in areaJson">
              <ul v-if="item.right === 1" :key="item.value">
                <li class="title">
                  <icon-triangle class="fill-current" width="12" height="12" />
                  {{ item.value }}：
                </li>
                <li v-for="item2 in item.prefecture" :key="item2.value2" class="prefecture">
                  <a href>{{ item2.value2 }}</a>
                </li>
              </ul>
            </template>
          </div>
        </div>
        <div class="main-area">
          <div class="main-area-wrap">
            <h3>風俗主要エリア</h3>
            <div class="main-area-inner">
              <div class="sorting">
                <template v-for="item in areaJson">
                  <template v-if="item.id === 'kanto'">
                    <template v-for="item2 in item.prefecture">
                      <p :key="item2.value2">【{{ item2.value2 }}】</p>
                      <ul :key="item2.value" class="main-list">
                        <template v-for="item3 in item2.city">
                          <li v-if="item3.order >=1" :key="item3.value">
                            <a href>{{ item3.value }}</a>
                          </li>
                        </template>
                      </ul>
                    </template>
                  </template>
                </template>
              </div>
            </div>
          </div>
          <div class="main-area-wrap">
            <div class="main-area-inner">
              <h3>デリヘル店の主要エリア</h3>
              <div class="sorting">
                <template v-for="item in areaJson">
                  <ul v-if="item.id === 'kanto'" :key="item.value" class="other-list">
                    <template v-for="item2 in item.prefecture">
                      <li :key="item2.value" class="prefecture">【{{ item2.value }}】</li>
                      <template v-for="item3 in item2.city">
                        <li v-if="item3.deriheru === 1" :key="item3.value" class="area">
                          <a href>{{ item3.value }}</a>
                        </li>
                      </template>
                    </template>
                  </ul>
                </template>
              </div>
            </div>
            <div class="main-area-inner">
              <h3>ホテヘル店の主要エリア</h3>
              <div class="sorting">
                <template v-for="item in areaJson">
                  <ul v-if="item.id === 'kanto'" :key="item.value" class="other-list">
                    <template v-for="item2 in item.prefecture">
                      <li v-if=" item2.order < 3 || item2.order === 4 || item2.order === 6" :key="item2.value" class="prefecture">【{{ item2.value }}】</li>
                      <template v-for="item3 in item2.city">
                        <li v-if="item3.hoteheru === 1" :key="item3.value" class="area">
                          <a href>{{ item3.value }}</a>
                        </li>
                      </template>
                    </template>
                  </ul>
                </template>
              </div>
            </div>
            <div class="main-area-inner">
              <h3>店舗型ヘルス店の主要エリア</h3>
              <div class="sorting">
                <template v-for="item in areaJson">
                  <ul v-if="item.id === 'kanto'" :key="item.value" class="other-list">
                    <template v-for="item2 in item.prefecture">
                      <li v-if="item2.order < 6" :key="item2.value" class="prefecture">【{{ item2.value }}】</li>
                      <template v-for="item3 in item2.city">
                        <li v-if="item3.health === 1" :key="item3.value" class="area">
                          <a href>{{ item3.value }}</a>
                        </li>
                      </template>
                    </template>
                  </ul>
                </template>
              </div>
            </div>
            <div class="main-area-inner">
              <h3>ソープ店の主要エリア</h3>
              <div class="sorting">
                <template v-for="item in areaJson">
                  <ul v-if="item.id === 'kanto'" :key="item.value" class="other-list">
                    <template v-for="item2 in item.prefecture">
                      <li v-if="item2.order < 7" :key="item2.value" class="prefecture">【{{ item2.value }}】</li>
                      <template v-for="item3 in item2.city">
                        <li v-if="item3.soap === 1" :key="item3.value" class="area">
                          <a href>{{ item3.value }}</a>
                        </li>
                      </template>
                    </template>
                  </ul>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="copyright">
      <small>Copyright© 1999-2020 ぴゅあらば All rights reserved.</small>
    </p>
  </footer>
</template>

<script>
import IconTriangle from "~/components/icons/IconTriangle";
import areaJson from "~/data/area.json";
export default {
  components: {
    IconTriangle,
  },
  data() {
    return {
      areaJson: areaJson,
    };
  },
};
</script>

<style>
.footer-common {
  @apply border-t-2 border-b-2 border-solid;
  border-color: theme("colors.base");
  background: #efefef;
}
.footer-common .copyright {
  @apply border-solid border-b-2 text-center p-4;
  border-color: theme("colors.base");
  background: theme("colors.primary");
}
.footer-common .copyright small {
  @apply text-white text-fz12 leading-lh12;
}
.footer-common .wrap {
  @apply border-t-4 border-solid;
  border-color: theme("colors.primary");
}
.footer-common .wrap .inner {
  @apply w-1100 m-auto;
}
.footer-common .wrap .inner .information {
  @apply pt-16 pb-20;
}
.footer-common .wrap .inner .information + .prefecture-wrap {
  @apply border-solid border-t-2;
  border-color: theme("colors.border-thin-gray");
}
.footer-common .wrap .inner .information .top-link {
  @apply flex items-center;
  margin-right: -24px;
}
.footer-common .wrap .inner .information .top-link li {
  @apply pr-24;
}
.footer-common .wrap .inner .information .top-link li a {
  @apply flex items-center font-bold text-fz16 leading-lh23 relative;
  color: theme("colors.primary");
}
.footer-common .wrap .inner .information .top-link li a:after {
  @apply absolute left-0 w-full;
  bottom: theme("inset.underline");
  content: "";
  height: theme("height.underline");
  background: theme("colors.primary");
  transform: scale(0, 1);
  transform-origin: theme("transformOrigin.underline");
  transition: transform 0.3s;
}
.footer-common .wrap .inner .information .top-link li a:hover::after {
  transform: scale(1, 1);
}
.footer-common .wrap .inner .information .top-link li a svg {
  @apply mr-4;
}
.footer-common .wrap .inner .information .top-link + .other-link {
  @apply mt-8;
}
.footer-common .wrap .inner .information .other-link {
  @apply flex items-center;
}
.footer-common .wrap .inner .information .other-link li {
  @apply pr-8;
}
.footer-common .wrap .inner .information .other-link li a {
  @apply block border-solid border-2 text-fz16 leading-lh23 font-bold py-4 px-8 rounded-4 bg-white;
  border-color: theme("colors.primary");
  color: theme("colors.primary");
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 50%,
    rgba(253, 48, 106, 1) 50%
  );
  background-position: 0 0;
  background-size: 200% auto;
  transition: 0.3s;
}
.footer-common .wrap .inner .information .other-link li a:hover {
  background-position: -100% 0;
  @apply text-white;
}
.footer-common .wrap .inner .prefecture-wrap {
  @apply flex py-20;
}
.footer-common .wrap .inner .prefecture-wrap .area {
  @apply w-1/2;
}
.footer-common .wrap .inner .prefecture-wrap .area ul {
  @apply flex items-center;
}
.footer-common .wrap .inner .prefecture-wrap .area ul + ul {
  @apply mt-8;
}
.footer-common .wrap .inner .prefecture-wrap .area ul .title {
  @apply flex items-center font-bold text-fz12 leading-lh20;
  color: theme("colors.base");
}
.footer-common
  .wrap
  .inner
  .prefecture-wrap
  .area
  ul
  .prefecture
  + .prefecture {
  @apply border-solid border-l;
  border-color: theme("colors.base");
}
.footer-common .wrap .inner .prefecture-wrap .area ul li a {
  @apply block text-fz12 leading-tight px-4 relative;
  color: theme("colors.base");
}
.footer-common .wrap .inner .prefecture-wrap .area ul li a:hover {
  color: theme("colors.primary");
}
.footer-common .wrap .inner .prefecture-wrap .area ul li a::after {
  @apply absolute left-0 w-full;
  bottom: theme("inset.underline");
  content: "";
  height: theme("height.underline");
  background: theme("colors.primary");
  transform: scale(0, 1);
  transform-origin: theme("transformOrigin.underline");
  transition: transform 0.3s;
}
.footer-common .wrap .inner .prefecture-wrap .area ul li a:hover::after {
  transform: scale(1, 1);
}
.footer-common .wrap .inner .prefecture-wrap .area ul .title svg {
  @apply mr-4;
  color: theme("colors.primary");
}
.footer-common .wrap .inner .prefecture-wrap .area ul .value {
  @apply px-4 text-fz12 leading-lh20;
  color: theme("colors.base");
}
.footer-common .wrap .inner .prefecture-wrap .area ul .value + .value {
  @apply border-solid border-l;
  border-color: theme("colors.base");
}
.footer-common .wrap .inner .prefecture-wrap + .main-area {
  @apply border-solid border-t-2;
  border-color: theme("colors.border-thin-gray");
}
.footer-common .wrap .inner .main-area {
  @apply flex py-20;
}
.footer-common .wrap .inner .main-area .main-area-wrap {
  @apply w-1/2;
}
.footer-common .wrap .inner .main-area .main-area-wrap h3 {
  @apply text-fz18 leading-lh25 font-bold pl-4 border-solid border-l-4;
  color: theme("colors.primary");
  border-color: theme("colors.primary");
}
.footer-common .wrap .inner .main-area .main-area-wrap h3 + .main-area-inner {
  @apply mt-4;
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  + .sorting {
  @apply mt-4;
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  p {
  @apply text-fz12 font-bold leading-lh20;
  color: theme("colors.base");
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul {
  @apply flex flex-wrap items-center;
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul
  li {
  @apply px-4 pb-4;
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul
  li:first-child {
  @apply pl-0;
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  .main-list
  li
  + li {
  @apply border-solid border-l;
  border-color: theme("colors.base");
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul
  li
  a {
  @apply block text-fz12 leading-tight relative;
  color: theme("colors.base");
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul
  li
  a:hover {
  color: theme("colors.primary");
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul
  li
  a::after {
  @apply absolute left-0 w-full;
  bottom: theme("inset.underline");
  content: "";
  height: theme("height.underline");
  background: theme("colors.primary");
  transform: scale(0, 1);
  transform-origin: theme("transformOrigin.underline");
  transition: transform 0.3s;
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  ul
  li
  a:hover::after {
  transform: scale(1, 1);
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  .other-list
  .prefecture {
  @apply text-fz12 font-bold leading-lh20;
  color: theme("colors.base");
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  .sorting
  .other-list
  .area
  + .area {
  @apply border-solid border-l;
  border-color: theme("colors.base");
}
.footer-common
  .wrap
  .inner
  .main-area
  .main-area-wrap
  .main-area-inner
  + .main-area-inner {
  @apply mt-8;
}
</style>