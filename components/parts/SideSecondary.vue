<template>
  <div class="side-secondary">
    <h2
      :class="[{ 'large': fontSize === 'large' }, {'small': fontSize === 'small'}]"
    >
      <slot />
    </h2>
    <slot
      name="lead"
    >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    fontSize: String,
    lead: String
  },
};
</script>

<style>
.side-secondary h2 {
  @apply flex items-center h-50 font-bold text-white p-12 relative;
  background: theme("colors.primary");
}
.side-secondary h2.large {
  @apply text-fz24 leading-lh24;
}
.side-secondary h2.small {
  @apply text-fz16 leading-lh20;
}
.side-secondary h2::after {
  @apply absolute w-0 h-0 top-0 right-0 border-solid border-t-0 border-l-0;
  content: "";
  border-width: 0 20px 20px 0;
  border-color: transparent #fff transparent transparent;
}
.side-secondary h2 svg {
  @apply mr-4;
}
.side-secondary .lead {
  @apply py-8 px-12 text-white text-fz12 leading-normal;
  background: theme('colors.base');
}
</style>