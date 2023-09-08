<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          class="card-post q-mb-md"
          flat
          bordered
          v-for="post in posts"
          :key="post.id"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">Kaylah_rhay</q-item-label>
              <q-item-label caption> {{ post.location }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.img" />
          <q-card-section>
            <div class="text-grey-10">{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date | newDate }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 large-screen">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">Kaylah_rhay</q-item-label>
            <q-item-label caption> Developer</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
    <Footer />
  </q-page>
</template>

<script>
import { date } from "quasar";
// import { defineComponent } from "vue";
import Footer from "../components/Footer";

export default {
  name: "PageHome",
  components: { Footer },
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: "The world is beautiful",
          location: "Kaduna State, Nigeria",
          date: "1693151695339",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
        },
        {
          id: 2,
          title: "yeshua",
          location: "Kaduna State, Nigeria",
          caption: "The world is beautiful",
          date: "1693151695339",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 3,
          title: "yeshua",
          caption: "The world is beautiful",
          date: "1693151695339",
          location: "Kaduna State, Nigeria",
          img: " https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 4,
          title: "yeshua",
          date: "1693151695339",
          caption: "The world is beautiful",
          location: "Kaduna State, Nigeria",
          img: " https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 5,
          title: "yeshua",
          date: "1693151695339",
          caption: "The world is beautiful",
          location: "Kaduna State, Nigeria",
          img: " https://cdn.quasar.dev/img/parallax2.jpg",
        },
      ],
    };
  },
  filters: {
    newDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
};
</script>
<style lang="scss">
.card-post .q-img {
  min-height: 200px;
}
</style>
