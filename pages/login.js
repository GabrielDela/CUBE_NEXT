import react from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { isAuth, auth, me } from '../utils/auth.service.js';

export default function login() {
  var [email, setEmail] = react.useState("");
  var [password, setPassword] = react.useState("");

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    me(token);
  }, []);

  return (
    <div className={"flex h-full w-full"}>
      <div className="flex flex-col bg-purple-cube h-screen w-full md:w-1/2 lg:w-1/3 justify-center px-10">
        <div>
          <p className={"text-white text-4xl text-center my-10"}>Connectez vous à AirCube</p>
        </div>
        <div onClick={() => {
          
        }} className=" py-3 my-4 bg-white font-bold rounded-full hover:bg-gray-100 cursor-pointer transition">
          <p className={"m-auto text-center w-full "}>Connectez vous avec Google</p>
        </div>
        <div className="flex justify-between">
          <hr className={"w-2/5 my-auto"} />
          <p className="text-center text-white my-auto text-lg font-bold"> OU </p>
          <hr className={"w-2/5 my-auto"} />
        </div>
        <div className="flex flex-col my-5 ">

          <input value={email} onChange={(value) => {
            setEmail(value.target.value);
          }} className="py-6 mb-4 px-2 text-white h-10 bg-transparent rounded-md border border-2 border-gray-200 " type={"text"} placeholder="Email" />
          <input value={password} onChange={(value) => {
            setPassword(value.target.value);
          }} className="py-6 mb-4 px-2 text-white h-10 bg-transparent rounded-md border border-2 border-gray-200" type={"password"} placeholder="Mot de passe" />

          <div onClick={() => { auth(email, password) }} className=" py-3 my-4 bg-white font-bold rounded-full hover:bg-gray-100 cursor-pointer transition">
            <p className={"m-auto text-center w-full "}>Connexion</p>
          </div>
        </div>
        <div>
          <Link href={"/register"}>
            <p className="w-fit mx-10 text-white cursor-pointer hover:underline hover:text-grey transition">Vous n'avez pas de compte ?</p>
          </Link>
        </div>
      </div>
      <img src="../img/background-login.jpg" className="w-0 md:w-1/2 lg:w-2/3 object-cover" />
    </div>
  );
}