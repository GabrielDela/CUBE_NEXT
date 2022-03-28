import Router from "next/router";
import axios from "axios";
import URL from "./url.js"

const BASE_URL = URL;

// get user resources
async function getUser(user_id) {
  console.log(BASE_URL + "user/" + user_id);
  let response = await axios.get(BASE_URL + "user/" + user_id);
  console.log(response);
  return response.data;
}

export { getUser };