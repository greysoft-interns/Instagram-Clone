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
        <div class="column q-px-md q-py-lg" style="height: 100%; width: 480px">
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
                <q-form>
                  <q-input
                    class="q-my-md"
                    outlined
                    label="Email"
                    :rules="[
                      (val) => (val && val.length > 0) || 'please enter email',
                    ]"
                  />
                  <q-input
                    class="q-my-md"
                    outlined
                    label="Fullname"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'please enter Fullname',
                    ]"
                  />
                  <q-input
                    class="q-my-md"
                    outlined
                    label="Username"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'please enter Username',
                    ]"
                  />
                  <q-input
                    class="q-my-md"
                    outlined
                    label="Password"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'please enter Password',
                    ]"
                  />
                  <q-btn
                    class="q-my-md"
                    type="submit"
                    color="primary"
                    label="Sign Up"
                    style="width: 100%"
                  />
                </q-form>
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
export default {
  name: "SignUpPage",
  components: {
    Footer,
  },
  setup() {
    return {};
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
