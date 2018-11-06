import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9020"
});

class FormService {
  getFormFields = () => {
    return api.get("/formfields").then(res => {
      console.log(res.data);
      return res.data;
    });
  };
}

export default FormService;
