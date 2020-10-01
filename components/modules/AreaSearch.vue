<template>
  <MainColumnSection class="search-area">
    <HeadMain title="関東エリアの風俗店を探す" headLine="short">
      <span slot="icon" class="icon">
        <icon-map class="fill-current" width="24" height="24" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="詳細検索"></ButtonLink>
      </p>
      <p slot="lead" class="lead">各エリアの風俗情報をご紹介。お店や女の子検索もここから</p>
    </HeadMain>
    <ul class="search-area-list">
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/tokyo.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/tokyo.jpg')" width="96" height="297" alt="東京" />
          </picture>
        </a>
      </li>
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/kanagawa.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/kanagawa.jpg')" width="96" height="297" alt="神奈川" />
          </picture>
        </a>
      </li>
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/saitama.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/saitama.jpg')" width="96" height="297" alt="埼玉" />
          </picture>
        </a>
      </li>
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/tiba.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/tiba.jpg')" width="96" height="297" alt="千葉" />
          </picture>
        </a>
      </li>
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/ibaraki.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/ibaraki.jpg')" width="96" height="297" alt="茨城" />
          </picture>
        </a>
      </li>
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/tochigi.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/tochigi.jpg')" width="96" height="297" alt="栃木" />
          </picture>
        </a>
      </li>
      <li>
        <a href>
          <picture>
            <source srcset="~/assets/images/area/gunma.webp" type="image/webp" />
            <img v-lazy="require('~/assets/images/area/gunma.jpg')" width="96" height="297" alt="群馬" />
          </picture>
        </a>
      </li>
    </ul>
  </MainColumnSection>
</template>

<script>
import HeadMain from "~/components/parts/HeadMain.vue";
import IconMap from "~/components/icons/IconMap";
import ButtonLink from "~/components/parts/ButtonLink";
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    HeadMain,
    IconMap,
    ButtonLink,
    MainColumnSection,
  },
};
</script>

<style>
.search-area {
  width: 680px;
}
.search-area-list {
  @apply flex border-t border-white;
}
.search-area-list li {
  @apply flex border-r border-white;
}
.search-area-list li:last-child {
  @apply border-r-0;
}
.search-area-list li a {
  @apply block overflow-hidden bg-black;
}
.search-area-list li a img {
  transition-duration: 0.5s;
  width: 100%;
}
.search-area-list li a img:hover {
  @apply duration-500;
  opacity: 0.6;
  transform: scale(1.1);
}
</style>