<template>
  <div class="purelovers">
    <HeaderCommon />
    <div class="purelovers-wrap">
      <div class="purelovers-inner">
        <BreadCrumb />
        <nuxt />
      </div>
    </div>
    <FooterCommon />
    <transition name="fade">
      <div v-show="scY > 300" class="back-to-top" @click="toTop">
        <div class="top-arrow">
          <span></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BreadCrumb from "~/components/modules/BreadCrumb.vue";
import HeaderCommon from "~/components/modules/HeaderCommon.vue";
import FooterCommon from "~/components/modules/FooterCommon.vue";

export default {
  components: {
    BreadCrumb,
    HeaderCommon,
    FooterCommon,
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
html {
  @apply box-border antialiased;
  font-family: theme("fontFamily.default");
  color: theme("colors.base");
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea,
select {
  /* デフォルトスタイルをリセット */
  @apply appearance-none;

  /* font-familyを継承しないので、継承させる */
  font-family: inherit;

  /* iOSの角丸をリセット */
  @apply rounded-none;

  /* 文字色を親から継承 */
  color: inherit;
}

label {
  /* iOSでのlabelとinput,select,textareaの関連付け */
  cursor: pointer;
}

/* スピンボタン非表示 chrome,safari */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button,
input[type="month"]::-webkit-outer-spin-button,
input[type="month"]::-webkit-inner-spin-button,
input[type="datetime-local"]::-webkit-outer-spin-button,
input[type="datetime-local"]::-webkit-inner-spin-button,
input[type="week"]::-webkit-outer-spin-button,
input[type="week"]::-webkit-inner-spin-button,
input[type="time"]::-webkit-outer-spin-button,
input[type="time"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-outer-spin-button,
input[type="date"]::-webkit-inner-spin-button {
  @apply hidden;
}

/* スピンボタン非表示(firefox) */
input[type="number"],
input[type="month"],
input[type="datetime-local"],
input[type="week"],
input[type="time"],
input[type="date"] {
  -moz-appearance: textfield;
}

/* クリアボタン非表示 */
input[type="date"]::-webkit-clear-button,
input[type="month"]::-webkit-clear-button,
input[type="datetime-local"]::-webkit-clear-button,
input[type="time"]::-webkit-clear-button,
input[type="week"]::-webkit-clear-button {
  -webkit-appearance: none;
}
/* input */
input {
  /* 背景色(任意の色を指定) */
  @apply bg-white;

  /* inputの枠線を消す */
  border: 1px solid transparent;
  @apply border border-transparent;
  transition: border 0.2s ease-out;

  /* 文字色を親から継承 */
  color: inherit;

  /*inputのフォーカス時の枠線を消す*/
  @apply outline-none;
}

input[type="submit"] {
  @apply cursor-pointer;
}
*,
*:before,
*:after {
  @apply box-border m-0;
}
.purelovers {
  @apply relative;
}
.purelovers .purelovers-wrap .purelovers-inner {
  @apply w-1100 m-auto;
}
.purelovers .back-to-top {
  @apply fixed rounded-half border-solid border-5 cursor-pointer;
  width: 60px;
  height: 60px;
  right: 70px;
  bottom: 50px;
  border-color: theme("colors.primary");
}
.purelovers .back-to-top .top-arrow {
  @apply absolute transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.purelovers .back-to-top .top-arrow span {
  @apply relative block;
  width: 12px;
  height: 25px;
  background: theme("colors.primary");
}
.purelovers .back-to-top .top-arrow::before {
  @apply absolute transform -rotate-90;
  border: 18px solid transparent;
  border-left: 18px solid #fd306a;
  top: -25px;
  left: -12px;
  content: "";
}
</style>
