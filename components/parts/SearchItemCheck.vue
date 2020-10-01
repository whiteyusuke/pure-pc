<template>
  <div class="search-item-check">
    <input :id="checkId" type="checkbox" />
    <label :for="forId">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: {
    checkId: String,
    forId: String,
    value: String,
  },
};
</script>

<style>
.search-item-check input[type="checkbox"] {
  @apply hidden;
}
/* チェックボックスの代わりを成すラベル */
.search-item-check input[type="checkbox"] + label {
  @apply inline-block relative;
  cursor: theme('cursor.pointer');
  padding-left: 25px;
  padding-right: 10px;
}
/* ラベルの左に表示させる正方形のボックス□ */
.search-item-check input[type="checkbox"] + label::before {
  @apply absolute block left-0 rounded-4;
  content: "";
  width: 20px;
  height: 20px;
  margin-top: -10px;
  top: 50%;
  border: 1px solid;
  border-color: theme('colors.border-gray');
  background-color: #fff; /* 背景の色変更 お好きな色を */
}
/* チェックが入った時のレ点 */
.search-item-check input[type="checkbox"]:checked + label::before {
  background: theme('colors.green');
}
.search-item-check input[type="checkbox"]:checked + label::after {
  content: "";
  position: absolute;
  display: block;
  box-sizing: border-box;
  width: 14px;
  height: 9px;
  margin-top: -7px;
  top: 50%;
  left: 3px;
  transform: rotate(-45deg);
  border-bottom: 3px solid;
  border-left: 3px solid;
  @apply border-white;
}
</style>