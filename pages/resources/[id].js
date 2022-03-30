import Image from 'next/image'
import Card from '../../components/Card'
import Layout from '../../layouts/Layout'
import Link from 'next/link'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
import { me } from '../../utils/auth.service';

// URL from util
import URL from '../../utils/url.js';
const BASE_URL = URL;

export default function resource({ resource, user }) {

    let date = resource != null ? new Date(resource.created_at) : new Date();
    var formatedDay = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var formatedMonth = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var formatedDate = formatedDay + "/" + formatedMonth + "/" + date.getFullYear();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);
        
        createElementFromHTML(resource.content);
    });

    return (
        <Layout>
            <div className='w-full'>
                <div className='flex flex-col w-full sm:max-w-xl lg:max-w-3xl mx-auto rounded-lg'>
                    <div className='image-container relative w-full h-72'>
                        <img src={BASE_URL + 'images/' + resource.image} layout="fill" className='rounded-b-lg object-cover image w-full h-72 object-cover' />
                    </div>
                    <div className='bg-white mt-4 rounded'>
                        <h1 className='my-4 mx-6 text-center text-3xl'>{resource.title}</h1>
                        <h4 className='my-2 mx-10 text-center text-1xl text-gray-800'>{resource.description}</h4>
                        <p className='my-10 px-4' id="content">
                        </p>
                        <div className="flex justify-between mb-10">
                            <p className='ml-16'>{user.firstname + " " + user.lastname}</p>
                            <p className='mr-16'>{formatedDate}</p>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export async function getServerSideProps(req) {
    var id = req.params.id;
    var resources = [];

    var responseRessource = await axios.get('http://localhost:5000/api/resources/' + id);
    var responseUser = await axios.get('http://localhost:5000/api/users/' + responseRessource.data.user_id);

    return {
        props: {
            resource: responseRessource.data,
            user: responseUser.data,
        }
    };
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    document.getElementById('content').appendChild(div);
    // return div.firstChild;
}