import Image from 'next/image'
import Layout from '../layouts/Layout'
import { isAuth, me, logout } from '../utils/auth.service.js';
import { getUserResources } from '../utils/resource.service.js';
import { useEffect, useState } from "react";
import axios from "axios";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Card from '../components/Card'


export default function profile() {
    let [resources, setResources] = useState([])
    let [user, setUser] = useState(null)
    // let user = null;
    // if (typeof window !== 'undefined') {
    //     user = JSON.parse(window.localStorage.getItem("user"));
    // }

    useEffect(async () => {
        const token = window.localStorage.getItem('token');
        me(token);

        let user = null;
        if (typeof window !== 'undefined') {
            user = JSON.parse(window.localStorage.getItem("user"));
        }
        setUser(user);

        var response = await axios.get('http://localhost:5000/api/resources/user/' + user._id);
        setResources(response.data)
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
                    <div className='flex' onClick={() => logout()}>
                        <div className='flex ml-auto w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 transition cursor-pointer'>
                            <div className='w-full ml-auto my-auto text-center text-xl text-purple-500'>
                                <RocketLaunchIcon className='mb-1'/>
                            </div>
                        </div>
                    </div>

                </div>
                
                {
                    resources.map((resource, index) => {
                        return (
                            <Card key={index} data={resource} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}