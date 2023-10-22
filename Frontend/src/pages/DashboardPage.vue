<template>
  <q-page>
    <div class="column" style="height: 100vh" v-if="$q.screen.lt.sm">
      <div class="col-5">
        <div class="column" style="height: 100%">
          <div class="col-2 flex align-center justify-center">
            <div class="row q-py-lg" style="width: 100%">
              <div class="col-7 text-right text-weight-medium">
                <q-icon name="lock" />
                afimm_
                <q-icon name="keyboard_arrow_down" />
              </div>
              <div class="col-5 text-right q-px-md">
                <q-icon name="menu" />
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="row">
              <div class="col-4 flex align-center justify-center">
                <div
                  class="border-rad flex items-center justify-center q-pa xs"
                >
                  <q-avatar size="4rem">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                </div>
              </div>
              <div class="col">
                <div class="column flex items-center justify-center">
                  <div class="col text-weight-medium">54</div>
                  <div class="col text-weight-light text-caption">Posts</div>
                </div>
              </div>
              <div class="col">
                <div class="column flex items-center justify-center">
                  <div class="col text-weight-medium">834</div>
                  <div class="col text-weight-light text-caption">
                    Followers
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="column flex items-center justify-center">
                  <div class="col text-weight-medium">162</div>
                  <div class="col text-weight-light text-caption">
                    Following
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 q-mx-md">
            <div class="column">
              <div class="col text-caption">Quasar dev</div>
              <div class="col text-caption">Frontend Developer</div>
              <div class="col text-caption">Aspiring Tech bro...</div>
              <q-btn
                size=".7rem"
                no-caps
                outline
                class="q-my-sm border-grey"
                text-color="black"
                dense
                label="Edit Profile"
              />
            </div>
          </div>
          <div class="col">
            <q-scroll-area
              :visible="false"
              style="height: 90px; max-width: 98%"
            >
              <div class="row no-wrap q-my-xs q-mx-md">
                <div class="col q-mx-sm q-mx-md">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-icon name="add" color="grey" size="2.4rem" />
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-mx-sm">
                  <div
                    class="border-rad flex items-center justify-center q-pa xs"
                  >
                    <q-avatar size="4rem">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </div>
                </div>
              </div>
            </q-scroll-area>
          </div>
        </div>
      </div>
      <div class="col-7 q-py-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="black"
            indicator-color="black"
            inline-label
            narrow-indicator
          >
            <q-tab name="posts">
              <div class="flex justify-center full-width">
                <q-icon size="md" name="grid_on" />
              </div>
            </q-tab>
            <q-tab name="tags">
              <div class="flex justify-center full-width">
                <q-icon size="md" name="portrait" />
              </div>
            </q-tab>
          </q-tabs>

          <q-tab-panels v-model="tab">
            <q-tab-panel
              name="posts"
              class="flex justify-center items-center wrap full-width"
            >
              <q-row
                cols-xs="3"
                q-gutter="xs"
                class="flex justify-center items-center wrap full-width"
                style="margin-top: 10px; width: 100%; height: auto"
              >
                <div
                  v-for="post in posts"
                  :key="post.id"
                  class="q-col q-ma-xs"
                  style="width: 30%; height: 150"
                >
                  <img
                    :src="post.img"
                    style="object-fit: cover cover; width: 100%"
                  />
                </div>
              </q-row>
            </q-tab-panel>

            <q-tab-panel name="tags">
              <div class="row">
                <div class="col flex items-center justify-center">.col</div>
                <div class="col flex items-center justify-center">.col</div>
                <div class="col flex items-center justify-center">.col</div>
              </div>
              <div class="row">
                <div class="col flex items-center justify-center">.col</div>
                <div class="col flex items-center justify-center">.col</div>
                <div class="col flex items-center justify-center">.col</div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
      <Footer v-if="$q.screen.lt.sm" />
    </div>

    <div class="q-page-container" v-if="$q.screen.gt.xs">
      <!-- Content -->
      <div class="row" style="height: 100vh">
        <div
          class="col-2 q-px-md q-py-xl"
          style="border-right: 1px solid rgb(211, 211, 211)"
        >
          <Search />
        </div>
        <div class="col">
          <!-- Rest of your content -->
          <div class="column" style="height: 100%">
            <div
              class="col-5 flex items-center justify-center"
              style="width: 100%"
            >
              <div class="row" style="width: 65%; height: 300px">
                <div class="col flex items-center justify-center">
                  <div class="" style="">
                    <q-avatar size="170px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="col q-pa-lg">
                  <div>
                    <div
                      class="flex items-center justify-between"
                      style="width: 250px"
                    >
                      <a class="custom-link text-body1" href="#">{{
                        user?.username
                      }}</a>
                      <q-btn
                        class="q-px-md text-body1"
                        color="grey"
                        dense
                        no-shadow
                        no-caps
                        label="Edit Profile"
                      />
                      <q-icon size="1.7rem" name="settings" />
                    </div>
                    <div class="q-my-lg flex items-center justify-between">
                      <p style="margin: 0">{{ userPosts.length }} posts</p>
                      <a class="custom-link" href="#"
                        >{{
                          user.followers && user?.followers.length
                        }}
                        followers</a
                      >
                      <a class="custom-link" href="#"
                        >{{
                          user.followings && user?.followings.length
                        }}
                        followings</a
                      >
                    </div>
                  </div>
                  <div class="q-my-lg">
                    <p>{{ user?.name }}</p>
                    <p>{{ user?.website }}</p>
                    <p>{{ user?.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-5 custom-border-top">
              <q-card class="bg-transparent no-box-shadow no-shadow">
                <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  active-color="black"
                  indicator-color="black"
                  inline-label
                  narrow-indicator
                >
                  <q-tab name="posts" icon="grid_on" label="Posts" />
                  <q-tab name="saved" icon="turned_in_not" label="Saved" />
                  <q-tab name="tags" icon="portrait" label="Tagged" />
                </q-tabs>

                <q-tab-panels
                  class="flex bg-transparent no-box-shadow q-mx-md justify-center"
                  v-model="tab"
                  animated
                >
                  <q-tab-panel name="posts">
                    <div v-if="userLoading">
                      <div class="row">
                        <div class="col">
                          <div class="">
                            <q-card style="max-width: 300px">
                              <q-item>
                                <q-item-section avatar>
                                  <q-skeleton type="QAvatar" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>
                                    <q-skeleton type="text" />
                                  </q-item-label>
                                  <q-item-label caption>
                                    <q-skeleton type="text" />
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                              <q-skeleton height="200px" square />
                              <q-card-actions align="right" class="q-gutter-md">
                                <q-skeleton type="QBtn" />
                                <q-skeleton type="QBtn" />
                              </q-card-actions>
                            </q-card>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="userPosts.length > 0" class="row">
                      <div
                        v-for="post in userPosts"
                        :key="post._id"
                        class="col-3"
                        style="width: 27%"
                      >
                        <q-card class="my-card" flat bordered>
                          <img :src="post.posts[0].url" />
                          <q-card-actions align="right">
                            <q-btn flat round color="red" icon="favorite" />
                            <q-btn flat round color="teal" icon="bookmark" />
                            <q-btn flat round color="primary" icon="share" />
                          </q-card-actions>
                        </q-card>
                      </div>
                    </div>
                    <div v-else class="q-ma-md text-center">
                      You have No Posts!
                    </div>
                  </q-tab-panel>
                  <q-tab-panel
                    class="bg-transparent no-box-shadow"
                    name="saved"
                  >
                    <div class="row">
                      <div class="col">.col</div>
                      <div class="col">.col</div>
                      <div class="col">.col</div>
                    </div>
                  </q-tab-panel>
                  <q-tab-panel class="bg-transparent no-box-shadow" name="tags">
                    <div class="row">
                      <div class="col">.col</div>
                      <div class="col">.col</div>
                      <div class="col">.col</div>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user, userPosts, userLoading } = storeToRefs(userStore);
const { fetchUserDetails, fetchUserPosts, userReset } = userStore;
export default {
  name: "DashboardPage",
  components: {
    Footer,
    Search,
  },
  data() {
    return {
      tab: ref("posts"),
      user,
      userPosts,
      userLoading,
      drawer: false,
      posts: [
        {
          id: 1,
          img: "https://picsum.photos/150/150?grayscale",
        },
        {
          id: 2,
          img: "https://picsum.photos/150/150?blur",
        },
        {
          id: 3,
          img: "https://picsum.photos/150/150?grayscale",
        },
        {
          id: 4,
          img: "https://picsum.photos/150/150?blur",
        },
        {
          id: 5,
          img: "https://picsum.photos/150/150?grayscale",
        },
        {
          id: 6,
          img: "https://picsum.photos/150/150?blur",
        },
        {
          id: 7,
          img: "https://picsum.photos/150/150?grayscale",
        },
        {
          id: 8,
          img: "https://picsum.photos/150/150?grayscale",
        },
        {
          id: 9,
          img: "https://picsum.photos/150/150?grayscale",
        },
      ],
    };
  },
  mounted() {
    fetchUserDetails();
  },
  unmounted() {
    userReset();
  },
  created() {
    fetchUserPosts();
  },
};
</script>

<style lang="scss">
.border-grey {
  border-block-color: black;
}

.q-tab__content {
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.icon-center {
  display: flex;
  background-color: rgb(238, 231, 231);
  color: black;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 10px auto;
}
.q-tab__content p {
  margin: 0;
  margin-left: 10px;
  text-align: left;
}

.border-rad {
  height: 4.5rem;
  width: 4.5rem;
  border: 2px solid grey;
  border-radius: 50%;
}

.custom-border {
  border: 1px solid red;
}

.custom-border-right {
  border-right: 1px solid black;
}

.custom-border-top {
  border-top: 1px solid rgb(180, 180, 180);
}

.custom-link {
  color: black;
  text-decoration: none;
}
</style>
