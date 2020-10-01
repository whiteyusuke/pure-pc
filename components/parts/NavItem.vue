<template>
  <li
    class="nav-item"
    :class="[{ 'is-quarter': width === 'quarter' }, {'is-third': width === 'third'},{'is-half': width === 'half'}]"
  >
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    width: String
  }
}
</script>

<style>
  .nav-item {
    @apply pr-8 pb-16;
  }
  .nav-item.is-quarter {
    @apply w-1/4;
  }
  .nav-item.is-third {
    @apply w-1/3;
  }
  .nav-item.is-half {
    @apply w-1/2;
  }
</style>