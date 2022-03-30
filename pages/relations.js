
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Relation from '../components/relation';
import {useEffect } from "react";

export default function relations() {
  
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    me(token);
  }, []);

  return (
    <Layout>
      <div className='flex flex-col mx-auto max-w-3xl'>
        <div className='text-xl font-semibold tracking-widest py-8 px-4'>
          Liste d'amis (tkt il y en a 2/3 seulement)
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
