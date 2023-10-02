<template>
  <q-card style="width: 1100px; max-width: 90vw; height: 800px">
    <q-card-section style="height: 100%; width: 100%">
      <div class="row" style="height: 100%; width: 100%">
        <div class="col q-mr-md" style="border-right: 1px solid rgb(208, 208, 208); height: 100%">
          <q-card-section
          class="q-pa-none q-ma-md"
          style="height: 600px"
        >
          <!-- <q-skeleton class="bg-grey" height="100%" square /> -->
          <img
            class="cursor-pointer"
            @dblclick="$emit('clickLike', post.id)"
            style="
              height: 100%;
              width: 100%;
              object-fit: contain;
            "
            :src="post.url"
          />
        </q-card-section>
        </div>
        <div class="col">
          <div class="column" style="height: 100%">
            <div class="col-1 row justify-between q-px-md q-pb-sm">
              <div class="text-h6">
                <div class="row">
                  <!-- <q-skeleton bordered type="circle" /> -->
                  <q-avatar size="40px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                  <div class="col q-mx-sm" style="height: 40px">
                    <div class="text-caption">
                      <a class="custom-link" href="#">{{ post.user}}</a>
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
            </div>
            <div
              class="col"
              style="
                height: 100%;
                border-top: 1px solid rgb(208, 208, 208);
                border-bottom: 1px solid rgb(208, 208, 208);
              "
            >
              <div class="column q-pa-md" style="height: 100%">
                <div class="column" style="height: 100%">
                  <div class="col-2 row items-center q-my-sm">
                    <q-avatar class="q-mr-sm" size="40px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                    <p>
                      <a class="custom-link q-mr-sm" href="#">{{post.user}}</a>
                    {{ post.caption }}
                    </p>
                  </div>
                  <div class="col">
                    <q-scroll-area style="height: 100%; max-width: 100%;">
                      <div v-for="(comment, index) in post.comments" :key="index" class="flex row justify-between q-my-md">
                        <div class="row">
                          <q-avatar class="q-mr-sm" size="40px">
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                          </q-avatar>
                          <p>
                            <a class="custom-link q-mr-sm" href="#">{{comment.user}}</a>
                          {{ comment.description }}
                          </p>
                        </div>
                        <q-icon class="cursor-pointer" name="favorite_border"/>
                      </div>
                    </q-scroll-area>
                    
                  </div>
                </div>

              </div>
            </div>
            <div class="col-1">
              <div class="row flex justify-between q-pa-md">
                <div class="col flex justify-start">
                  <div
                    class="flex no-wrap justify-between"
                    style="width: 130px"
                  >
                    <q-icon
                      v-if="!checkLikedPost"
                      class="cursor-pointer"
                      size="1.6rem"
                      name="favorite_border"
                      @click="$emit('clickLike'. post.id)"
                    />
                    <q-icon
                      v-else
                      class="cursor-pointer text-red"
                      size="1.6rem"
                      name="favorite"
                      @click="$emit('clickLike', post.id)"
                    />
                    <q-icon
                      class="cursor-pointer"
                      @click="commentDialog = true"
                      size="1.6rem"
                      name="chat_bubble_outline"
                    />
                    <q-icon class="cursor-pointer" size="1.6rem" name="send" />
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
              class="col custom-btn-none q-py-md q-px-sm"
              v-model="newText"
              label="Add a comment"
              dense
            >
              <template v-slot:after>
                <q-icon
                  class="cursor-pointer"
                  @click="$emit('addComment', post.id, newText); newText=''"
                  name="send"
                />
              </template>
            </q-input>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {ref} from "vue";
const liked = ref(false);
const newText = ref("");

export default {
  emits: ["clickLike", "addComment"],
  props: {
    post: {
      type: Object,
      default: (() => {})
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      liked,
      newText,
    };
  },
  computed: {
    checkLikedPost(){
        return this.post.likes.includes("afimm_");
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
