<template>
  <div class="side-left">
    <div class="side-item">
      <div class="search">
        <SideSecondary fontSize="large">
          <icon-search class="fill-current" width="24" height="24" />詳細検索
        </SideSecondary>
        <form action>
          <div class="select-form">
            <div class="contents">
              <p>
                <icon-map class="fill-current" width="24" height="24" />エリア
              </p>
            </div>
            <div class="contents">
              <p>
                <icon-business class="fill-current" width="24" height="24" />業種
              </p>
            </div>
            <div class="contents">
              <p>
                <icon-genre class="fill-current" width="24" height="24" />ジャンル
              </p>
            </div>
            <div class="contents">
              <p>
                <icon-ticket class="fill-current" width="24" height="24" />クーポン
              </p>
            </div>
            <input type="submit" name="search" value="検索" />
          </div>
        </form>
      </div>
    </div>
    <div class="side-item">
      <a href>
        <picture>
          <source srcset="~/assets/images/bnr/bnr1.webp" type="image/webp" />
          <img v-lazy="require('~/assets/images/bnr/bnr1.jpg')" width="190" height="555" />
        </picture>
        <div class="overlay">Check!!</div>
      </a>
    </div>
    <div class="side-item">
      <a href>
         <picture>
          <source srcset="~/assets/images/bnr/bnr2.webp" type="image/webp" />
          <img v-lazy="require('~/assets/images/bnr/bnr2.jpg')" width="190" height="230" />
        </picture>
        <div class="overlay">Check!!</div>
      </a>
    </div>
  </div>
</template>

<script>
import IconSearch from "~/components/icons/IconSearch";
import IconMap from "~/components/icons/IconMap";
import IconBusiness from "~/components/icons/IconBusiness";
import IconGenre from "~/components/icons/IconGenre";
import IconTicket from "~/components/icons/IconTicket";
import SideSecondary from "~/components/parts/SideSecondary.vue";
export default {
  components: {
    IconSearch,
    IconMap,
    IconBusiness,
    IconGenre,
    IconTicket,
    SideSecondary,
  },
};
</script>

<style>
.side-left {
  @apply w-190;
}
.side-left .side-item + .side-item {
  @apply mt-20;
}
.side-left .title.is-small {
  @apply text-fz16 leading-lh20;
}
.side-left .select-form {
  @apply border-solid border-4;
  border-color: theme("colors.primary");
}
.side-left .select-form p {
  @apply flex items-center h-50 p-8 text-fz14 leading-lh20;
  background: theme("colors.back-gray");
  color: theme("colors.primary");
}
.side-left .select-form p svg {
  @apply mr-8;
}
.side-left .select-form input[type="submit"] {
  @apply w-full h-40 text-white text-fz20 leading-lh25 font-bold;
  background: theme("colors.yellow");
}
.side-left .side-item a {
  @apply block relative;
}
.side-left .side-item a:hover .overlay {
  transform: scale(1);
}
.side-left .side-item a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
</style>