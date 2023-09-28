<template>
  <q-page>
    <q-page class="xs">
      <div class="column" style="height: 100vh">
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
                visible="false"
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
        </div>
      </div>
      <Footer />
    </q-page>
    <q-page class="md">
      <div class="row" style="height: 100vh">
        <div
          class="col-2 q-px-md q-py-xl"
          style="border-right: 1px solid rgb(211, 211, 211)"
        >
          <div style="height: 100vh; width: 200px">
            <a href="#">Instagram</a>
            <q-tabs v-model="tab" vertical class="text-black q-my-lg">
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
          <div class="column" style="height: 100%">
            <div
              class="col flex items-center justify-center"
              style="width: 100%; height: 100%"
            >
              <div class="row" style="width: 65%; height: 350px">
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
                      <a class="custom-link text-body1" href="#">afimm_</a>
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
                      <p style="margin: 0">3 posts</p>
                      <a class="custom-link" href="#">500 followers</a>
                      <a class="custom-link" href="#">500 followings</a>
                    </div>
                  </div>
                  <div class="q-my-lg">
                    <p>Miracle Jigah</p>
                    <p>This is a demo bio to follow and guide you</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col custom-border-top">
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
                
                <q-tab-panels class="bg-transparent no-shadow no-box-shadow" v-model="tab" animated>
                  <q-tab-panel name="posts">
                    <div class="text-h6">Posts</div>
                   
                  </q-tab-panel>
        
                  <q-tab-panel class="bg-transparent no-shadow no-box-shadow" name="saved">
                    <div class="text-h6">Saved</div>
                   
                  </q-tab-panel>
        
                  <q-tab-panel class="bg-transparent no-shadow no-box-shadow" name="tags">
                    <div class="text-h6">Tags</div>
                   
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
import { ref } from 'vue'
export default {
  name: "DashboardPage",
  components: {
    Footer,
  },
  data(){
    return{
      tab: ref('posts'),
    }
  }
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
