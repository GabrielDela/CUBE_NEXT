
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import { getFavorite } from '../utils/resource.service';

export default function favorites() {
    let user = {}
    let listfavorite = {}
    if(typeof window !== 'undefined'){
        user = JSON.parse(window.localStorage.getItem("user"));
        if(user.favorites != undefined){
            listfavorite = getFavorite(user.favorites)
        }
    }
    
    return (
        <Layout>
            <div className='flex flex-col mx-auto max-w-3xl'>
                <div className='text-xl font-semibold tracking-widest py-8 px-4'>
                    Favoris
                </div>
                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
        </Layout>
    )
}
