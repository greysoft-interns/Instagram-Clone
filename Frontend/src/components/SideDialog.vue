<template>
  <div
    v-if="$q.screen.lt.md"
    style="height: 100px; z-index: 99999999"
    class="flex justify-end items-center q-mb-xs bg-transparent q-pa-lg"
  >
    <q-btn flat class="flex items-center justify-center" @click="open('left')">
      <q-icon name="settings" size="md" />
    </q-btn>
    <q-dialog
      v-model="dialog"
      position="right"
      style="height: 100vh; width: 100%"
    >
      <q-btn
        icon="close"
        flat
        round
        dense
        v-close-popup
        class="flex justify-end"
      />
      <div class="column bg-blue q-pa-xl" style="height: 570px; width: 100%">
        <div class="col-2 q-mt-lg">
          <div class="row">
            <div class="col-2" style="margin-right: 10px">
              <q-avatar size="52px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </div>
            <div class="col-6 flex column items-start justify-center">
              <!-- <div class="q-ma-none">{{ user?.username }}</div>
                <div class="q-ma-none">{{ user?.name }}</div> -->
            </div>
            <div class="col flex column items-center justify-center">
              <a class="custom-link" href="#/login">Switch</a>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="column" style="height: 100%">
            <div class="col-1.5">
              <div class="row flex items-center justify-between">
                <div class="col">Suggested For You</div>
                <div class="col flex justify-end">See All</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const dialog = ref(false);
    return {
      dialog,
      open: (pos) => {
        dialog.value = true;
        console.log(121);
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
