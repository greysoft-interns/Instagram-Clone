<template>
  <q-footer class="small-screen bg-white" bordered>
    <q-tabs v-model="tab" outside-arrows=false class="bg-white text-black shadow-2">
      <q-route-tab name="home" to="/" icon="home" />
      <q-route-tab name="search" to="/search" icon="search" />
      <q-route-tab class="text-black" name="add" to="/create" icon="add_box" />
      <q-route-tab name="favorite" to="/" icon="favorite_border" />
      <q-route-tab>
        <q-avatar to="/" size="32px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
