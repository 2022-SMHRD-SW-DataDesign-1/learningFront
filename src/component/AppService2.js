import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/users/test";

class ApiService2 {
  testUpload() {
    return axios.get(USER_API_BASE_URL);
  }
  
}
export default new ApiService2();
