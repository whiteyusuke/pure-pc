<template>
  <div class="head-main">
    <div class="title">
      <div class="wrap" :class="{ 'head-short': headLine === 'short' }">
        <h2 class="headline">
          <slot
            name="icon"
          >
          </slot>
          {{ title }}
        </h2>
      </div>
      <slot
        name="btn"
      >
      </slot>
    </div>
    <slot
      name="lead"
    >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    btn: String,
    headLine: String
  }
}
</script>

<style>
.head-main .title {
  @apply flex justify-between border-solid border-b-4 overflow-hidden;
  border-color: theme('colors.primary');
}
.head-main .title .head-short {
  width: 520px;
}
.head-main .wrap {
  @apply flex items-center w-full;
  transform: skew(45deg);
  background: theme('colors.primary');
  margin-left: -25px;
  height: 46px;
  padding: 12px;
}
.head-main .title .wrap .headline {
  transform: skew(-45deg);
  @apply flex items-center text-white text-fz24 leading-lh24 font-bold;
  margin-left: 25px;
}
.head-main .title .wrap .headline .icon {
  @apply mr-4;
}
.head-main .lead {
  @apply text-white text-fz16 leading-lh16 py-8 px-12;
  background: theme('colors.base');
}
.head-main .title .btn {
  @apply flex items-center flex-1 pt-4 pb-8 ml-20;
}
.head-main .title .btn a {
  @apply w-full h-full text-fz18 leading-lh18;
}
</style>