
import { Link } from '@mui/material'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { me } from '../utils/auth.service.js';

export default function Resources() {

    let [resources, setResources] = useState([])
    // let user = null;
    // if (typeof window !== 'undefined') {
    //     user = JSON.parse(window.localStorage.getItem("user"));
    // }

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);

        let user = null;
        if (typeof window !== 'undefined') {
            user = JSON.parse(window.localStorage.getItem("user"));
        }

        axios.get('http://localhost:5000/api/resources/user/' + user._id).then((x) => {
            setResources(x.data)
        });
        

    }, []);

    return (
        <Layout>
            <div className='flex flex-col mx-auto max-w-3xl'>
                <div className='flex px-4'>
                    <div className='text-xl font-semibold tracking-widest py-8'>
                        Vos ressources
                    </div>
                    <div className='my-auto ml-auto'>
                        <Link href="/resources/create">
                            <div className='bg-purple-cube px-6 py-2 rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl'>Créer</div>
                        </Link>
                    </div>
                </div>
                {
                    resources.map((resource) => {
                        return (
                            <Card key={resource._id} data={resource} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

// export async function getServerSideProps(req) {
//     var id = req.params.id;
//     var resources = [];

//     var response = await axios.get('http://localhost:5000/api/resources/user/' + id);
//     var data = response.data;


//     return {
//         props: {
//             resource: data
//         }
//     };
// }
