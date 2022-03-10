
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Friend from '../components/Friend';

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col mx-auto max-w-3xl'>
        <div className='text-xl font-semibold tracking-widest py-8 px-4'>
          Liste d'amis
        </div>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
      </div>
    </Layout>
  )
}
