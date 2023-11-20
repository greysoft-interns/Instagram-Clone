import { defineStore } from "pinia";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8002/api/";
export const usePostStore = defineStore("posts", {
  state: () => ({
    groupedPosts: [],
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
    async getTimelinePosts(id){
      try {
        const fetchStorage = await localStorage.getItem("userTokens");
        const fetchToken = JSON.parse(fetchStorage);
        var { value } = fetchToken;
        value = value ? value : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + value }
        }
        const response = await axios.get(`${API_URL}post/timeline/${id ? id : "all"}`, config);
        this.postLoading = false;
        this.postSuccess = true;

        this.groupedPosts = response?.data?.data;
      } catch (error) {
        this.postLoading = false;
        this.postError = true;
        this.postMessage = error?.response?.data?.message;
        console.log(error)
      }
    },
    postReset(){
      this.postError = false;
      this.postLoading = false;
      this.postSuccess = false;
      this.postMessage = "";
  },
  }
});
