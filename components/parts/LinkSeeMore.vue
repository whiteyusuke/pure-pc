<template>
  <div class="link-see-more">
    <a href :class="[{ 'is-middle': height === 'is-middle' },{ 'is-tall': height === 'is-tall' }]">
      <span class="icon">
        <icon-angle class="fill-current" width="18" height="22" />
      </span>
      <span class="icon">
        <icon-angle class="fill-current" width="18" height="22" />
      </span>
      {{ linkName }}
      <span class="left icon">
        <icon-angle class="fill-current" width="18" height="22" />
      </span>
      <span class="left icon">
        <icon-angle class="fill-current" width="18" height="22" />
      </span>
    </a>
  </div>
</template>

<script>
import IconAngle from "~/components/icons/IconAngle";
export default {
  components: {
    IconAngle,
  },
  props: {
    linkName: String,
    height: String
  },
};
</script>

<style>
.link-see-more {
  background: theme("colors.base");
}
.link-see-more a {
  @apply flex items-center justify-center text-fz20 font-bold leading-lh20;
  color: theme("colors.primary");
}
.link-see-more a.is-middle {
  @apply p-20;
}
.link-see-more a.is-tall {
  @apply p-28;
}
.link-see-more a .icon {
  color: theme("colors.primary");
}
.link-see-more a .icon:nth-child(1) {
  margin-right: -8px;
}
.link-see-more a .icon:nth-child(2) {
  @apply mr-4;
}
.link-see-more a .icon:nth-child(3) {
  @apply ml-4;
}
.link-see-more a .icon:nth-child(4) {
  margin-left: -8px;
}
.link-see-more a .left {
  @apply transform rotate-180;
}
</style>