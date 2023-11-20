<template>
  <q-page>
    <div class="col" style="height: 100vh">
      <q-scroll-area
        style="height: 95%; width: 100%"
        class="q-pa-sm custom-center"
      >
        <q-card v-if="step === 'step-1'" style="height: 800px; width: 100%">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Create New Post</div>
            <q-space />
            <q-btn
              v-show="$q.screen.xs"
              icon="close"
              flat
              round
              dense
              v-close-popup
            />
          </q-card-section>

          <q-card-section
            class="flex items-center justify-between q-pa-md"
            style="height: 70px"
          >
            <q-file
              class="q-pa-none"
              :style="$q.screen.xs ? 'width: 250px' : 'width: 350px'"
              @input="previewImage"
              type="file"
              clearable
              color="blue"
              standout
              bottom-slots
              max-file-size="512000"
              accept=".jpg, image/*"
              @clear="resetImage"
              v-model="fileUpload"
              :label="$q.screen.xs ? 'Upload (max-size: 500KB)': 'Upload Image (max-size: 500KB)'"
              @rejected="onRejected"
              counter
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <q-btn label="Next" @click="nextStep" />
          </q-card-section>
          <q-card-section
            v-if="preview && !limit"
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
              <div>
                <p>File Max Size: 500kb</p>
              </div>
              <div>
                <p class="mb-0">file name: {{ image.name }}</p>
                <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
              </div>
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
      </q-scroll-area>
    </div>
    <!-- <q-card v-if="step === 'step-1'" style="height: 800px; width: 100%">
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
    <q-card v-else-if="step === 'step-2'" style="height: 800px; width: 100%">
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
        <q-input class="q-my-md" outlined v-model="caption" label="Caption" />
        <q-input class="q-my-md" outlined v-model="location" label="Location" />
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
    </q-card> -->

    <!-- <div class="column" style="height: 100vh">
      <div class="col-1">
        <div class="flex row items-center justify-center q-py-lg q-px-lg">
          <div class="col text-left text-weight-light">
            <a href="/">Cancel</a>
          </div>
          <div class="col text-center text-weight-medium">
            Recents
            <q-icon name="keyboard_arrow_down" />
          </div>
          <div class="col text-right text-blue-6">Next</div>
        </div>
      </div>
      <div class="col-6 custom-border">.col-6</div>
      <div class="col custom-border">Auto</div>
      <div
        class="col-1 custom-border flex items-center justify-center"
        style="height: 50px"
      >
        <div
          class="flex row items-center justify-between q-pa-xs"
          style="width: 100%"
        >
          <div class="col text-center text-weight-medium">Library</div>
          <div class="col text-center text-grey-6">Photo</div>
          <div class="col text-center text-grey-6">Video</div>
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "stores/user";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";

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
const limit = ref(true);
const position = ref("left");
const tab = ref("left");
const text = ref("");
const search = ref("");
const stepState = ref(1);
const step = ref("step-1");
const caption = ref("");
const location = ref("");
const resetImage = () => {
  image.value = null;
  preview.value = null;
};

export default {
  setup() {
    const $q = useQuasar();
    return {
      tab,
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
      resetImage,

      open: (pos) => {
        position.value = pos;
        dialog.value = true;
      },
      previewImage: (event) => {
        const imgSixe = event.target.files[0].size / 1024;
        if (imgSixe < 500) {
          limit.value = true;
          var input = event.target;
          if (input.files) {
            var reader = new FileReader();
            reader.onload = (e) => {
              preview.value = e.target.result;
            };
            image.value = input.files[0];
            reader.readAsDataURL(input.files[0]);
          }
        } else {
            image.value = null;
            preview.value = null;
          }
      },
      nextStep: () => {
        if (limit.value) {
          stepState.value = stepState.value + 1;
          step.value = `step-${stepState.value}`;
        }
      },
      prevStep: () => {
        stepState.value = stepState.value - 1;
        step.value = `step-${stepState.value}`;
      },
      postUpload: async () => {
        if (
          caption.value === "" ||
          location.value === "" ||
          fileUpload.value === ""
        ) {
          $q.notify({
            message: "Enter Missing Fields!",
            color: "red",
          });
        } else {
          let formdata = new FormData();
          formdata.append("posts", fileUpload.value);
          formdata.append("caption", caption.value);
          formdata.append("location", location.value);
          await uploadPosts(formdata);
          caption.value = "";
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
      onRejected: async () => {
        limit.value = false;
        $q.notify({
          type: "negative",
          message: `Image Size is more than 500kb`,
        });
        // resetImage();
      },
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.custom-border {
  border: 1px solid red;
}
</style>
