<template>
  <nav class="nav-list">
    <ul :class="[{ 'side': flex === 'side' }, {'vertical': flex === 'vertical'}]">
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    flex: String
  }
}
</script>

<style>
.nav-list {
  @apply py-16;
}
.nav-list .side {
  @apply flex flex-wrap;
  margin-right: -8px;
  margin-bottom: -16px;
}
</style>
