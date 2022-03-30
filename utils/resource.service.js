import Router from "next/router";
import axios from "axios";
import URL from "./url.js"

const BASE_URL = URL;

// get user resources
async function getUserResources(user_id) {
  let response = await axios.get(BASE_URL + "resources/user/" + user_id);
  return response.data;
}

async function getAllResources() {
  let response = await axios.get(BASE_URL + 'resources');
  return response.data;
}

async function getResource(id) {
  let response = await axios.get(BASE_URL + 'resources/' + id);
  return response.data;
}

async function getResourceList(ressourceList) {
  let response = await axios.post(BASE_URL + 'resources/list', ressourceList);
  return response.data;
}

async function getFavorite(listFavorites) {
  let listResources = [];
  listFavorites.map(async (e) => {
    let response = await getResource(e);
    listResources.push(response);
  })
  return listResources;
}

async function addFavorite(userId, resourceId) {
  let response = await axios.post(BASE_URL + 'users/' + userId + "/favorites/" + resourceId);
  return response.data;
}

async function removeFavorite(userId, resourceId) {
  let response = await axios.delete(BASE_URL + 'users/' + userId + "/favorites/" + resourceId);
  return response.data;
}

async function getNbComments(resourceId) {
  let response = await axios.get(BASE_URL + 'resources/comments/count/' + resourceId);
  return response.data;
}

export { getUserResources, getAllResources, getResource, getResourceList, getFavorite, addFavorite, getNbComments, removeFavorite };