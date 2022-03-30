
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import { getResource, getResourceList } from '../utils/resource.service';
import {useEffect, useState } from "react";
import { me } from '../utils/auth.service';

export default function favorites() {
    let user = {};
    let [listFavorites, setListFavorites] = useState([]);
    
    useEffect(async () => {
        const token = window.localStorage.getItem('token');
        await me(token);

        if (typeof window !== 'undefined') {
            user = JSON.parse(window.localStorage.getItem("user"));
            if (user.favorites != null) {
                let response = await getResourceList(user.favorites);
                setListFavorites(response);
            }
        }
    }, []);

    console.log(listFavorites)

    return (
        <Layout>
            <div className='flex flex-col mx-auto max-w-3xl'>
                <div className='flex justify-between px-5 pt-4 '>
                    <div className='text-xl font-semibold tracking-widest my-auto'>
                        Favoris
                    </div>
                    <Image src="/img/logo.png" width='50px' height='50px'></Image>
                </div>
                {
                    listFavorites.map((resource) => {
                        return <Card key={resource._id} data={resource}></Card>
                    })
                }
            </div>
        </Layout>
    )
}
