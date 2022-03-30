import Image from 'next/image'
import Layout from '../../layouts/Layout'
import { isAuth, me } from '../../../utils/auth.service.js';
import { getUserResources, test } from '../../../utils/resource.service.js';
import { useEffect, useState } from "react";
import axios from "axios";

export default function profile({ userProps, resourcesData }) {
    let [resources, setResources] = useState(resourcesData);
    let [userData, setUserData] = useState(userProps);
    let [isMe, setIsMe] = useState(false);

    // useEffect(async () => {
    //     const token = window.localStorage.getItem('token');
    //     isAuth(token);
    //     let response = await me(token);
    //     let user = response.data.user;

    //     if (userData != null && userData._id === user._id) {
    //         setIsMe(true);
    //     }
    //     else if(userData == null) {
    //         setIsMe(true);
    //     }

    //     response = await getUserResources(user._id);
    //     setResources(response.data.resources);
    // }, []);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);
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
                                    <p className='my-auto px-4 whitespace-nowrap text-xl cursor-pointer'>user</p>
                                </div>
                                <p className='px-4 whitespace-nowrap text-gray-500'>@GabrielDela - {isMe ? 'yes' : 'no'}</p>
                                <p className='px-4 whitespace-nowrap text-gray-500'>104 amis</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex ml-auto w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 transition cursor-pointer'>
                            <div className='w-full ml-auto my-auto text-center text-xl text-purple-500'>
                                {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
                                <i className="fa fa-user-plus" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    {/* <div className='absolute top-6 flex w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 hover:rotate-360 transition cursor-pointer'>
                        <div className='w-full ml-auto my-auto text-center text-xl text-purple-500'>
                           
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </div>
                    </div> */}

                </div>


            </div>
            {/* <Card></Card> */}
        </Layout>
    )
}

// getServer
// export async function getServerSideProps(req) {
    // // get id in params
    // const id = req.query.id;

    // let user = null;
    // let resources = null;
    // if (id) {
    //     const responseUser = await axios.get(`http://localhost:5000/api/users/${id}`);
    //     user = responseUser.data;

    //     const responseRessources = await axios.get(`http://localhost:5000/api/resources/user?user_id=${id}`);
    //     resources = responseRessources.data;
    // }

    // return {
    //     props: {
    //         userProps: user,
    //         resourcesData: resources
    //     }
    // }
// }