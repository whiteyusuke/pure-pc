<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <h1 v-if="error.statusCode === 404">お探しのページが見つかりませんでした</h1>
    <h1 v-else>エラーが発生しました</h1>
    <a href="/">ホームに戻る</a>
  </div>
</template>
 
<script>
export default {
  layout: "default",
  props: {
    error: {
      type: Object,
    },
  },
};
</script>