<template>
  <q-footer
    class="bg-white flex items-center justify-center"
    bordered
    style="width: 100%"
  >
    <q-tabs
      v-model="tab"
      :outside-arrows="false"
      class="bg-grey-1 text-black shadow-2"
      dense
    >
      <q-route-tab
        name="home"
        to="/"
        :class="{ 'text-red-14': tab === 'home' }"
      >
        <q-icon size="70px" name="svguse:/icons.svg#home|0 0 75 50" alt="" />
        <span class="label" v-if="$q.screen.gt.xs">home</span>
      </q-route-tab>

      <q-route-tab
        name="search"
        to="/search"
        :class="{ 'text-red-14': tab === 'search' }"
      >
        <q-icon size="70px" name="svguse:/icons.svg#search|0 0 75 50" alt="" />
      </q-route-tab>
      <q-route-tab
        name="add"
        to="/create"
        :class="{ 'text-red-14': tab === 'add' }"
      >
        <q-icon size="70px" name="svguse:/icons.svg#add|0 0 75 50" alt="" />
      </q-route-tab>
      <q-route-tab
        name="favorite"
        to="/favorite"
        :class="{ 'text-red-14': tab === 'favorite' }"
      >
        <q-icon size="70px" name="svguse:/icons.svg#like|0 0 75 50" alt="" />
      </q-route-tab>

      <q-route-tab to="/dashboard" name="dashboard">
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Footer",
  setup() {
    return {
      tab: ref("home"),
    };
  },
};
</script>

<style lang="scss" scoped>
.activeTab img {
  fill: black;
}
</style>
