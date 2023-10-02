import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: "Jigah Miracle",
      username: "afimm_",
      bio: "Hi, I am a software developer"
    },
    userLoading: false,
    userSuccess: false,
    userError: false,
    userMessage: ""
  }),

  getters: {
    getUserDetails (state) {
      return state.user
    }
  },

  actions: {
    // increment () {
    //   this.counter++
    // }
  }
})
