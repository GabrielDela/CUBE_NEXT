
import Image from 'next/image';
import Card from '../components/Card';
import Layout from '../layouts/Layout';
import { useState } from 'react';
import axios from 'axios';
export default function Home({resources}) {

  var [resources, setResources] = useState(resources);

  return (
    <Layout >
      <div className='flex flex-col mx-auto max-w-3xl'>
        <div className='text-xl font-semibold tracking-widest py-8 px-4'>
          Accueil
        </div>
        {
          resources.map((resource) => {
            return <Card key={resource._id} data={resource}></Card>;
          })
        }
      </div>
    </Layout>
  )
}

export async function getServerSideProps(req) {

  var resources = [];
  
  var response = await axios.get('http://localhost:5000/api/resources');
  resources = response.data;

  return {
      props: {
          resources: resources
      }
  };
}

