
import Image from 'next/image';
import Card from '../components/Card';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { isAuth, auth, logout } from '../utils/auth.service.js';
import { useEffect, useReducer, createContext, useContext, useMemo, useState } from "react";
import { getAllResources } from '../utils/resource.service';

export default function Home({ resourcesData }) {

  // var [resources, setResources] = useState(resourcesData);

  // console.log(resources);
  // resources.map((resource) => {
  //   console.log(resource)
  // })

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    isAuth(token);
  }, []);

  return (
    <Layout >
      <div className='flex flex-col mx-auto max-w-3xl'>
        <div className='text-xl font-semibold tracking-widest py-8 px-4'>
          Accueil
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

  let resources =  await getAllResources();

  return {
    props: {
      resourcesData: resources
    }
  };
}

