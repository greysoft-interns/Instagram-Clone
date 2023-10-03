<template>
  <div>
    <div class="md">
      <div class="q-py-md" style="height: 100vh; width: 100%">
        <a class="text-grand-hotel text-bold text-h4 custom-link" href="#"
          >Instagram</a
        >
        <q-tabs v-model="tab" vertical class="text-black q-pt-lg">
          <a href="#/" class="custom-link">
            <q-tab class="flex flex-row" name="home" icon="home">
              <p class="text-caption">home</p>
            </q-tab>
          </a>
          <q-tab name="search" icon="search" @click="open('left')">
            <p class="text-caption">search</p>
          </q-tab>
          <q-tab name="add_box" icon="add_box" @click="addPost = true">
            <p class="text-caption">Create</p>
          </q-tab>
          <a href="#/home" class="custom-link">
            <q-tab name="perm_identity" icon="perm_identity">
              <p class="text-caption">Profile</p>
            </q-tab>
          </a>
          <q-dialog v-model="dialog" :position="position">
            <q-card style="width: 350px; height: 100vh">
              <!-- <q-linear-progress :value="0.6" color="pink" /> -->

              <q-card-section class="row items-center no-wrap">
                <div class="flex" style="width: 100%; height: 600px">
                  <div style="width: 100%">
                    <p class="text-h4 q-pa-md">Search</p>
                    <q-input
                      color="black"
                      filled
                      v-model="search"
                      label="Search"
                    >
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
          </q-dialog>
          <q-dialog v-model="addPost">
            <q-card style="height: 500px; width: 500px">
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Create New Post</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>

              <q-card-section
                class="flex items-center justify-center"
                style="height: 400px"
              >
                <q-file
                  clearable
                  color="blue"
                  standout
                  bottom-slots
                  v-model="fileUpload"
                  label="Label"
                  counter
                  @change="previewImage"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
              </q-card-section>
              <q-card-section v-if="preview">
                <img :src="preview" class="img-fluid" />
                <p class="mb-0">file name: {{ image.name }}</p>
                <p class="mb-0">size: {{ image.size/1024 }}KB</p>
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const dialog = ref(false);
const fileUpload = ref(null);
const image = ref(null);
const preview = ref(null);
const commentDialog = ref(false);
const addPost = ref(false);
const position = ref("left");
const text = ref("");
const search = ref("");
const step = ref("step-1");


export default {
  name: "Search",
  data() {
    return {
      tab: ref("mails"),
      position,
      text,
      dialog,
      commentDialog,
      search,
      addPost,
      fileUpload,
      preview,
      image,
      step,
      open: (pos) => {
        position.value = pos;
        dialog.value = true
      },
    };
  },
  methods: {
    previewImage: function(event) {
      console.log("Here!");
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          preview.value = e.target.result;
        }
        image.value=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    reset: function() {
      image.value = null;
      preview.value = null;
    },
  }
}
</script>

<style lang="scss" scoped></style>
