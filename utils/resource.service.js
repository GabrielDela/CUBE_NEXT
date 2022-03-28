import Router from "next/router";
import axios from "axios";
import URL from "./url.js"

const BASE_URL = URL;

// get user resources
async function getUserResources(user_id) {
  let response = await axios.get(BASE_URL + "resources/user/" + user_id);
  return response.data;
}

async function getAllResources(){
  let response = await axios.get(BASE_URL + 'resources');
  return response.data;
}

async function getResource(id){
  let response = await axios.get(BASE_URL + 'resources/' + id);
  return response.data;
}

async function getFavorite(listFavorites){
  let listResources = [];
  listFavorites.map(async (e) => {
    let response = await getResource(e);
    listResources.push(response);
  })
}

async function addFavorite(userId, favoriteId){
  let response = await axios.put(BASE_URL + 'users/' + userId + "/Favorites",{id:favoriteId});
  return response.data;
}
export { getUserResources, getAllResources, getResource, getFavorite, addFavorite };