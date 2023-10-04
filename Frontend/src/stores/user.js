import { defineStore } from 'pinia';
import axios from "axios";

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
        // console.log(JSON.stringify(response.data.token));
        console.log(response)
        // localStorage.setItem("token", response?.data?.token)
        await localStorage.setItem("userTokens", response?.data?.token);
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
        await localStorage.setItem("userTokens", response.data.token);
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
        const fetchToken = await localStorage.getItem("userTokens");
        console.log(fetchToken);
        const tokens = fetchToken ? fetchToken : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + tokens }
        }
        const response = await axios.get(`${API_URL}user/get`, config);
        console.log(response.data);
        this.userLoading = false;
        this.userSuccess = true;
        this.user = response.data.data
        await localStorage.setItem("userTokens", response?.data?.token);
      } catch (error) {
        this.userLoading = false;
        this.userError = true;
        console.log(error)
      }
    },
    reset(){
      this.userError = false;
      this.userLoading = false;
      this.userSuccess = false;
    },
    async uploadPosts(data){
      console.log(data);
      this.userLoading = true;
      try {
        const fetchToken = await localStorage.getItem("userTokens");
        const tokens = fetchToken ? fetchToken : "";
        const config = {
          headers: { 'Authorization': 'Bearer ' + tokens }
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
