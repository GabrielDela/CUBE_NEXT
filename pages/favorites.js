
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import { getResourceList } from '../utils/resource.service';
import {useEffect, useState } from "react";
import { me } from '../utils/auth.service';

export default function Favorites() {
    let user = {};
    let [listFavorites, setListFavorites] = useState([]);
    
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);

        if (typeof window !== 'undefined') {
            user = JSON.parse(window.localStorage.getItem("user"));
            if (user.favorites != null) {
                let response = getResourceList(user.favorites);
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
