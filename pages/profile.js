import Image from 'next/image'
import Layout from '../layouts/Layout'
import { isAuth, me, logout } from '../../utils/auth.service.js';
import { getUserResources, test } from '../../utils/resource.service.js';
import { useEffect, useState } from "react";
import axios from "axios";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function profile() {
    let [resources, setResources] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(async () => {
        const token = window.localStorage.getItem('token');
        isAuth(token);

        let response = await me(token);
        let user = response.data.user.user;
        setUser(user);
        response = await getUserResources(user._id);
        setResources(response.data.resources != null ? response.data.resources : []);
    }, []);
    
    return (
        <Layout>
            <div className="flex flex-col mx-auto max-w-3xl">
                <div className='flex my-6 justify-between'>
                    <div className='flex'>
                        <div>
                            <div className='image-container h-24 w-24'>
                                <Image src="/img/background-login.jpg" layout="fill" className='rounded-full image h-24 w-24' />
                            </div>
                            {/* <Image width={45}  height={45} src="/img/background-login.jpg" className='rounded-full hover:opacity-70 cursor-pointer' /> */}
                        </div>
                        <div>
                            <div className='w-0 mb-auto mx-2 w-fit'>
                                <div className="flex">
                                    <p className='my-auto px-4 whitespace-nowrap text-xl cursor-pointer'>{ user != null ? user.firstname + " " + user.lastname : '' }</p> 
                                </div>
                                <p className='px-4 whitespace-nowrap text-gray-500'>{ user != null ? user.tag : '' }</p>
                                <p className='px-4 whitespace-nowrap text-gray-500'>104 amis</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => logout()}>
                        <div className='flex'>
                            <div className='flex ml-auto w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 transition cursor-pointer'>
                                <div className='w-full ml-auto my-auto text-center text-xl text-purple-500'>
                                    <RocketLaunchIcon className='mb-1'/>
                                </div>
                            </div>
                        </div>
                    </button>
                    {/* <div className='absolute top-6 flex w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 hover:rotate-360 transition cursor-pointer'>
                        <div className='w-full ml-auto my-auto text-center text-xl text-purple-500'>
                           
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </div>
                    </div> */}

                </div>


            </div>
            {
                resources.map((resource) => {
                    return <Card key={resource._id} data={resource}></Card>;
                })
            }
            {/* <Card></Card> */}
        </Layout>
    )
}