<template>
<q-page>
    <div class="xs column" style="height: 100%">
        <div class="col-1">
            <div class="flex row items-center justify-center q-pa-xs">
                <div class="col text-left text-weight-light">
                    <a href="/">Cancel</a>
                </div>
                <div class="col text-center text-weight-medium">
                  Recents
                  <q-icon name="keyboard_arrow_down" />
                </div>
                <div class="col text-right text-blue-6">
                  Next
                </div>
              </div>
        </div>
        <div class="col-5 custom-border" style="height: 280px">
          .col-5
        </div>
        <div class="col-5 custom-border" style="height: 365px">
          .col-5
        </div>
        <div class="col-1 custom-border flex items-center justify-center" style="height: 50px">
            <div class="flex row items-center justify-between q-pa-xs" style="width: 100%">
                <div class="col text-center text-weight-medium">
                  Library
                </div>
                <div class="col text-center text-grey-6">
                  Photo
                </div>
                <div class="col text-center text-grey-6">
                  Video
                </div>
              </div>
          </div>
      </div>
</q-page>
</template>

<script>
    export default {
        name: "CreatePage",

    }
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: black
    }
    .custom-border{
        border: 1px solid red;
    }
</style>