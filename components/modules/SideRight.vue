<template>
  <div class="side-right">
    <div class="side-item">
      <a href>
        <picture>
          <source srcset="~/assets/images/bnr/bnr3.webp" type="image/webp" />
          <img v-lazy="require('~/assets/images/bnr/bnr3.jpg')" width="190" height="377" />
        </picture>
        <div class="overlay">Check!!</div>
      </a>
    </div>
    <div class="side-item">
      <a href>
        <picture>
          <source srcset="~/assets/images/bnr/bnr4.webp" type="image/webp" />
          <img v-lazy="require('~/assets/images/bnr/bnr4.jpg')" width="190" height="150" />
        </picture>
        <div class="overlay">Check!!</div>
      </a>
    </div>
    <div class="side-item">
      <SideSecondary>
        ピックアップガール
        <p slot="lead" class="lead">
          ぴゅあらば運営が毎日セレク
          トお昼の12時頃に更時!!
        </p>
      </SideSecondary>
    </div>
  </div>
</template>

<script>
import SideSecondary from "~/components/parts/SideSecondary.vue";
export default {
  components: {
    SideSecondary,
  },
};
</script>

<style>
.side-right {
  @apply w-190;
}
.side-right .side-item + .side-item {
  @apply mt-20;
}
.side-right .side-item a {
  @apply relative block;
}
.side-right .side-item a:hover .overlay {
  transform: scale(1);
}
.side-right .side-item a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
</style>