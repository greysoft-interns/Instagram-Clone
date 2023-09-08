<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" bordered>
      <q-toolbar class="text-grey-10 constrain">
        <q-btn
          class="large-screen q-mr-sm"
          flat
          round
          icon="eva-camera-outline"
          size="20px"
          to="/camera"
        />
        <q-separator class="large-screen" vertical spaced />

        <q-toolbar-title class="text-grand-hotel text-bold text-teal-8">
          Instagram
        </q-toolbar-title>
        <q-btn
          class="large-screen"
          flat
          round
          icon="eva-home-outline"
          size="20px"
          to="/"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-1 q-ma-sm">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.q-footer .q-tab__icon {
  font-size: 30px;
}
.q-toolbar__title {
  @media (max-width: $breakpoint-xs-max) {
    text-align: center;
  }
  @media (min-width: $breakpoint-sm-min) {
    height: 80px;
    display: flex;
    align-items: center;
  }
  font-size: 35px;
}

.q-toolbar a {
  @media (min-width: $breakpoint-sm-min) {
    // display: block;
    display: flex;
    align-items: center;
  }
}
</style>
