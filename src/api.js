import axios from "axios";

export const fetchUser = (callback) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/")
    .then(function (response) {
      // handle success
      // console.log("Response", response.data);
      callback(response.data);
    })
    .catch(function (error) {
      // handle error
      // console.log("Error", error);
    });
}
