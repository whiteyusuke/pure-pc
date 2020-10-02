<template>
  <header class="header-common">
    <div class="information-wrapper">
      <div class="number">
        <p>
          <span>9,999</span>店舗
        </p>
        <p>
          <span>9,999</span>女の子
        </p>
        <p>
          <span>9,99999</span>口コミ
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href>北海道・東北</a>
          </li>
          <li>
            <p class="active">関東</p>
          </li>
          <li>
            <a href>北陸</a>
          </li>
          <li>
            <a href>甲信越</a>
          </li>
          <li>
            <a href>東海</a>
          </li>
          <li>
            <a href>関西</a>
          </li>
          <li>
            <a href>中国・四国</a>
          </li>
          <li>
            <a href>九州・沖縄</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="contents-wrapper">
      <div class="container">
        <div class="title">
          <a href>
            <picture>
              <source srcset="~/assets/images/pure-logo.webp" type="image/webp" />
              <img v-lazy="require('~/assets/images/pure-logo.png')" width="164" height="63" alt="風俗情報ぴゅあらば" />
            </picture>
          </a>
          <h1>関東の<br />風俗店情報</h1>
        </div>
        <div class="variety-wrapper">
          <p class="ban-icon">
            <picture>
              <source srcset="~/assets/images/ban.webp" type="image/webp" />
              <img v-lazy="require('~/assets/images/ban.png')" width="36" height="34" alt="18未満禁止" />
            </picture>
          </p>
          <p class="ban-text">18歳未満の御利用は<br />固くお断りいたします。
          </p>
          <form>
            <input type="text" placeholder="フリーワード検索" />
            <button type="submit">
              <icon-search class="fill-current" width="22" height="22" />
            </button>
          </form>
          <div class="link-wrapper">
            <div>
              <ButtonLink color="is-primary" link-name="ログイン" class="is-small is-bold">
                <span slot="icon" class="icon">
                  <icon-login class="fill-current" width="18" height="18" />
                </span>
              </ButtonLink>
            </div>
            <div>
              <ButtonLink color="is-primary" link-name="会員登録" class="is-small is-bold">
                <span slot="icon" class="icon">
                  <icon-register class="fill-current" width="18" height="18" />
                </span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <p
        class="read"
      >{都道府県}・{都道府県}・{都道府県}など{関東}の安心して遊べるおすすめ風俗店情報をご紹介!デリヘルやソープ・セクキャバなどの割引クーポン・人気ランキング・体験動画・口コミ情報など風俗店探しに役立つコンテンツをご覧いただけます。</p>
    </div>
    <nav class="header-nav">
      <ul class="list">
        <li class="item">
          <a href class="home">
            <icon-home class="fill-current" width="29" height="26" />
          </a>
        </li>
        <li
          v-for="(num, index) in 7"
          :key="index"
          class="item"
          :class="{ 'icon': index === 0 || index=== 1 || index=== 2 || index=== 6}"
          @mouseover="mouseOverAction(index)"
          @mouseleave="mouseLemoveAction(index)"
        >
          <template v-if="index === 0">
            <p class="title">お店検索</p>
            <nav v-if="hoverFlag && index === hoverIndex">
              <ul>
                <li>
                  <a href>場所から探す</a>
                </li>
                <li>
                  <a href>業種から探す</a>
                </li>
                <li>
                  <a href>総額から探す</a>
                </li>
                <li>
                  <a href>こだわりから探す</a>
                </li>
                <li>
                  <a href>店舗名から探す</a>
                </li>
              </ul>
            </nav>
          </template>
          <template v-if="index === 1">
            <p class="title">女の子検索</p>
            <nav v-if="hoverFlag && index === hoverIndex">
              <ul>
                <li>
                  <a href>出勤&タイプで探す</a>
                </li>
                <li>
                  <a href>画像から女の子を探す</a>
                </li>
                <li>
                  <a href>今すぐ遊べるピックアップ嬢</a>
                </li>
                <li>
                  <a href>体験入店の女の子</a>
                </li>
                <li>
                  <a href>店舗名から探す</a>
                </li>
              </ul>
            </nav>
          </template>
          <template v-if="index === 2">
            <p class="title">クーポン</p>
            <nav v-if="hoverFlag && index === hoverIndex">
              <ul>
                <li>
                  <a href>サンプルテキスト</a>
                </li>
                <li>
                  <a href>サンプルテキスト</a>
                </li>
                <li>
                  <a href>サンプルテキスト</a>
                </li>
              </ul>
            </nav>
          </template>
          <template v-if="index === 3">
            <a href class="title">ランキング</a>
          </template>
          <template v-if="index === 4">
            <a href class="title">口コミ</a>
          </template>
          <template v-if="index === 5">
            <a href class="title">写メ日記</a>
          </template>
          <template v-if="index === 6">
            <p class="title">動画・画像・マンガ</p>
            <nav v-if="hoverFlag && index === hoverIndex">
              <ul>
                <li>
                  <a href>サンプルテキスト</a>
                </li>
                <li>
                  <a href>サンプルテキスト</a>
                </li>
                <li>
                  <a href>サンプルテキスト</a>
                </li>
              </ul>
            </nav>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import IconLogin from "~/components/icons/IconLogin";
import IconSearch from "~/components/icons/IconSearch";
import IconRegister from "~/components/icons/IconRegister";
import ButtonLink from "~/components/parts/ButtonLink";
import IconHome from "~/components/icons/IconHome";
export default {
  components: {
    IconLogin,
    IconRegister,
    IconSearch,
    ButtonLink,
    IconHome,
  },
  data() {
    return {
      hoverFlag: false,
    };
  },
  methods: {
    mouseOverAction(index) {
      this.hoverFlag = true;
      this.hoverIndex = index;
    },
    mouseLemoveAction() {
      this.hoverFlag = false;
    },
  },
};
</script>

<style>
.header-common .information-wrapper {
  @apply border-solid flex justify-center items-start;
  border-color: theme("colors.base");
  border-top-width: 5px;
}
.header-common .information-wrapper .number {
  @apply flex p-10 justify-end;
  width: 55%;
}
.header-common .information-wrapper .number p {
  @apply text-fz12 leading-lh12;
  color: theme("colors.base");
}
.header-common .information-wrapper .number p + p {
  @apply ml-5;
}
.header-common .information-wrapper .number p span {
  @apply text-fz18 font-bold;
  color: theme("colors.primary");
}
.header-common .information-wrapper nav {
  @apply px-40 py-10 relative;
  background: theme("colors.base");
  width: 45%;
}
.header-common .information-wrapper nav::before {
  content: "";
  @apply absolute w-0 h-0 border-solid border-transparent top-0 left-0;
  border-width: 32px 0 0 32px;
  border-left-color: #ffffff;
}
.header-common .information-wrapper nav ul {
  @apply flex;
}
.header-common .information-wrapper nav ul li {
  @apply px-5;
}
.header-common .information-wrapper nav ul li + li {
  @apply border-l border-solid border-white;
}
.header-common .information-wrapper nav ul li a {
  @apply text-white text-fz12 leading-lh12 block;
}
.header-common .information-wrapper nav ul li a:hover {
  color: theme("colors.primary");
}
.header-common .information-wrapper nav ul li p {
  @apply text-fz12 leading-lh12 block;
  color: theme("colors.primary");
}
.header-common .contents-wrapper {
  @apply m-auto w-1100;
}
.header-common .contents-wrapper .container {
  @apply flex items-end justify-between;
}
.header-common .contents-wrapper .container .title {
  @apply flex items-end;
}
.header-common .contents-wrapper .container .title a {
  @apply block;
  width: 164px;
  height: 63px;
}
.header-common .contents-wrapper .container .title h1 {
  @apply font-bold text-fz20 leading-lh25;
  color: #3b3b3b;
}
.header-common .contents-wrapper .container .title a + h1 {
  @apply ml-20;
}
.header-common .contents-wrapper .container .variety-wrapper {
  @apply flex items-center;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-icon {
  width: 36px;
  height: 34px;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-text {
  color: theme("colors.font-gray");
  @apply text-fz12 leading-lh17;
}
.header-common
  .contents-wrapper
  .container
  .variety-wrapper
  .ban-icon
  + .ban-text {
  @apply ml-4;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-text + form {
  @apply ml-10;
}
.header-common .contents-wrapper .container .variety-wrapper form {
  @apply flex items-center h-30;
}
.header-common .contents-wrapper .container .variety-wrapper form input {
  @apply border-2 border-solid text-fz14 text-center p-6 h-30;
  border-color: theme("colors.border-gray");
  color: theme("colors.base");
}
.header-common .contents-wrapper .container .variety-wrapper form input:focus {
  @apply outline-none;
}
.header-common .contents-wrapper .container .variety-wrapper form button {
  @apply p-4 h-30;
  background: theme("colors.blue");
}
.header-common .contents-wrapper .container .variety-wrapper form button svg {
  @apply text-white;
}
.header-common
  .contents-wrapper
  .container
  .variety-wrapper
  form
  + .link-wrapper {
  @apply ml-10;
}
.header-common .contents-wrapper .container .variety-wrapper .link-wrapper {
  @apply flex items-center;
}
.header-common
  .contents-wrapper
  .container
  .variety-wrapper
  .link-wrapper
  div
  + div {
  @apply ml-10;
}
.header-common .contents-wrapper .read {
  @apply text-fz12 leading-lh16;
  color: theme("colors.font-thin-gray");
}
.header-common .contents-wrapper .container + .read {
  @apply mt-8;
}
.header-common .header-nav {
  background: theme("colors.primary");
  @apply border-b-4 border-solid;
  border-color: theme("colors.base");
}
.header-common .header-nav .list {
  @apply flex m-auto w-1100;
  height: 60px;
}
.header-common .header-nav .list .item {
  @apply flex items-center justify-center border-r border-solid relative;
  border-color: theme("colors.border-thin-gray");
  width: 150px;
}
.header-common .header-nav .list .item .home {
  @apply flex justify-center items-center w-full h-full;
}
.header-common .header-nav .list .item .title {
  @apply text-white text-fz14 leading-lh28 font-bold w-full h-full flex items-center justify-center;
}
.header-common .header-nav .list .item nav {
  @apply border-4 border-solid absolute py-5 px-10 bottom-0 left-0 bg-white;
  transform: translate(0, 100%);
  border-color: theme("colors.primary");
  width: 240px;
  z-index: theme("zIndex.10");
}
.header-common .header-nav .list .icon {
  @apply relative;
}
.header-common .header-nav .list .icon::after {
  @apply absolute;
  content: "";
  bottom: 10px;
  right: 10px;
  border-top: 8px solid #ffffff;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}
.header-common .header-nav .list .item nav ul li + li {
  @apply border-solid border-t-2;
  border-color: theme("colors.primary");
}
.header-common .header-nav .list .item nav ul li a {
  @apply relative pl-16 py-8 block font-bold text-fz14;
}
.header-common .header-nav .list .item nav ul li a::before {
  @apply absolute top-0 bottom-0 m-auto border-solid border-t-4 border-r-4;
  left: 3px;
  content: "";
  vertical-align: middle;
  width: 8px;
  height: 8px;
  border-color: theme("colors.base");
  transform: rotate(45deg);
}
.header-common .header-nav .list .item nav ul li a:hover::before {
  border-color: theme("colors.primary");
}
.header-common .header-nav .list .item nav ul li a:hover {
  color: theme("colors.primary");
}
.header-common .header-nav .list .item:first-child {
  @apply border-l border-solid;
  width: 70px;
  border-color: theme("colors.border-thin-gray");
}
.header-common .header-nav ul li a svg {
  @apply text-white;
}
</style>