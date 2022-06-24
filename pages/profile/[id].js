import Image from 'next/image'
import Layout from '../../layouts/Layout'
import { me } from '../../utils/auth.service.js';
import { getUserResources } from '../../utils/resource.service.js';
import { getUser } from '../../utils/user.service.js';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../../components/Card'


export default function Profile({userId}) {
    let [resources, setResources] = useState([]);
    let [userData, setUserData] = useState(null);

    //a faire dans un getServerSideProps
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);

        let user = null;
        if (typeof window !== 'undefined') {
            user = getUser(userId)
        }
        setUserData(user);

        var response = getUserResources(user._id);
        setResources(response);
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
                                    <p className='my-auto px-4 whitespace-nowrap text-xl cursor-pointer'>{ userData != null ? userData.firstname + " " + userData.lastname : '' }</p> 
                                </div>
                                <p className='px-4 whitespace-nowrap text-gray-500'>{ userData != null ? userData.tag : '' }</p>
                                <p className='px-4 whitespace-nowrap text-gray-500'>22 amis</p>
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
            {
                resources.map((resource) => {
                    console.log(resource);  
                    return (
                        <Card key={resource._id} data={resource} />
                    )
                })
            }
        </Layout>
    )
}

// getServer
export async function getServerSideProps(req) {
    // get id in params
    // const id = req.query.id;

    // let user = null;
    // let resources = null;
    // if (id) {
    //     const responseUser = await axios.get(`http://localhost:5000/api/users/${id}`);
    //     user = responseUser.data;

    //     const responseRessources = await axios.get(`http://localhost:5000/api/resources/user?user_id=${id}`);
    //     resources = responseRessources.data;
    // }


    // let user = await getUser(userId)
    // let resource = await getUserResources(user._id); 

    return {
        props :
        {
            userId: req.query.id
        } 
    }
}