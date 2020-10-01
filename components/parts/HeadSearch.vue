<template>
  <h3 class="head-search">
    {{ title }}
  </h3>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
<style>
.head-search {
  @apply font-bold text-fz20 leading-lh20;
  color: theme('colors.primary');
}
</style>