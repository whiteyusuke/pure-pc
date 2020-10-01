<template>
  <main id="search-shop">
    <AllColumnWrapper>
      <form action>
        <HeadSearch title="エリアを選ぶ" />
        <NavList flex="side">
          <NavItem v-for="item in areaJson" :key="item.value" width="quarter">
            <ButtonLink color="is-default" :link-name="item.value" />
          </NavItem>
        </NavList>
        <HeadSearch title="業種を選ぶ" />
        <ul class="search-list">
          <li v-for="(num, index) in 14" :key="index">
            <SearchItemCheck v-if="index === 0" checkId="1" forId="1" value="ソープ" />
            <SearchItemCheck v-else-if="index === 1" checkId="2" forId="2" value="風俗" />
            <SearchItemCheck v-else-if="index === 2" checkId="3" forId="3" value="デリヘル" />
            <SearchItemCheck v-else-if="index === 3" checkId="4" forId="4" value="ホテヘル" />
            <SearchItemCheck v-else-if="index === 4" checkId="5" forId="5" value="ファッションヘルス" />
            <SearchItemCheck v-else-if="index === 5" checkId="6" forId="6" value="エステ・性感マッサージ" />
            <SearchItemCheck v-else-if="index === 6" checkId="7" forId="7" value="イメクラ・コスプレ" />
            <SearchItemCheck v-else-if="index === 7" checkId="8" forId="8" value="SM・M性感" />
            <SearchItemCheck v-else-if="index === 8" checkId="9" forId="9" value="手コキ・オナクラ" />
            <SearchItemCheck v-else-if="index === 9" checkId="10" forId="10" value="ピンサロ" />
            <SearchItemCheck v-else-if="index === 10" checkId="11" forId="11" value="セクキャバ・おっパブ" />
            <SearchItemCheck v-else-if="index === 11" checkId="12" forId="12" value="パブ・ニュークラブ" />
            <SearchItemCheck v-else-if="index === 12" checkId="13" forId="13" value="出会い喫茶" />
            <SearchItemCheck v-else-if="index === 13" checkId="14" forId="14" value="その他" />
          </li>
        </ul>
      </form>
    </AllColumnWrapper>
  </main>
</template>
 
<script>
import areaJson from "~/data/area.json";
import NavItem from "~/components/parts/NavItem.vue";
import NavList from "~/components/parts/NavList.vue";
import SearchItemCheck from "~/components/parts/SearchItemCheck.vue";
import ButtonLink from "~/components/parts/ButtonLink";
import HeadSearch from "~/components/parts/HeadSearch";
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
export default {
  components: {
    NavItem,
    NavList,
    ButtonLink,
    HeadSearch,
    AllColumnWrapper,
    SearchItemCheck
  },
  data() {
    return {
      areaJson: areaJson,
    };
  },
};
</script>
<style>
#search-shop .search-list {
  @apply flex flex-wrap pt-16 pb-16;
  margin-right: -16px;
  margin-bottom:-16px;
}
#search-shop .search-list li {
  @apply pr-16 pb-16;
}
</style>