import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-19565.firebaseio.com/",
});

export default instance;
