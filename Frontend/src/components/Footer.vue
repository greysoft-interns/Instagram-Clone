<template>
  <q-footer
    class="bg-white flex items-center justify-center"
    bordered
    style="width: 100%"
  >
    <q-tabs
      v-model="tab"
      class="text-black q-pa-none flex items-center justify-around"
      v-for="link in links"
      :key="link.name"
      vertical
      style="height: auto"
    >
      <q-route-tab
        :name="link.name"
        :to="link.path"
        :class="{
          'text-red-14 ': link.path === $route.path,
          'tab-below': $q.screen.lt.sm,
          'red-border': link.path === $route.path && $q.screen.gt.xs,
        }"
        @click="setTabBorder(link.path)"
      >
        <q-icon size="70px" :name="link.iconUrl" alt="" />
        <span class="label" v-if="$q.screen.gt.sm">{{ link.name }}</span>
      </q-route-tab>
    </q-tabs>
    <!-- <q-tabs


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
    </q-tabs> -->
  </q-footer>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "stores/user";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

const $q = useQuasar();
const userStore = useUserStore();

const { logoutUser } = userStore;

export default {
  setup() {
    const tab = ref("home");

    const setTabBorder = (path) => {
      // Set the current tab based on the clicked tab
      tab.value = path;
    };
    return {
      logoutUser,
      tab,
      setTabBorder,
      links: [
        {
          name: "home",
          iconUrl: "svguse:/icons.svg#home|0 0 75 50",
          path: "/home",
        },
        {
          name: "search",
          iconUrl: "svguse:/icons.svg#search|0 0 75 50",
          path: "/search",
        },
        {
          name: "create",
          iconUrl: "svguse:/icons.svg#add|0 0 75 50",
          path: "/create",
        },
        {
          name: "like",
          iconUrl: "svguse:/icons.svg#like|0 0 75 50",
          path: "/favorite",
        },
        {
          name: "profile",
          iconUrl: "svguse:/icons.svg#profile|0 0 75 50",

          path: "/dashboard",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.red-border {
  border-right: 2px solid red;
}
.tab-below {
  border-bottom: 2px solid red;
}
</style>
