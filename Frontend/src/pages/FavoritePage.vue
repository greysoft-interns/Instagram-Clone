<template>
  <q-page>
    <div class="col" style="height: 100vh">
      <div class="col">
        <q-tabs v-model="tab" inline-label no-caps class="bg-white text-black">
          <q-tab name="following" label="Following" />
          <q-tab name="you" label="You" />
        </q-tabs>
      </div>
      <div class="col">1 of 2</div>
    </div>
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
import { ref } from "vue";
export default {
  name: "FavoritePage",
  components: {
    Footer,
  },
  setup() {
    return {
      tab: ref("following"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
