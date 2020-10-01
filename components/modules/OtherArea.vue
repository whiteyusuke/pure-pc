<template>
  <MainColumnSection class="other-area">
    <HeadMain title="他の地方の風俗店を探す">
      <span slot="icon" class="icon">
        <icon-map class="fill-current" width="24" height="24" />
      </span>
    </HeadMain>
    <NavList flex="side">
      <NavItem v-for="item in areaJson" :key="item.value" width="quarter">
        <ButtonLink class="is-middle" :link-name="item.value"></ButtonLink>
      </NavItem>
    </NavList>
  </MainColumnSection>
</template>

<script>
import HeadMain from "~/components/parts/HeadMain.vue"
import NavItem from "~/components/parts/NavItem.vue"
import NavList from "~/components/parts/NavList.vue"
import IconMap from "~/components/icons/IconMap"
import ButtonLink from "~/components/parts/ButtonLink"
import areaJson from "~/data/area.json"
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
export default {
  components: {
    HeadMain,
    IconMap,
    NavItem,
    NavList,
    ButtonLink,
    MainColumnSection
  },
  data() {
    return {
      areaJson: areaJson,
    };
  },
};
</script>

<style>

</style>