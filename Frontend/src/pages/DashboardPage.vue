<template>
  <q-page class="xs">
    <div class="column" style="height: 100vh">
      <div class="col-5">
        <div class="column" style="height: 100%">
          <div class="col-2 flex align-center justify-center">
            <div class="row q-my-sm" style="width: 100%">
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
                <div class="border-rad flex items-center justify-center q-pa xs">
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
              <q-btn size=".7rem" no-caps outline class="q-my-sm border-grey" text-color="black" dense label="Edit Profile" />
            </div>
          </div>
          <div class="col">1 of 3</div>
        </div>
      </div>
      <div class="col-7">1 of 2</div>
    </div>
    <Footer />
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "DashboardPage",
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
    .border-grey{
        border-block-color: black;
    }

    .border-rad{
        height: 4.5rem;
        width: 4.5rem;
        border: 2px solid grey;
        border-radius: 50%;
    }
</style>
