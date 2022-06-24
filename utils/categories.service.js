import axios from "axios";
import URL from "./url.js"

const BASE_URL = URL;

// get user resources
async function getAllCategories() {
  let response = await axios.get(BASE_URL + "types/");
  return response.data;
}

export { getAllCategories };