<template>
  <section class="main-column-section">
    <slot />
  </section>
</template>

<style>
.main-column-section + .main-column-section {
  @apply mt-20;
}
</style>