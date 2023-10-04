<template>
  <q-pqge>
    <div class="xs">
      <Footer />
    </div>
    <div class="sm">
      <Footer />
    </div>
    <div class="md">
      <div class="flex items-center justify-center" style="height: 100vh">
        <div class="column q-px-md q-py-lg" style="height: 100%; width: 650px">
          <div
            class="col-10 q-my-md"
            style="border: 1px solid rgb(208, 208, 208)"
          >
            <div class="column flex items-center justify-center q-my-md">
              <div class="col">
                <a
                  href="#/"
                  class="text-grand-hotel text-bold text-h4 custom-link"
                >
                  Instagram
                </a>
              </div>
              <div class="col q-px-md q-mt-lg" style="width: 100%">
                <div class="row">
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    v-model="email"
                    label="Email"
                  />
                  </div>
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    v-model="name"
                    label="Fullname"
                    :rules="[val => val.length > 0 || 'Please enter Fullname']"
                  />
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    v-model="username"
                    label="Username"
                  />
                  </div>
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    v-model="phoneNumber"
                    label="Phone Number"
                  />
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    type="password"
                    v-model="password"
                    label="Password"
                  />
                  </div>
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    type="password"
                    v-model="confirmPassword"
                    label="Confirm Password"
                  />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <q-input
                    class="q-my-md q-mx-sm"
                    outlined
                    type="text"
                    v-model="gender"
                    label="male or female"
                  />
                  </div>
                  </div> 


                <q-btn
                  class="q-my-md"
                  color="primary"
                  label="Sign Up"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
          <div
            class="col q-my-xs flex items-center justify-center"
            style="border: 1px solid rgb(208, 208, 208); height: 100px"
          >
            <p>
              Already have an account?
              <a class="custom-link text-blue" href="#/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-pqge>
</template>

<script>
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const { registerUser } = userStore;
const name = ref("Test User1");
const username = ref("_test_user1");
const email = ref("testuser@gmail.com");
const password = ref("1234");
const gender = ref("female");
const phoneNumber = ref("+23459393300");
const confirmPassword = ref("1234");
export default {
  name: "SignUpPage",
  components: {
    Footer,
  },
  data() {
    return {
      name,
      username,
      email,
      password,
      gender,
      phoneNumber,
      confirmPassword,
    };
  },
  methods: {
    submitForm() {
      if (password.value !== confirmPassword.value) {
        alert("Password don't match!");
      }
      const userData = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
        gender: gender.value,
        phoneNumber: phoneNumber.value,
      };
      registerUser(userData);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-border {
  border: 1px solid red;
}

.custom-link {
  color: black;
  text-decoration: none;
}
</style>
