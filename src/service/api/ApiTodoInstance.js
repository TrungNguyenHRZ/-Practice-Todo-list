import axios from "axios";

const ApiTodoInstance = axios.create({
  baseURL: "https://6655d0193c1d3b60293b31de.mockapi.io/Todo",
});

export default ApiTodoInstance;
