<template>
  <q-card class="my-card q-my-lg">
    <q-card-section class="row justify-between q-pa-md">
      <div class="text-h6">
        <div class="row">
          <!-- <q-skeleton bordered type="circle" /> -->
          <q-avatar size="40px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="col q-mx-sm" style="height: 40px">
            <div class="text-caption">
              <a class="custom-link" href="#">{{ postData?.user }}</a>
            </div>
            <div class="text-caption">Original audio</div>
          </div>
        </div>
      </div>
      <div class="q-py-sm">
        <q-icon class="cursor-pointer" name="more_horiz" size="1.7rem" />
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none" style="height: 400px">
      <!-- <q-skeleton class="bg-grey" height="100%" square /> -->
      <img
        class="cursor-pointer"
        @dblclick="$emit('clickLike', postData.id)"
        style="height: 100%; width: 100%; object-fit: contain"
        :src="postData.url"
      />
    </q-card-section>

    <q-card-section>
      <div class="row flex justify-between">
        <div class="col flex justify-start">
          <div class="flex no-wrap justify-between" style="width: 130px">
            <q-icon
              v-if="!checkLikedPost"
              class="cursor-pointer"
              size="1.6rem"
              name="favorite_border"
              @click="$emit('clickLike', postData.id)"
            />
            <q-icon
              v-else
              class="cursor-pointer text-red"
              size="1.6rem"
              name="favorite"
              @click="$emit('clickLike', postData.id)"
            />
            <q-icon
              class="cursor-pointer"
              @click="$emit('OpenCommentDialog', postData, 'bottom')"
              size="1.6rem"
              name="chat_bubble_outline"
            />
            <q-icon class="cursor-pointer" size="1.6rem" name="send" />
          </div>
        </div>
        <div class="col flex justify-end">
          <q-icon class="cursor-pointer" size="1.6rem" name="turned_in_not" />
        </div>
      </div>
      <div>
        <div class="column q-my-md" style="height: 150px">
          <a class="col custom-link" href="#" style="width: fit-content"
            >{{ postData.likes.length }} likes</a
          >
          <p class="col" style="margin: 0">
            {{postData?.user}} <span>{{ postData.caption }}</span>
          </p>
          <a
            class="col custom-link"
            style="width: fit-content"
            href="#"
            @click="$emit('OpenCommentDialog', postData)"
            >View all {{ postData.comments.length }} comments</a
          >
          <q-input
            class="col custom-btn-none"
            v-model="newText"
            label="Add a comment"
            dense
          >
            <template v-slot:after>
              <q-icon
                class="cursor-pointer"
                @click="$emit('addComment', postData.id, newText); newText=''"
                name="send"
              />
            </template>
          </q-input>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none"> </q-card-section>
  </q-card>
</template>

<script>
import {ref} from "vue";
const postliked = ref(false);
const newText = ref("")
export default {
  name: "CommentDialog",
  emits: ["addComment", "clickLike", "OpenCommentDialog"],
  props: {
    postData: {
      type: Object,
      default: (() => {})
    },
    user: {
      type: Object,
      default: (() => {})
    },
},
  data() {
    return {
        postliked,
        newText,
    };
  },
  methods: {
  },
  computed: {
    checkLikedPost(){
        return this.postData.likes.includes("afimm_");
    }
  }
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
