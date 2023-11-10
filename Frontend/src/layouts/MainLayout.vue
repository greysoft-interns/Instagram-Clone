<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <div
        :style="{ width: $q.screen.gt.sm ? '200px' : '100px' }"
        class="col-2"
        style="border-right: 1px solid rgb(216, 151, 151); height: 100vh;"
        v-if="$q.screen.gt.xs"
      >
        <search />
      </div>
      <div class="col">
        <q-page-container class="bg-grey-1">
          <router-view />
        </q-page-container>
      </div>
    </div>
    <Footer v-if="$q.screen.lt.sm" />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import search from "../components/Search.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    search,
    Footer,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
