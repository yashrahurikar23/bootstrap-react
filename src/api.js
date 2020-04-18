import axios from "axios";

export const fetchUser = (name, ibu, callback) => {
  console.log("name", name);
  console.log("ibu", ibu);

  return axios
    .get(`https://dummyuser.co.in/users/${ibu}?keyword=${name}`)
    .then(function (response) {
      // handle success
      console.log("Response", response.data);
      callback(response.data);
    })
    .catch(function (error) {
      // handle error
      // console.log("Error", error);
    });
};
