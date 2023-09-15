<template>
  <q-page>
    <div class="xs q-pa-xs example-column-variable-width">
      <div class="column" style="height: 100vh">
        <div class="col">
          <div class="row">
            <div class="col-10">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-input
                class="q-pa-xs"
                  standard
                  v-model="text"
                  rounded
                  borderless
                  dense
                  color="grey-3"
                  bg-color="grey-4"
                />
              </div>
            </div>
            <div class="col-2 q-pa-sm">
              <q-icon name="qr_code" color="black" size="1.6rem" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <a href="#" class="q-pa-sm rounded-borders bg-amber-1">IGTV</a>
            </div>
            <div class="col">
              <a href="#" class="q-pa-sm rounded-borders bg-amber-1">Shop</a>
            </div>
            <div class="col">
              <a href="#" class="q-pa-sm rounded-borders bg-amber-1">Style</a>
            </div>
            <div class="col">
              <a href="#" class="q-pa-sm rounded-borders bg-amber-1">Sports</a>
            </div>
            <div class="col">
              <a href="#" class="q-pa-sm rounded-borders bg-amber-1">Auto</a>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col-6">
              .col-6 (wider)
            </div>
            <div class="col">
              .col
            </div>
          </div>
      
          <div class="row">
            <div class="col">
              .col
            </div>
            <div class="col-5">
              .col-5 (wider)
            </div>
            <div class="col">
              .col
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "SearchPage",
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
