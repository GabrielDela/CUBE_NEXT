import Router from "next/router";
import axios from "axios";
import URL from "./url.js"

const BASE_URL = URL;

function isAuth(token) {
  if (window.location.pathname === "/login" && token) {
    Router.push("/");
  }
  if (!token) {
    Router.push('/login');
  }
}

async function auth(email, password) {
  axios
    .post(BASE_URL + "auth/login", { email, password })
    .then(async (res) => {
      if (res.data.success) {
        
        window.localStorage.setItem('token', res.data.token);
        let response = await me(res.data.token);
        console.log(response.data.user.user);
        window.localStorage.setItem('user', JSON.stringify(response.data.user.user));
        window.location.href = "/";
      }
      else {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function logout() {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  window.location.href = "/login";
}

async function me(token) {
  let response = await axios.get(BASE_URL + "auth/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.data.success) {
    logout();
    isAuth();
  }
  return response;
}

export { isAuth, auth, logout, me};