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
                  type="password"
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

<script setup>
import Footer from "../components/Footer.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { useQuasar } from 'quasar'

const userStore = useUserStore();
const { user, userError, userLoading, userSuccess, userMessage, getUserDetails } = storeToRefs(userStore);
const { loginUser, fetchUserDetails, userReset } = userStore;
const username = ref("");
const password = ref("");
const $q = useQuasar();
onBeforeUnmount(() => {
  userReset();
});
const submitUser = async() => {
      const data = {
        username: username.value,
        password: password.value,
      }
      await loginUser(data);
      if(userError.value && userMessage.value){
        $q.notify({
          message: userMessage.value,
          color: 'red'
        })
      }
      if(userSuccess.value && userMessage.value){
        $q.notify({
          message: userMessage.value,
          color: 'green'
        })
      }
    }
// return {
//   username,
//   password,
//   submitUser: () => {
//       const data = {
//         username: username.value,
//         password: password.value,
//       }
//       loginUser(data);
//       if(userError && userMessage){
//         this.$q.notify({
//           message: userMessage.value,
//           color: 'purple'
//         })
//       }
//     }
// }
// export default {
//   name: "LoginPage",
//   components: {
//     Footer,
//   },
//   data(){
//     return {
//       username,
//       password,
//     }
//   },
//   methods: {
//     submitUser: () => {
//       const data = {
//         username: username.value,
//         password: password.value,
//       }
//       loginUser(data);
//       if(userError && userMessage){
//         $q.notify({
//           message: userMessage.value,
//           color: 'purple'
//         })
//       }
//     },
//     showNotif () {
//       console.log('Here');
//         $q.notify({
//           message: userMessage.value,
//           color: 'purple'
//         })
//       }
//   }
// };
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
