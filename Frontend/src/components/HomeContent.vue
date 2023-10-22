<template>
  <div class="col">
    <div class="column" style="height: 100%">
      <div class="col">
        <q-toolbar class="bg-white text-black" v-if="$q.screen.lt.md">
          <q-toolbar-title
            class="text-grand-hotel text-bold text-h4 custom-link"
            >Instagram</q-toolbar-title
          >
          <div
            class="flex justify-around items-center"
            style="width: 20%"
            v-if="$q.screen.lt.sm"
          >
            <q-icon name="add_box" size="30px" />
            <q-icon size="30px" name="svguse:/icons.svg#message" alt="" />
          </div>
          <SideDialog />
        </q-toolbar>
        <q-scroll-area
          style="height: 100%; width: 100%"
          class="q-pa-sm custom-center"
        >
          <q-scroll-area style="height: 120px; max-width: 790px">
            <div class="row no-wrap flex justify-center align-items-center">
              <div
                v-for="image in images"
                :key="image.id"
                style="
                  width: 100px;
                  height: 100%;
                  z-index: 9999999999999999999999999;
                "
                class="q-pa-xs flex items-center justify-center"
              >
                <div
                  class="flex column inline text-center items-center justify-center wrap"
                  style="width: 100px; height: 100%"
                >
                  <q-circular-progress
                    show-value
                    font-size="10px"
                    class="q-mt-xs"
                    :value="value"
                    size="85px"
                    :thickness="0.1"
                    color="white"
                    track-color="red"
                  >
                    <q-avatar size="70px">
                      <img :src="image.url" />
                    </q-avatar>
                  </q-circular-progress>
                  <p class="q-mb-xs" style="align-self: center">name</p>
                </div>
              </div>
            </div>
          </q-scroll-area>

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
            <div class="text-center q-ma-md" v-if="groupedPosts.length < 1">
              <h3>No Posts At the Time</h3>
            </div>
            <div
              v-else
              v-for="postData in getPostsData"
              :key="postData.id"
              class="col"
              style="width: 100%"
            >
              <TimelinePost
                :postData="postData"
                :username="user?.üsername"
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
</template>

<script>
import { date } from "quasar";
import { ref } from "vue";
import { usePostStore } from "stores/posts";
import { useUserStore } from "stores/user";
import { storeToRefs } from "pinia";

import CommentDialog from "../components/CommentDialog.vue";
import TimelinePost from "../components/TimelinePost.vue";
import SideDialog from "./SideDialog.vue";

const postStore = usePostStore();
const userStore = useUserStore();
const { groupedPosts, getPostsData, postLoading } = storeToRefs(postStore); // state and getters need "storeToRefs"
const { getTimelinePosts, reset } = postStore;
const { user, userLoading, getUserDetails } = storeToRefs(userStore); // state and getters need "storeToRefs"
const { fetchUserDetails, userReset, addPostComment, likeAndUnlikePost } =
  userStore;
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
  name: "Home",
  components: { CommentDialog, TimelinePost, SideDialog },
  data() {
    return {
      tab: ref("mails"),
      position,
      text,
      dialog,
      search,
      addPost,
      postliked,
      value: 30,
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
    liked(postId) {
      const foundElement = groupedPosts.value.findIndex(
        (element) => element.id === postId
      );
      return groupedPosts[foundElement].likes.includes(postId);
    },
    clickLike: (id, user) => {
      likeAndUnlikePost(id, user);
    },
    OpenCommentDialog: (post) => {
      dialogContent.value = post;
      dialogHeight.value = "md";
      commDialog.value = true;
    },
    OpenCommentDialogMobile: (post) => {
      dialogHeight.value = "xs";
      dialogContent.value = post;
      console.log(dialogHeight.value);
      commDialogMobile.value = true;
    },
    addComment: (id, textValue, user) => {
      addPostComment(id, textValue, user);
    },
  },
  created() {
    fetchUserDetails();
    getTimelinePosts();
  },
  computed: {},
  filters: {
    newDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
};
</script>
