<template>
  <div class="bread-crumb">
    <ol>
      <li class="top">
        <a href>ぴゅあらば</a>
      </li>
      <li class="other">
        <a href>関東</a>
      </li>
      <li class="other">
        <a href>東京</a>
      </li>
      <li class="other">
        <a href>池袋</a>
      </li>
    </ol>
  </div>
</template>
<style>
.bread-crumb {
  @apply py-12;
}
.bread-crumb ol {
  @apply flex items-center;
}
.bread-crumb ol li {
  @apply pr-16;
}
.bread-crumb ol .other {
  @apply relative;
}
.bread-crumb ol .other::before {
  @apply absolute transform -translate-y-1/2 text-fz14;
  top: theme("inset.half");
  left: -12px;
  content: ">";
  color: theme("colors.base");
}
.bread-crumb ol li a {
  @apply text-fz12 leading-lh12;
}
.bread-crumb ol .top a {
  color: theme("colors.primary");
}
</style>