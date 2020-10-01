<template>
  <main id="area">
    <AllColumnWrapper>
      <HeadMain title="都道府県を選ぶ">
        <span slot="icon" class="icon">
          <icon-map class="fill-current" width="24" height="24" />
        </span>
      </HeadMain>
      <NavList flex="side">
        <NavItem v-for="item in areaJson" :key="item.value" width="quarter">
          <ButtonLink color="is-default" :link-name="item.value" />
        </NavItem>
      </NavList>
      <HeadSearch title="人気エリアから探す" />
      <NavList flex="side">
        <template v-for="item in areaJson">
          <NavItem v-for="item2 in item.prefecture" :key="item2.value" width="quarter">
            <template v-for="item3 in item2.city">
              <template v-if="item3.order === 1">
                <ButtonLink :key="item3.value" color="is-default" :link-name="item3.value" />
              </template>
            </template>
          </NavItem>
        </template>
      </NavList>
    </AllColumnWrapper>
  </main>
</template>

<script>
import HeadMain from "~/components/parts/HeadMain.vue";
import IconMap from "~/components/icons/IconMap";
import areaJson from "~/data/area.json";
import NavItem from "~/components/parts/NavItem.vue";
import NavList from "~/components/parts/NavList.vue";
import ButtonLink from "~/components/parts/ButtonLink";
import HeadSearch from "~/components/parts/HeadSearch";
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
export default {
  components: {
    HeadMain,
    IconMap,
    NavItem,
    NavList,
    ButtonLink,
    HeadSearch,
    AllColumnWrapper,
  },
  data() {
    return {
      areaJson: areaJson,
    };
  },
};
</script>
<style>
#area  .nav-list + .head-search {
  @apply mt-4;
}
</style>