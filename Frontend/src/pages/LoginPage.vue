<template>
  <q-page>
    <div class="xs">
      <Footer />
    </div>
    <div class="sm">
      <Footer />
    </div>
    <div class="md">
      <div class="flex items-center justify-center" style="height: 100vh">
        <div
          class="column q-px-md q-py-lg"
          style="height: 100%; width: 480px"
        >
          <div class="col-8 q-my-md" style="border: 1px solid rgb(208, 208, 208);">
            <div class="column flex items-center justify-center q-my-md">
              <div class="col">
                <a href="#/" class="text-grand-hotel text-bold text-h4 custom-link">
                    Instagram
                  </a>
              </div>
              <div class="col-8 q-px-md q-mt-lg" style="width: 100%">
                <q-input
                  class="q-my-md"
                  outlined
                  v-model="username"
                  label="Username, Email"
                />
                <q-input
                  class="q-my-md"
                  outlined
                  v-model="password"
                  label="Password"
                />
                <q-btn
                  class="q-my-md"
                  color="primary"
                  label="Log in"
                  style="width: 100%"
                  @click="submitUser"
                />
              </div>
              <div class="col-2 flex items-center justify-center" style="height: 90px; width: 100%;">
                <a class="custom-link text-blue" href="#">Forgot Password</a>
              </div>
            </div>
          </div>
          <div class="col-2 q-my-md flex items-center justify-center" style="border: 1px solid rgb(208, 208, 208); height: 100px">
            <p>Don't have an account? <a class="custom-link text-blue" href="#/register">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const { user, getUserDetails } = storeToRefs(userStore);
const { loginUser } = userStore;
const username = ref("jigah4thjuly@gmail.com");
const password = ref("1234");
export default {
  name: "LoginPage",
  components: {
    Footer,
  },
  data(){
    return {
      username,
      password,
    }
  },
  methods: {
    submitUser: () => {
      const data = {
        username: username.value,
        password: password.value,
      }
      loginUser(data);
    }
  }
};
</script>

<style lang="scss">
.custom-border {
  border: 1px solid red;
}

.custom-link {
  color: black;
  text-decoration: none;
}
</style>
