import axios from "axios";

const KEY = "AIzaSyATJnp1qqiNx4OiAYlTb7KDUOJ0NJpoM4E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
