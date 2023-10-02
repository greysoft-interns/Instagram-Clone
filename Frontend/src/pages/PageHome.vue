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
          style="
            width: 230px;
            height: 100%;
            border-right: 1px solid rgb(111, 111, 111);
          "
        >
          <Search />
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
                      <q-dialog v-model="commDialog">
                        <CommentDialog :post="dialogContent" />
                      </q-dialog>
                      <div
                        v-for="postData in getPostsData"
                        :key="postData.id"
                        class="col"
                        style="width: 80%"
                      >
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
                              :src="postData.url"
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
                                    @click="clickLike(postData.id)"
                                  />
                                  <q-icon
                                    v-else
                                    class="cursor-pointer text-red"
                                    size="1.6rem"
                                    name="favorite"
                                    @click="clickLike(postData.id)"
                                  />
                                  <q-icon
                                    class="cursor-pointer"
                                    @click="OpenCommentDialog(postData)"
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
                                  >{{ postData.likes.length }} likes</a
                                >
                                <p class="col" style="margin: 0">
                                  afimm_ <span>{{ postData.caption }}</span>
                                </p>
                                <a
                                  class="col custom-link"
                                  style="width: fit-content"
                                  href="#"
                                  @click="OpenCommentDialog(postData)"
                                  >View all
                                  {{ postData.comments.length }} comments</a
                                >
                                <q-input
                                  class="col custom-btn-none"
                                  v-model="text"
                                  label="Add a comment"
                                  dense
                                >
                                  <template v-slot:after>
                                    <q-icon class="cursor-pointer" @click="addComment(postData.id)" name="send" />
                                  </template>
                                </q-input>
                              </div>
                            </div>
                          </q-card-section>

                          <q-card-section class="q-pt-none"> </q-card-section>
                        </q-card>
                      </div>
                    </div>
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
                        <div class="q-ma-none">{{ user.username }}</div>
                        <div class="q-ma-none">{{ user.name }}</div>
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
import { usePostStore } from "stores/posts";
import { useUserStore } from "stores/user";
import { storeToRefs } from "pinia";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search.vue";
import CommentDialog from "../components/CommentDialog.vue";

const postStore = usePostStore();
const userStore = useUserStore();
const { groupedPosts, getPostsData } = storeToRefs(postStore); // state and getters need "storeToRefs"
const { user, getUserDetails } = storeToRefs(userStore); // state and getters need "storeToRefs"
// const { increment } = store; // actions can be destructured directly
const dialog = ref(false);
const commDialog = ref(false);
const addPost = ref(false);
const liked = ref(false);
const position = ref("left");
const text = ref("");
const search = ref("");
const dialogContent = ref({});
export default {
  name: "PageHome",
  components: { Footer, Header, Search, CommentDialog },
  data() {
    return {
      tab: ref("mails"),
      position,
      text,
      dialog,
      search,
      addPost,
      liked,
      open: (pos) => {
        position.value = pos;
        dialog.value = true;
      },
      groupedPosts,
      getPostsData,
      user,
      dialogContent,
      commDialog,
    };
  },
  methods: {
    clickLike: (id) => {
      const foundElement = groupedPosts.value.findIndex((element) => element.id === id)
      liked.value = !liked.value;
    },
    OpenCommentDialog: (post) => {
      dialogContent.value = post;
      commDialog.value = true;
    },
    addComment: (id) => {
      const foundElement = groupedPosts.value.findIndex((element) => element.id === id)
      const commentData = {
        user: "real_5",
        description: text.value
      }
      groupedPosts.value[foundElement].comments.push(commentData);
      text.value = "";
    }
  },
  computed: {
    // getTimelinePosts(){
    //   const timeline = getPostsData;
    //   return timeline;
    // }
    // getCommentsDialog(){
    //   const newArray = groupedPosts.value.map(eachPost => false);
    //   console.log(newArray);
    //   return newArray;
    // }
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
