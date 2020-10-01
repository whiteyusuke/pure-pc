<template>
  <div class="all-column-wrapper">
    <SideLeft />
    <div class="main-column">
      <slot />
    </div>
    <SideRight />
  </div> 
</template>

<script>
import SideLeft from "~/components/modules/SideLeft.vue"
import SideRight from "~/components/modules/SideRight.vue"
export default {
  SideLeft,
  SideRight,
};
</script>

<style>
.all-column-wrapper {
  @apply flex justify-between;
  padding-bottom: 120px;
}
.all-column-wrapper .main-column {
  width: theme('width.680');
}
.all-column-wrapper .main-column .bnr {
  @apply block;
}
.all-column-wrapper .main-column .main-column-section + .bnr {
  @apply mt-20;
}
.all-column-wrapper .main-column .bnr + .main-column-section {
  @apply mt-20;
}
.all-column-wrapper .bnr + .bnr {
  @apply mt-20;
}
</style>