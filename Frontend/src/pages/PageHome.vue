<template>
  <q-page>
    <div class="xs">
      <Footer />
    </div>
    <div class="sm">
      <Footer />
    </div>
    <div class="md" style="height: 100vh">
      <div class="row" style="height: 100vh">
        <div
          class="col-2 q-px-md"
          style="border-right: width: 230px; height: 100%; 1px solid rgb(111, 111, 111)"
        >
          <div class="q-py-md" style="height: 100vh; width: 100%">
            <a class="text-grand-hotel text-bold text-h4 custom-link" href="#">Instagram</a>
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
                      bg-color="blue"
                      style="max-width: 300px"
                      v-model="filesMaxSize"
                      outlined
                      label="Select From Computer (Not more than 2kb)"
                      multiple
                      max-file-size="2048"
                      @rejected="onRejected"
                    />
                  </q-card-section>
                </q-card>
              </q-dialog>
            </q-tabs>
          </div>
        </div>
        <div class="col">
          <div class="row" style="height: 100%">
            <div class="col">
              <div class="column" style="height: 100%">
                <div class="col-2 justify-center q-mx-lg q-mt-lg">
                  <q-scroll-area style="height: 100%; max-width: 790px">
                    <div
                      class="row no-wrap flex items-center justify-center"
                      style="height: 110px; width: 100%"
                    >
                      <!-- <div v-for="n in 10" :key="n" style="width: 150px" class="q-pa-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quae veritatis blanditiis sequi id expedita amet esse aspernatur! Iure, doloribus!
                      </div> -->
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>

                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                      <div
                        class="q-mr-md story-outline flex justify-center"
                        style="width: 66px"
                      >
                        <q-avatar size="60px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <p>name</p>
                      </div>
                    </div>
                  </q-scroll-area>
                </div>
                <div class="col">
                  <q-scroll-area
                    style="height: 100%; max-width: 100%"
                    class="q-pa-sm custom-center"
                  >
                    <div class="column custom-center" style="height: 100%">
                      <div class="col" style="width: 80%">
                        <q-card class="my-card q-my-lg">
                          <q-card-section class="row justify-between q-pa-md">
                            <div class="text-h6">
                              <div class="row">
                                <!-- <q-skeleton bordered type="circle" /> -->
                                <q-avatar size="40px">
                                  <img
                                    src="https://cdn.quasar.dev/img/boy-avatar.png"
                                  />
                                </q-avatar>
                                <div class="col q-mx-sm" style="height: 40px">
                                  <div class="text-caption">
                                    <a class="custom-link" href="#">afimm_</a>
                                  </div>
                                  <div class="text-caption">Original audio</div>
                                </div>
                              </div>
                            </div>
                            <div class="q-py-sm">
                              <q-icon
                                class="cursor-pointer"
                                name="more_horiz"
                                size="1.7rem"
                              />
                            </div>
                          </q-card-section>
                          <q-card-section
                            class="q-pa-none"
                            style="height: 400px"
                          >
                            <!-- <q-skeleton class="bg-grey" height="100%" square /> -->
                            <img
                              class="cursor-pointer"
                              @dblclick="clickLike"
                              style="
                                height: 100%;
                                width: 100%;
                                object-fit: contain;
                              "
                              src="https://cdn.quasar.dev/img/mountains.jpg"
                            />
                          </q-card-section>

                          <q-card-section>
                            <div class="row flex justify-between">
                              <div class="col flex justify-start">
                                <div
                                  class="flex no-wrap justify-between"
                                  style="width: 130px"
                                >
                                  <q-icon
                                    v-if="!liked"
                                    class="cursor-pointer"
                                    size="1.6rem"
                                    name="favorite_border"
                                    @click="clickLike"
                                  />
                                  <q-icon
                                    v-else
                                    class="cursor-pointer text-red"
                                    size="1.6rem"
                                    name="favorite"
                                    @click="clickLike"
                                  />
                                  <q-icon
                                    class="cursor-pointer"
                                    @click="commentDialog = true"
                                    size="1.6rem"
                                    name="chat_bubble_outline"
                                  />
                                  <q-icon
                                    class="cursor-pointer"
                                    size="1.6rem"
                                    name="send"
                                  />
                                </div>
                              </div>
                              <div class="col flex justify-end">
                                <q-icon
                                  class="cursor-pointer"
                                  size="1.6rem"
                                  name="turned_in_not"
                                />
                              </div>
                            </div>
                            <div>
                              <div class="column q-my-md" style="height: 150px">
                                <a
                                  class="col custom-link"
                                  href="#"
                                  style="width: fit-content"
                                  >3, 300 likes</a
                                >
                                <p class="col" style="margin: 0">
                                  afimm_ Here we go, just randon text right here
                                </p>
                                <a
                                  class="col custom-link"
                                  style="width: fit-content"
                                  href="#"
                                  >View all 3 comments</a
                                >
                                <q-input
                                  class="col custom-btn-none"
                                  v-model="text"
                                  label="Add a comment"
                                  dense
                                />
                              </div>
                            </div>
                          </q-card-section>

                          <q-card-section class="q-pt-none"> </q-card-section>
                        </q-card>
                      </div>
                    </div>
                    <q-dialog v-model="commentDialog">
                      <q-card
                        style="
                          width: 1100px;
                          max-width: 90vw;
                          height: 600px;
                        "
                      >
                        <q-card-section
                          style="height: 100%; width: 100%"
                        >
                          <div
                            class="row"
                            style="height: 100%; width: 100%"
                          >
                            <div
                              class="col"
                              style="
                                border-right: 1px solid black;
                                height: 100%;
                              "
                            >
                              .col
                            </div>
                            <div class="col">
                              <div class="column" style="height: 100vh">
                                <div class="col-1 row justify-between q-px-md q-pb-sm">
                                  <div class="text-h6">
                                    <div class="row">
                                      <!-- <q-skeleton bordered type="circle" /> -->
                                      <q-avatar size="40px">
                                        <img
                                          src="https://cdn.quasar.dev/img/boy-avatar.png"
                                        />
                                      </q-avatar>
                                      <div
                                        class="col q-mx-sm"
                                        style="height: 40px"
                                      >
                                        <div class="text-caption">
                                          <a
                                            class="custom-link"
                                            href="#"
                                            >afimm_</a
                                          >
                                        </div>
                                        <div class="text-caption">
                                          Original audio
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="q-py-sm">
                                    <q-icon
                                      class="cursor-pointer"
                                      name="more_horiz"
                                      size="1.7rem"
                                    />
                                  </div>
                                </div>
                                <div class="col" style="border-top: 1px solid rgb(208, 208, 208); border-bottom: 1px solid rgb(208, 208, 208);">
                                    1 of 4
                                  </div>
                                <div class="col-1">
                                  <div class="row flex justify-between q-pa-md">
                                    <div class="col flex justify-start">
                                      <div
                                        class="flex no-wrap justify-between"
                                        style="width: 130px"
                                      >
                                        <q-icon
                                          v-if="!liked"
                                          class="cursor-pointer"
                                          size="1.6rem"
                                          name="favorite_border"
                                          @click="clickLike"
                                        />
                                        <q-icon
                                          v-else
                                          class="cursor-pointer text-red"
                                          size="1.6rem"
                                          name="favorite"
                                          @click="clickLike"
                                        />
                                        <q-icon
                                          class="cursor-pointer"
                                          @click="commentDialog = true"
                                          size="1.6rem"
                                          name="chat_bubble_outline"
                                        />
                                        <q-icon
                                          class="cursor-pointer"
                                          size="1.6rem"
                                          name="send"
                                        />
                                      </div>
                                    </div>
                                    <div class="col flex justify-end">
                                      <q-icon
                                        class="cursor-pointer"
                                        size="1.6rem"
                                        name="turned_in_not"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-1">
                                  <q-input
                                    class="col custom-btn-none q-mx-md"
                                    v-model="text"
                                    label="Add a comment"
                                    dense
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                  </q-scroll-area>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="" style="height: 100vh">
                <div class="column q-pa-md" style="height: 570px">
                  <div class="col-2 q-mt-lg">
                    <div class="row">
                      <div class="col-2" style="margin-right: 10px">
                        <q-avatar size="52px">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                      </div>
                      <div class="col-6 flex column items-start justify-center">
                        <div class="q-ma-none">afimm_</div>
                        <div class="q-ma-none">Miracle Jigah</div>
                      </div>
                      <div class="col flex column items-center justify-center">
                        Switch
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
                      <div class="col">
                        <div class="column" style="height: 100%">
                          <div class="col q-my-xs">
                            <div class="row flex items-center">
                              <div class="col-8">
                                <div class="row">
                                  <div class="col-3">
                                    <q-avatar size="42px">
                                      <img
                                        src="https://cdn.quasar.dev/img/boy-avatar.png"
                                      />
                                    </q-avatar>
                                  </div>
                                  <div
                                    class="col-8 flex column items-start justify-start"
                                  >
                                    <p class="q-ma-none">johnactive</p>
                                    <p class="q-ma-none">Followed by more...</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col flex justify-end">Follow</div>
                            </div>
                          </div>
                          <div class="col q-my-xs">
                            <div class="row flex items-center">
                              <div class="col-8">
                                <div class="row">
                                  <div class="col-3">
                                    <q-avatar size="42px">
                                      <img
                                        src="https://cdn.quasar.dev/img/boy-avatar.png"
                                      />
                                    </q-avatar>
                                  </div>
                                  <div
                                    class="col-8 flex column items-start justify-start"
                                  >
                                    <p class="q-ma-none">johnactive</p>
                                    <p class="q-ma-none">Followed by more...</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col flex justify-end">Follow</div>
                            </div>
                          </div>
                          <div class="col q-my-xs">
                            <div class="row flex items-center">
                              <div class="col-8">
                                <div class="row">
                                  <div class="col-3">
                                    <q-avatar size="42px">
                                      <img
                                        src="https://cdn.quasar.dev/img/boy-avatar.png"
                                      />
                                    </q-avatar>
                                  </div>
                                  <div
                                    class="col-8 flex column items-start justify-start"
                                  >
                                    <p class="q-ma-none">johnactive</p>
                                    <p class="q-ma-none">Followed by more...</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col flex justify-end">Follow</div>
                            </div>
                          </div>
                          <div class="col q-my-xs">
                            <div class="row flex items-center">
                              <div class="col-8">
                                <div class="row">
                                  <div class="col-3">
                                    <q-avatar size="42px">
                                      <img
                                        src="https://cdn.quasar.dev/img/boy-avatar.png"
                                      />
                                    </q-avatar>
                                  </div>
                                  <div
                                    class="col-8 flex column items-start justify-start"
                                  >
                                    <p class="q-ma-none">johnactive</p>
                                    <p class="q-ma-none">Followed by more...</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col flex justify-end">Follow</div>
                            </div>
                          </div>
                          <div class="col q-my-xs">
                            <div class="row flex items-center">
                              <div class="col-8">
                                <div class="row">
                                  <div class="col-3">
                                    <q-avatar size="42px">
                                      <img
                                        src="https://cdn.quasar.dev/img/boy-avatar.png"
                                      />
                                    </q-avatar>
                                  </div>
                                  <div
                                    class="col-8 flex column items-start justify-start"
                                  >
                                    <p class="q-ma-none">johnactive</p>
                                    <p class="q-ma-none">Followed by more...</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col flex justify-end">Follow</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">1 of 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";
import { ref } from "vue";
import Footer from "../components/Footer";
import Header from "../components/Header";

const dialog = ref(false);
const commentDialog = ref(false);
const addPost = ref(false);
const liked = ref(false);
const position = ref("left");
const text = ref("");
const search = ref("");
export default {
  name: "PageHome",
  components: { Footer, Header },
  data() {
    return {
      tab: ref("mails"),
      position,
      text,
      dialog,
      commentDialog,
      search,
      addPost,
      liked,
      open: (pos) => {
        position.value = pos;
        dialog.value = true;
      },
      posts: [
        {
          id: 1,
          caption: "The world is beautiful",
          location: "Kaduna State, Nigeria",
          date: "1693151695339",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
        },
        {
          id: 2,
          title: "yeshua",
          location: "Kaduna State, Nigeria",
          caption: "The world is beautiful",
          date: "1693151695339",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 3,
          title: "yeshua",
          caption: "The world is beautiful",
          date: "1693151695339",
          location: "Kaduna State, Nigeria",
          img: " https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 4,
          title: "yeshua",
          date: "1693151695339",
          caption: "The world is beautiful",
          location: "Kaduna State, Nigeria",
          img: " https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 5,
          title: "yeshua",
          date: "1693151695339",
          caption: "The world is beautiful",
          location: "Kaduna State, Nigeria",
          img: " https://cdn.quasar.dev/img/parallax2.jpg",
        },
      ],
    };
  },
  methods: {
    clickLike: () => {
      liked.value = !liked.value;
    },
  },
  filters: {
    newDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
};
</script>

<style lang="scss">
.card-post .q-img {
  min-height: 200px;
}

.custom-border {
  border: 1px solid red;
}

.story-outline {
  padding: 1px;
  border: 2px solid black;
  border-radius: 50%;
  height: 66px;
}
.q-tab__content {
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.q-tab__content p {
  margin: 0;
  margin-left: 10px;
  text-align: left;
}

.custom-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-link {
  color: black;
  text-decoration: none;
}
</style>
