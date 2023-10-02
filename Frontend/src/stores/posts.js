import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
  state: () => ({
    groupedPosts: [
      { id: 1,
        user: "_real.user",
        url: "http://res.cloudinary.com/dbsa7x7qv/image/upload/v1693998123/Instagram/Posts/fvlsdqvbqhsgutvoyfeh.png",
        caption: "my first posts in years",
        likes: [
          "real_1",
          "real_2",
          "real_3",
          "real_4",
          "real_5",
          "real_6",
          "real_7",
          "real_8",
        ],
        comments: [
          {
            description: "Very nice",
            user: "real_2"
          },
          {
            description: "Very nice and apt",
            user: "real_3"
          },
          {
            description: "Very good",
            user: "real_4"
          },
          {
            description: "Very good",
            user: "real_4"
          },
        ],
      },
      { 
        id: 2,
        user: "_real.user",
        url: "http://res.cloudinary.com/dbsa7x7qv/image/upload/v1693998122/Instagram/Posts/ffuxcuavcjig4q4dcadc.png",
        caption: "my second posts in years",
        likes: [
          "real_1",
          "real_2",
          "real_3",
          "real_4",
          "real_5",
        ],
        comments: [
          {
            description: "Very nice",
            user: "real_2"
          },
          {
            description: "Very nice and apt",
            user: "real_3"
          },
          {
            description: "Very good",
            user: "real_4"
          },
        ],
      },
    ],
    postLoading: false,
    postSuccess: false,
    postError: false,
    postMessage: "",
  }),

  getters: {
    getPostsData(state) {
      return state.groupedPosts;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
