<template>
  <div>
    <div class="md">
      <div class="q-py-md" style="height: 100vh; width: 100%">
        <a class="text-grand-hotel text-bold text-h4 custom-link" href="#"
          >Instagram</a
        >
        <q-tabs v-model="tab" vertical class="text-black q-pt-lg">
          <div class="column" style="height: 100%">
            <div class="col-10">
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
                <q-card
                  v-if="step === 'step-1'"
                  style="height: 800px; width: 500px"
                >
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
                  style="height: 800px; width: 500px"
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
              </q-dialog>
            </div>
            <div class="col">
              <q-btn :onClick="logoutUser" color="blue" label="Logout"/>
            </div>
          </div>
        </q-tabs>
      </div>
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
const {
  user,
  getUserDetails,
  userLoading,
  userSuccess,
  userError,
  userMessage,
} = storeToRefs(userStore); // state and getters need "storeToRefs"
const { uploadPosts, reset, logoutUser } = userStore;
const dialog = ref(false);
const fileUpload = ref(null);
const image = ref(null);
const preview = ref(null);
const commentDialog = ref(false);
const addPost = ref(false);
const position = ref("left");
const text = ref("");
const search = ref("");
const stepState = ref(1);
const step = ref("step-1");
const caption = ref("Meeeeeeeeeeeee");
const location = ref("Nigeria");

export default{
  setup(){
    return {
      dialog,
      fileUpload,
      image,
      preview,
      commentDialog,
      addPost,
      position,
      text,
      search,
      stepState,
      step,
      caption,
      location,
      userLoading,
      logoutUser,
      open: (pos) => {
        position.value = pos;
        dialog.value = true;
      },
      previewImage : (event) => {
        var input = event.target;
        if (input.files) {
          var reader = new FileReader();
          reader.onload = (e) => {
            preview.value = e.target.result;
          };
          image.value = input.files[0];
          reader.readAsDataURL(input.files[0]);
        }
      },
      resetImage: () => {
        image.value = null;
        preview.value = null;
      },
      nextStep: () => {
        stepState.value = stepState.value + 1;
        step.value = `step-${stepState.value}`;
      },
      prevStep: () => {
        stepState.value = stepState.value - 1;
        step.value = `step-${stepState.value}`;
      },
      postUpload: async () => {
        if(caption.value === "" || location.value === ""){
          $q.notify({
            message: 'Enter Missing Fields!',
            color: "red",
          });
        } else {
          let formdata = new FormData();
          formdata.append("posts", fileUpload.value);
          formdata.append("caption", caption.value);
          formdata.append("location", location.value);
          await uploadPosts(formdata);
          caption.value = "" ;
          location.value = "";
          fileUpload.value = "";
          if (userSuccess && userMessage) {
            $q.notify({
              message: userMessage.value,
              color: "green",
            });
          }
        }
      },
    
    }
  }
}
</script>

<style lang="scss" scoped></style>
