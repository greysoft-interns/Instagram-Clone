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
          class="column custom-border q-px-md q-py-lg"
          style="height: 100%; width: 480px"
        >
          <div class="col-8 custom-border" style="">
            <div class="column flex items-center justify-center q-my-md">
              <div class="col">
                <h3 class="text-grand-hotel text-bold text q-my-none">
                  Instagram
                </h3>
              </div>
              <div class="col-8 q-px-md q-mt-lg" style="width: 100%">
                <q-input
                  class="q-my-sm"
                  outlined
                  v-model="text"
                  label="Username, Email"
                />
                <q-input
                  class="q-my-sm"
                  outlined
                  v-model="text"
                  label="Password"
                />
                <q-btn
                  class="q-my-sm"
                  color="primary"
                  label="Log in"
                  style="width: 100%"
                />
              </div>
              <div class="col">
                <a class="custom-link" href="#">Forgot Password</a>
              </div>
            </div>
          </div>
          <div class="col">1 of 2</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "LoginPage",
  components: {
    Footer,
  },
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
