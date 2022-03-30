
import Image from 'next/image';
import Card from '../components/Card';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { isAuth, auth, logout, me } from '../utils/auth.service.js';
import { useEffect, useReducer, createContext, useContext, useMemo, useState } from "react";
import { getAllResources } from '../utils/resource.service';

export default function Home({ resourcesData }) {
  let [user , setUser] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    me(token);

    let user = null;
    if (typeof window !== 'undefined') {
      user = JSON.parse(window.localStorage.getItem("user"));
    }
    setUser(user);
  }, []);

  return (
    <Layout >
      <div className='flex flex-col mx-auto max-w-3xl'>
        <div className='flex justify-between px-5 pt-5 '>
          <div className='text-xl font-semibold tracking-widest my-auto'>
            Accueil
          </div>
          <Image src="/img/logo.png" width='50px' height='50px'></Image>
        </div>
        {
          resourcesData.map((resource) => {
            return <Card key={resource._id} data={resource}></Card>
          })
        }
      </div>

    </Layout>
  )
}

export async function getServerSideProps(req) {

  let resources = await getAllResources();

  return {
    props: {
      resourcesData: resources
    }
  };
}

