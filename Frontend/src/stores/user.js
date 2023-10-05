import { defineStore, storeToRefs } from 'pinia';
import axios from "axios";
import { usePostStore } from './posts';
const postStore = usePostStore();
const { groupedPosts } = storeToRefs(postStore);

const API_URL = "http://localhost:8000/api/";


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
    async loginUser(data){
      this.userLoading = true;
      const userData = {
        email: data.username,
        password: data.password
      }
      try {
        const response = await axios.post(`${API_URL}auth/login`, userData);
        const tokenData = {
          value: response?.data?.token,
          expiry: new Date().getTime() + (2 * 60 * 1000),
          // expiry: new Date().getTime() + (2 * 24 * 60 * 60 * 1000),
        }
        console.log(tokenData);
        await localStorage.setItem("userTokens", JSON.stringify(tokenData));
        this.userLoading = false;
        this.userSuccess = true;
        this.userMessage = response?.data?.message;
        this.router.push("/home");
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        this.userMessage = error?.response?.data?.message;
        console.log(error)
      }
    },
    async registerUser(data){
      this.userLoading = true;
      const userData = {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        gender: data.gender,
        phoneNumber: data.phoneNumber,
      }
      try {
        const response = await axios.post(`${API_URL}auth/register`, userData);
        const tokenData = {
          value: response?.data?.token,
          expiry: new Date().getTime() + (2 * 60 * 1000),
          // expiry: new Date().getTime() + (2 * 24 * 60 * 60 * 1000),
        }
        await localStorage.setItem("userTokens", JSON.stringify(tokenData));
        this.userLoading = false;
        this.userSuccess = true;
        this.router.push("/home");
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        console.log(error)
      }
    },
    async fetchUserDetails(){
      try {
        const fetchStorage = await localStorage.getItem("userTokens");
        const fetchToken = JSON.parse(fetchStorage);
        var { value } = fetchToken;
        value = value ? value : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + value }
        }
        const response = await axios.get(`${API_URL}user/get`, config);
        this.userLoading = false;
        this.userSuccess = true;
        this.user = response?.data?.data
        const tokenData = {
          value: response?.data?.token,
          expiry: new Date().getTime() + (2 * 60 * 1000),
          // expiry: new Date().getTime() + (2 * 24 * 60 * 60 * 1000),
        }
        await localStorage.setItem("userTokens", JSON.stringify(tokenData));
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        console.log(error)
      }
    },
    async likeAndUnlikePost(postId, username){
      try {
        const fetchStorage = await localStorage.getItem("userTokens");
        const fetchToken = JSON.parse(fetchStorage);
        var { value } = fetchToken;
        value = value ? value : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + value }
        }
        const response = await axios.patch(`${API_URL}user/like/${postId}`, {}, config);
        const foundElement = groupedPosts.value.findIndex((element) => element._id === postId);
        const checkUsername = obj => obj.username === username
        const isLiked = groupedPosts.value[foundElement].likes.some(checkUsername);
        if (isLiked) {
          groupedPosts.value[foundElement].likes = groupedPosts.value[foundElement].likes.filter((element) => element.username !== username);
        } else {
          groupedPosts.value[foundElement].likes.push({username: username});
        }
        this.userLoading = false;
        this.userSuccess = true;
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        console.log(error)
      }
    },
    async addPostComment(postId, description, name){
      try {
        const fetchStorage = await localStorage.getItem("userTokens");
        const fetchToken = JSON.parse(fetchStorage);
        var { value } = fetchToken;
        value = value ? value : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + value }
        }
        const requestBody = {
          comment: description
        }
        const response = await axios.patch(`${API_URL}user/comment/${postId}`, requestBody, config);
        const foundElement = groupedPosts.value.findIndex(
          (element) => element._id === postId
        );
        const commentData = {
          user: {
            username: name
          },
          likes: [],
          description: description,
        };
        groupedPosts.value[foundElement].comments.push(commentData);
        this.userLoading = false;
        this.userSuccess = true;
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        console.log(error)
      }
    },
    userReset(){
      this.userError = false;
      this.userLoading = false;
      this.userSuccess = false;
    },
    async uploadPosts(data){
      console.log(data);
      this.userLoading = true;
      try {
        const fetchStorage = await localStorage.getItem("userTokens");
        const fetchToken = JSON.parse(fetchStorage);
        var { value } = fetchToken;
        value = value ? value : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + value }
        }
        const response = await axios.post(`${API_URL}user/posts`, data, config);
        console.log(response.data);
        this.userLoading = false;
        this.userSuccess = true;
        // this.user = response.data.data
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        console.log(error)
      }
    }
  }
})
