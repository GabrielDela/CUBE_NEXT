
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Relation from '../components/relation';
import { useEffect, useState } from "react";
import { me } from '../utils/auth.service';
import axios from 'axios';

export default function relations() {
  let [relations, setRelations] = useState([]);

  useEffect(async () => {
    const token = window.localStorage.getItem('token');
    let data = await me(token);

    if (data.data) {
      let user_id = data.data.user.user._id;

      let response = await axios.get('http://localhost:5000/api/relations/friends/' + user_id);
      setRelations(response.data);
    }
  }, []);

  return (
    <Layout>
      <div className='flex flex-col mx-auto max-w-3xl'>
        <div className='flex justify-between p-5'>
          <div className='text-xl font-semibold tracking-widest my-auto'>
            Liste d'amis
          </div>
          <Image src="/img/logo.png" width='50px' height='50px'></Image>
        </div>
        {/* {
          relations.map((relation, index) => {
            return (
              <Relation key={index} data={relation} />
            )
          })
        } */}

        <Relation />
      </div>
    </Layout>
  )
}
