<template>
  <q-page>
    <div class="flex items-center justify-center" style="height: 100vh">
      <div class="row q-px-md q-py-lg" style="height: 100%; width: 650px">
        <div
          class="col-12 q-my-md full-height"
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
              <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6">
                  <q-input
                    hide-bottom-space
                    outlined
                    type="ëmail"
                    v-model="email"
                    label="Email"
                    :rules="[requiredRule]"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <q-input
                    hide-bottom-space
                    outlined
                    v-model="name"
                    label="Fullname"
                    :rules="[requiredRule]"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <q-input
                    class="q-"
                    outlined
                    v-model="username"
                    label="Username"
                    :rules="[requiredRule]"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <q-input
                    class="q-"
                    outlined
                    v-model="phoneNumber"
                    label="Phone Number"
                    :rules="[requiredRule]"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <q-input
                    class="q-"
                    outlined
                    type="password"
                    v-model="password"
                    label="Password"
                    :rules="[requiredRule, minLengthRule, maxLengthRule]"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <q-input
                    class="q-"
                    outlined
                    type="password"
                    v-model="confirmPassword"
                    label="Confirm Password"
                    :rules="[requiredRule, matchPassword]"
                  />
                </div>

                <div class="col-12">
                  <q-select
                    outlined
                    v-model="gender"
                    :options="options"
                    label="choose Gender"
                  />
                </div>
              </div>

              <q-btn
                class="q-my-md"
                color="primary"
                label="Sign Up"
                style="width: 100%"
                :onclick="submitForm"
              />
            </div>
          </div>
        </div>
        <div
          class="col-12 q-my-xs flex items-center justify-center"
          style="border: 1px solid rgb(208, 208, 208); height: 100px"
        >
          <p>
            Already have an account?
            <a class="custom-link text-blue" href="#/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";

const $q = useQuasar();
const userStore = useUserStore();
const {
  user,
  userError,
  userLoading,
  userSuccess,
  userMessage,
  getUserDetails,
} = storeToRefs(userStore);
const { registerUser, fetchUserDetails, userReset } = userStore;
const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const gender = ref("");
const phoneNumber = ref("");
const confirmPassword = ref("");
const options = ref(["male", "female"]);
const submitForm = async () => {
  console.log(gender.value);
  if (password.value !== confirmPassword.value) {
    $q.notify({
      message: "Passwords don't match",
      color: "red",
    });
  }
  if (
    name.value === "" ||
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    gender.value === "" ||
    phoneNumber.value === ""
  ) {
    $q.notify({
      message: "Enter All Fields",
      color: "red",
    });
  }
  const userData = {
    name: name.value,
    username: username.value,
    email: email.value,
    password: password.value,
    gender: gender.value,
    phoneNumber: phoneNumber.value,
  };
  await registerUser(userData);
  if (userError.value && userMessage.value) {
    $q.notify({
      message: userMessage.value,
      color: "red",
    });
  }
  if (userSuccess.value && userMessage.value) {
    $q.notify({
      message: userMessage.value,
      color: "green",
    });
  }
};
const requiredRule = (val) => !!val || "Required field";
const minLengthRule = (v) =>
  (v && v.length >= 3) || "Password must be at least 3 characters long";
const maxLengthRule = (v) =>
  (v && v.length <= 15) || "Password must not exceed 15 characters";
const matchPassword = (v) => v === password.value || "Passwords do not match";
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
