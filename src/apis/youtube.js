import axios from "axios";

const KEY = "AIzaSyCYgOjovKhhrHW3BXDRn86AnK0IdsvAM4U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
