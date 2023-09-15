<template>
  <q-page>
    <div class="xs q-pa-xs example-column-variable-width">
      <div class="column" style="height: 100vh">
        <div class="col" style="max-height: 3.4rem">
          <div class="row">
            <div class="col-10">
              <div class="q-gutter-y-md column" style="max-width: 330px">
                <q-input 
                  filled 
                  class="q-px-sm"
                  v-model="text"
                  rounded-border=true
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
        <div class="col" style="max-height: 3.4rem">
          <q-scroll-area visible="false" style="height: 45px; max-width: 340px">
            <div class="row no-wrap q-my-xs">
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders">
                  <q-icon name="live_tv" />
                  IGTV
                </a>
              </div>
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders">
                  <q-icon name="shop" />
                  Shop
                </a>
              </div>
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders"
                  >Style</a
                >
              </div>
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders"
                  >Sports</a
                >
              </div>
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders"
                  >Auto</a
                >
              </div>
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders"
                  >Lifestyle</a
                >
              </div>
              <div class="col-auto q-mr-sm">
                <a href="#" class="q-px-sm q-py-xs border-1 rounded-borders"
                  >Football</a
                >
              </div>
            </div>
          </q-scroll-area>
        </div>
        <div class="col-10">
          <div class="q-pa-md example-masonry">
            <div class="column example-container">
              <div class="flex-break hidden"></div>
              <div class="flex-break"></div>
              <div class="flex-break"></div>
              <div class="flex-break"></div>

              <div
                v-for="(cell, i) in cells"
                :key="i"
                class="example-cell"
                tabindex="0"
              >
                <div>
                  <div v-for="(text, j) in cell" :key="j">
                    {{ text }}
                  </div>
                </div>
              </div>
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
import { ref } from "vue";
const generateCells = () => Array(12).fill(null).map((_, cell) => (
  Array(2 + Math.ceil(3 * Math.random())).fill(null).map((_, text) => `Cell ${cell + 1} - ${text + 1}`)
))
export default {
  name: "SearchPage",
  components: {
    Footer,
  },
  setup () {
    const cells = ref(generateCells())

    return {
      cells,
    }
  }
};
</script>

<style lang="sass" scoped>
a 
  text-decoration: none


.border-1 
  border: 1px solid black
  color: black


.example-masonry
  .flex-break
    flex: 1 0 100% !important
    width: 0 !important

  $x: 4

  @for $i from 1 through ($x - 1)
    .example-container > div:nth-child(#{$x}n + #{$i})
      order: #{$i}

  .example-container > div:nth-child(#{$x}n)
    order: #{$x}

  .example-container
    height: 50rem

    .example-cell
      width: 25%
      padding: 1px

      > div
        padding: 4px 8px
        box-shadow: inset 0 0 0 2px #9e9e9e
</style>
