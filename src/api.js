import axios from "axios";

export const fetchDepartments = () => {
  return axios.get(`http://www.mocky.io/v2/5ea2c52d4f00007a00d9f476`);
}
