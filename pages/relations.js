
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Relation from '../components/relation';
import {useEffect } from "react";
import { me } from '../utils/auth.service';

export default function relations() {
  
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    me(token);
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
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
        <Relation></Relation>
      </div>
    </Layout>
  )
}
