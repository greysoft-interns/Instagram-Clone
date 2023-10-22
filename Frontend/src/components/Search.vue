<template>
  <div
    v-if="$q.screen.gt.xs"
    style="height: 100%; width: 100%"
    class="flex column text-center justify-around items-center"
  >
    <a
      :class="[
        $q.screen.name === 'sm'
          ? 'text-grand-hotel text-bold text-h4 custom-link'
          : '',
      ]"
      href="#"
    >
      <span
        v-if="$q.screen.name !== 'sm'"
        class="text-grand-hotel text-bold text-h4 custom-link"
        >Instagram</span
      >
      <q-icon
        v-else
        name="camera_alt"
        size="2rem"
        class="q-mx-auto self-center"
      />
    </a>
    <div style="width: 100%" class="text-center">
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
            'red-border': $q.screen.gt.xs,
          }"
        >
          <q-icon size="70px" :name="link.iconUrl" alt="" />
          <span class="label" v-if="$q.screen.gt.sm">{{ link.name }}</span>
        </q-route-tab>
      </q-tabs>

      <!-- <q-tabs
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
          :class="{ 'text-red-14 red-border': link.path === $route.path }"
        >
          <q-icon size="70px" :name="link.iconUrl" alt="" />
          <span class="label" v-if="$q.screen.gt.sm">{{ link.name }}</span>
        </q-route-tab>
   </q-tabs> -->
      <!-- <q-route-tab
          name="search"
          to="/search"
          :class="{ 'text-red-14': tab === 'search' }"
        >
          <q-icon
            size="70px"
            name="svguse:/icons.svg#search|0 0 75 50"
            alt=""
          />
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
        </q-route-tab> -->

      <!-- <q-dialog v-model="dialog" :position="position">
        <q-card style="width: 350px; height: 100vh">
          <q-card-section class="row items-center no-wrap">
            <div class="flex" style="width: 100%; height: 600px">
              <div style="width: 100%">
                <p class="text-h4 q-pa-md">Search</p>
                <q-input color="black" filled v-model="search" label="Search">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <div
                class="flex items-center justify-center"
                style="height: 100%; width: 100%"
              >
                <p class="text-caption">No Recent Searches</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog> -->
      <!-- <q-dialog v-model="addPost">
        <q-card v-if="step === 'step-1'" style="height: 800px; width: 500px">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Create New Post</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section
            class="flex items-center justify-between q-pa-md"
            style="height: 70px"
          >
            <q-file
              class="q-pa-none"
              style="width: 250px"
              @input="previewImage"
              type="file"
              clearable
              color="blue"
              standout
              bottom-slots
              @clear="resetImage"
              v-model="fileUpload"
              label="Upload Image"
              counter
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <q-btn label="Next" @click="nextStep" />
          </q-card-section>
          <q-card-section
            v-if="preview"
            style="width: 100%; margin-top: 40px"
            class="flex items-center justify-center"
          >
            <img
              :src="preview"
              style="width: 400px; height: auto; object-fit: cover"
              class="img-fluid"
            />
            <div
              class="flex items-center justify-between q-mx-md"
              style="width: 100%"
            >
              <p class="mb-0">file name: {{ image.name }}</p>
              <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
            </div>
          </q-card-section>
        </q-card>
        <q-card
          v-else-if="step === 'step-2'"
          style="height: 800px; width: 100%"
        >
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6 text-black">
              <q-icon
                class="cursor-pointer"
                name="keyboard_backspace"
                @click="prevStep"
                size="2rem"
              />
            </div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section>
            <q-input
              class="q-my-md"
              outlined
              v-model="caption"
              label="Caption"
            />
            <q-input
              class="q-my-md"
              outlined
              v-model="location"
              label="Location"
            />
            <q-circular-progress
              v-if="userLoading"
              indeterminate
              rounded
              size="32px"
              color="blue"
              style="width: 100%"
              class="q-my-md flex justify-center"
            />
            <q-btn
              v-else
              class="q-my-md"
              style="width: 100%"
              outline
              color="primary"
              @click="postUpload"
              label="Post"
            />
          </q-card-section>
        </q-card>
      </q-dialog> -->
    </div>

    <div class="">
      <q-btn :onClick="logoutUser" color="blue" label="Logout" />
    </div>
  </div>
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
    return {
      logoutUser,
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
  border-right: 2px solid red;
}
</style>
