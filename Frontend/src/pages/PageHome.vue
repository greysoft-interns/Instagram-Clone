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
                        <CommentDialog :post="dialogContent" :text="text" @clickLike="clickLike" @addComment="addComment"/>
                      </q-dialog>
                      <div
                        v-for="postData in getPostsData"
                        :key="postData.id"
                        class="col"
                        style="width: 80%"
                      >
                      <TimelinePost :postData="postData" @addComment="addComment" @clickLike="clickLike" @OpenCommentDialog="OpenCommentDialog"/>
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
import TimelinePost from "../components/TimelinePost.vue"

const postStore = usePostStore();
const userStore = useUserStore();
const { groupedPosts, getPostsData } = storeToRefs(postStore); // state and getters need "storeToRefs"
const { user, getUserDetails } = storeToRefs(userStore); // state and getters need "storeToRefs"
// const { increment } = store; // actions can be destructured directly
const dialog = ref(false);
const commDialog = ref(false);
const addPost = ref(false);
const postliked = ref(false);
const position = ref("left");
const text = ref("");
const search = ref("");
const dialogContent = ref({});
export default {
  name: "PageHome",
  components: { Footer, Header, Search, CommentDialog, TimelinePost },
  data() {
    return {
      tab: ref("mails"),
      position,
      text,
      dialog,
      search,
      addPost,
      postliked,
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
    // liked(postId) {
    //   const foundElement = groupedPosts.value.findIndex((element) => element.id === postId);
    //   return groupedPosts[foundElement].likes.includes(postId);
    // },
    clickLike: () => {
      // const foundElement = groupedPosts.value.findIndex((element) => element.id === id);
      // if(liked.value){
      //   delete groupedPosts.value[foundElement];
      // } else {
      //   groupedPosts.value.push("afimm_")
      // }
      postliked.value = !postliked.value;
    },
    OpenCommentDialog: (post) => {
      dialogContent.value = post;
      commDialog.value = true;
    },
    addComment: (id, textValue) => {
      const foundElement = groupedPosts.value.findIndex((element) => element.id === id);
      const commentData = {
        user: "real_5",
        description: textValue,
      };
      groupedPosts.value[foundElement].comments.push(commentData);
      text.value = "";
    },
  },
  computed: {
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
