<template>
  <main id="prefecture">
    <div class="search-list">
      <div class="search-main search-list-item">
        <div class="contents">
          <HeadSearch title="エリアから探す" />
          <NavList flex="side">
            <NavItem v-for="index in 4" :key="index" width="half">
              <ButtonLink class="is-middle" link-name="池袋" />
            </NavItem>
          </NavList>
          <div class="more-btn">
            <a href>全てのエリアを見る</a>
          </div>
        </div>
      </div>
      <div class="search-main search-list-item">
        <div class="contents">
          <HeadSearch title="業種から探す" />
          <NavList flex="side">
            <NavItem v-for="(num, index) in 4" :key="index" width="half">
              <ButtonLink v-if="index === 0" class="is-middle" padding="is-none" link-name="デリヘル" />
              <ButtonLink v-else-if="index === 1" class="is-middle" link-name="ソープ" />
              <ButtonLink v-else-if="index === 2" class="is-middle" link-name="エステ･性感マッサージ" />
              <ButtonLink v-else-if="index === 3" class="is-middle" link-name="ピンサロ" />
            </NavItem>
          </NavList>
          <div class="more-btn">
            <a href>全ての業種を見る</a>
          </div>
        </div>
      </div>
      <div class="search-list-item other-search">
        <nav>
          <ul>
            <li>
              <a href>タイプから探す</a>
            </li>
            <li>
              <a href>体型・特徴から探す</a>
            </li>
            <li>
              <a href>プレイから探す</a>
            </li>
            <li>
              <a href>価格・サービスから探す</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <AllColumnWrapper>
      <a href class="bnr">
        <img
          v-lazy="'http://placehold.jp/30/FFCCCC/FF0000/680x300.png?text=エリアリンク'"
          width="680"
          height="300"
        />
        <div class="overlay">Check!!</div>
      </a>
      <a href class="bnr">
        <img
          v-lazy="'http://placehold.jp/30/FFCCCC/FF0000/680x140.png?text=クーポンリンク'"
          width="680"
          height="140"
        />
        <div class="overlay">Check!!</div>
      </a>
      <PickGirl />
      <TimeSale />
      <AreaRawMovie />
      <ShopGravure />
    </AllColumnWrapper>
  </main>
</template>

<script>
import HeadSearch from "~/components/parts/HeadSearch";
import NavItem from "~/components/parts/NavItem.vue";
import NavList from "~/components/parts/NavList.vue";
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
import PickGirl from "~/components/modules/PickGirl.vue";
import TimeSale from "~/components/modules/TimeSale.vue";
import AreaRawMovie from "~/components/modules/AreaRawMovie.vue";
import ShopGravure from "~/components/modules/ShopGravure.vue";
export default {
  components: {
    HeadSearch,
    NavItem,
    NavList,
    AllColumnWrapper,
    PickGirl,
    TimeSale,
    AreaRawMovie,
    ShopGravure,
  },
};
</script>

<style>
#prefecture .search-list {
  @apply flex justify-between;
  margin-right: -20px;
}
#prefecture .search-list + .all-column-wrapper {
  @apply mt-20;
}
#prefecture .search-list .search-list-item {
  @apply pr-20;
}
#prefecture .search-list .search-main .contents {
  @apply p-12;
  background: theme("colors.back-gray");
}
#prefecture .search-list .search-main .contents .more-btn {
  @apply text-center;
}
#prefecture .search-list .search-main .contents .more-btn a {
  @apply text-fz18 leading-lh25;
  color: theme("colors.font-gray");
}
#prefecture .search-list .search-list-item .contents nav {
  @apply pl-12 pr-12;
}
#prefecture .search-list .search-list-item .contents nav ul {
  margin-right: -24px;
  margin-bottom: -12px;
}
#prefecture .search-list .search-list-item .contents nav ul li {
  @apply pb-12 pr-24;
}
#prefecture .search-list .search-main {
  width: 400px;
}
#prefecture .search-list .other-search nav ul {
  margin-bottom: -2px;
}
#prefecture .search-list .other-search nav ul li {
  @apply pb-2;
}
#prefecture .search-list .other-search nav ul li a {
  color: theme("colors.primary");
  @apply text-fz16 leading-lh23 p-12 block;
  background: theme("colors.back-gray");
}
#prefecture .bnr {
  @apply relative;
}
#prefecture .bnr:hover .overlay {
  transform: scale(1);
}
#prefecture .bnr .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
</style>
