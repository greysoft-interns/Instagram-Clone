<template>
  <q-page class="constrain-more q-pd-md">
    <div class="camera-frame q-pa-md">
      <img
        src="https://cdn.quasar.dev/img/chicken-salad.jpg"
        class="full-width"
      />
    </div>
    <div class="text-center q-pa-md">
      <q-btn round color="grey-10" icon="eva-camera" />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input v-model="text" label="Caption" class="col col-sm-8" dense />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input v-model="text" label="Location" class="col-12 col-sm-8" dense>
        <template v-slot:append>
          <q-btn round dense flat icon="eva-navigation-2-outline" />
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-mt-md">
      <q-btn unelevated rounded color="primary" label="Post Image" />
    </div>
  </q-page>
</template>

<script>
// import { defineComponent } from "vue";

export default {
  name: "PageCamera",
};
</script>
<style lang="scss">
.camera-frame {
  min-height: 200px;
  border: 2px solid $grey-10;
  border-radius: 10px;
}
</style>
