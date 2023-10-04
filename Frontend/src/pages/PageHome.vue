<template>
  <q-page>
    <div class="xs">
      <div class="col" style="height: 100vh;">
        <div class="column" style="height: 100%">
          <div class="col-2 justify-center q-mx-lg q-mt-lg">
            <div class="q-pa-md">
              <q-scroll-area style="height: 130px; max-width: 790px">
                <div
                  class="row no-wrap flex justify-center align-items-center q-mb-lg"
                >
                  <div
                    v-for="image in images"
                    :key="image.id"
                    style="width: 100px; height: 100px; background-color: #fff"
                    class="q-pa-sm"
                  >
                    <div
                      class="flex justify-center align-items-center"
                      style="width: 66px"
                    >
                      <q-avatar size="60px">
                        <img :src="image.url" />
                      </q-avatar>
                      <p>name</p>
                    </div>
                  </div>
                </div>
              </q-scroll-area>
            </div>
          </div>
          <div class="col" style="height: auto; background-color: pink">
            <q-scroll-area
              style="height: 100%; max-width: 100%"
              class="q-pa-sm custom-center"
            >
              <div class="column custom-center" style="height: 100%">
                <q-dialog v-model="commDialogMobile" position="bottom">
                  <q-card style="width: 1100px; max-width: 90vw; height: 400px">
                    <CommentDialog
                      :post="dialogContent"
                      :text="text"
                      @clickLike="clickLike"
                      @addComment="addComment"
                      :dialogHeight="dialogHeight"
                    />
                  </q-card>
                </q-dialog>
                <div
                  v-for="postData in getPostsData"
                  :key="postData.id"
                  class="col"
                  style="width: 80%"
                >
                  <TimelinePost
                    :postData="postData"
                    @addComment="addComment"
                    @clickLike="clickLike"
                    @OpenCommentDialog="OpenCommentDialogMobile"
                  />
                </div>
              </div>
            </q-scroll-area>
          </div>
        </div>
      </div>
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
                  <div class="q-pa-md">
                    <q-scroll-area style="height: 130px; max-width: 790px">
                      <div
                        class="row no-wrap flex justify-center align-items-center q-mb-lg"
                      >
                        <div
                          v-for="image in images"
                          :key="image.id"
                          style="
                            width: 100px;
                            height: 100px;
                            background-color: #fff;
                          "
                          class="q-pa-sm"
                        >
                          <div
                            class="flex justify-center align-items-center"
                            style="width: 66px"
                          >
                            <q-avatar size="60px">
                              <img :src="image.url" />
                            </q-avatar>
                            <p>name</p>
                          </div>
                        </div>
                      </div>
                    </q-scroll-area>
                  </div>
                  <!-- <q-scroll-area style="height: 100%; max-width: 790px">
                    <div
                      v-for="image in images"
                      :key="image.id"
                      class="row no-wrap"
                      style="
                        height: 110px;
                        width: 100%;
                        background-color: #751616;
                      "
                    >
                      <div class="" style="width: 66px">
                        <q-avatar size="60px">
                          <img :src="image.url" />
                        </q-avatar>
                        <p>name</p>
                      </div>
                    </div>
                  </q-scroll-area> -->
                </div>
                <div class="col">
                  <q-scroll-area
                    style="height: 100%; max-width: 100%"
                    class="q-pa-sm custom-center"
                  >
                    <div class="column custom-center" style="height: 100%">
                      <q-dialog v-model="commDialog">
                        <q-card style="width: 1100px; max-width: 90vw; height: 800px">
                          <CommentDialog
                            :post="dialogContent"
                            :text="text"
                            @clickLike="clickLike"
                            @addComment="addComment"
                          />
                        </q-card>
                      </q-dialog>
                      <div
                        v-for="postData in getPostsData"
                        :key="postData.id"
                        class="col"
                        style="width: 80%"
                      >
                        <TimelinePost
                          :postData="postData"
                          @addComment="addComment"
                          @clickLike="clickLike"
                          @OpenCommentDialog="OpenCommentDialog"
                        />
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
                        <div class="q-ma-none">{{ user?.username }}</div>
                        <div class="q-ma-none">{{ user?.name }}</div>
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
import TimelinePost from "../components/TimelinePost.vue";

const postStore = usePostStore();
const userStore = useUserStore();
const { groupedPosts, getPostsData } = storeToRefs(postStore); // state and getters need "storeToRefs"
const { user, getUserDetails } = storeToRefs(userStore); // state and getters need "storeToRefs"
const { fetchUserDetails, reset } = userStore;
const dialog = ref(false);
const commDialog = ref(false);
const commDialogMobile = ref(false);
const addPost = ref(false);
const postliked = ref(false);
const position = ref("left");
const text = ref("");
const search = ref("");
const dialogHeight = ref("md");
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
      commDialogMobile,

      images: [
        {
          id: 1,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 2,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 3,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 4,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 5,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 6,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 7,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 8,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
        {
          id: 9,
          url: "https://cdn.quasar.dev/img/boy-avatar.png",
        },
      ],
    };
  },
  methods: {
    // liked(postId) {
    //   const foundElement = groupedPosts.value.findIndex((element) => element.id === postId);
    //   return groupedPosts[foundElement].likes.includes(postId);
    // },
    clickLike: (id) => {
      const foundElement = groupedPosts.value.findIndex(
        (element) => element.id === id
      );
      const foundliked = groupedPosts.value[foundElement].likes.findIndex(
        (element) => element === "afimm_"
      );
      const isLiked = groupedPosts.value[foundElement].likes.includes("afimm_");
      if (isLiked) {
        groupedPosts.value[foundElement].likes = groupedPosts.value[
          foundElement
        ].likes.filter((element) => element !== "afimm_");
      } else {
        groupedPosts.value[foundElement].likes.push("afimm_");
      }
    },
    OpenCommentDialog: (post) => {
      dialogContent.value = post;
      dialogHeight.value="md"
      commDialog.value = true;
    },
    OpenCommentDialogMobile: (post) => {
      dialogHeight.value="xs"
      dialogContent.value = post;
      console.log(dialogHeight.value)
      commDialogMobile.value = true;
    },
    addComment: (id, textValue) => {
      const foundElement = groupedPosts.value.findIndex(
        (element) => element.id === id
      );
      const commentData = {
        user: user.value.username,
        description: textValue,
      };
      groupedPosts.value[foundElement].comments.push(commentData);
      text.value = "";
    },
  },
  computed: {},
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
