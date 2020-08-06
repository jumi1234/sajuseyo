import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const add = text => api.post("/api/notes/", { text })
  .then(function (response) {
    // handle success
    console.log("POST 성공");
   })
   .catch(function (error) {
   // handle error
    console.log(error);
   })
export const getget = ({ id }) => api.get(`/api/notes/${id}`);
