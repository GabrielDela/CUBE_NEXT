import react, { useState, useEffect } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Link from "next/link";
import Image from 'next/image';
import { getUser } from '../utils/user.service.js'
import { addFavorite, removeFavorite, getNbComments } from '../utils/resource.service.js'
import { css } from "@emotion/react";

import URL from '../utils/url.js';
const BASE_URL = URL;

export default function Card({ data }) {
    let [me, setMe] = useState(null);
    let [isFavorite, setIsFavorite] = useState(false);
    let [user, setUser] = useState(null);
    let [nbComment, setNbComment] = useState(0);
    let date = data != null ? new Date(data.created_at) : new Date();

    useEffect(async () => {
        if (data != null) {
            user = await getUser(data.user_id);
            setUser(user);

            console.log("user", user);
            
            let count = await getNbComments(data._id);
            setNbComment(count);

            let me = null;
            if (typeof window !== 'undefined') {
                me = JSON.parse(window.localStorage.getItem("user"));
                me = await getUser(me._id);
                setMe(me);

                let favorites = me != null ? me.favorites : [];

                let temp = favorites.find(favorite => favorite == data._id);
                if (temp != null) {
                    setIsFavorite(true);
                }
            }
        }
    }, []);


    var formatedDay = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var formatedMonth = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var formatedDate = formatedDay + "/" + formatedMonth + "/" + date.getFullYear();

    const myLoader = ({ src }) => {
        return BASE_URL + 'images/' + data.image;
    }

    return (
        <div className='w-full'>
            <div className='flex flex-col bg-white w-full sm:max-w-xl lg:max-w-3xl mx-auto rounded-lg shadow-2xl my-4'>
                <div className='image-container relative w-full h-72'>
                    {
                        data != null ?
                            <Image unoptimized={true} loader={myLoader} src={BASE_URL + 'images/' + data.image} layout="fill" className='rounded-lg image h-72 w-full' />
                            :
                            <Image src="/img/background-login.jpg" layout="fill" className='rounded-lg image h-72 w-full' />
                    }
                    {/* <img src={data != null ? data.image : "/img/background-login.jpg"} layout="fill" className='rounded-lg object-cover image' /> */}
                    <div className='moving-component relative flex ml-auto mr-4 mt-4 w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 hover:rotate-360 transition hover:transform-gpu cursor-pointer'>
                        {
                            isFavorite ?
                                <div onClick={() => { removeFavorite(me._id, data._id), setIsFavorite(false) }} className='w-full my-auto text-center text-xl text-purple-500'>
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </div>
                                :
                                <div onClick={() => { addFavorite(me._id, data._id), setIsFavorite(true) }} className='w-full my-auto text-center text-xl text-gray-400'>
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </div>
                        }
                        {/* <div onClick={() => { addFavorite(me._id, data._id) }} className={'w-full my-auto text-center text-xl ' + (isFavorite ? 'text-purple-500' : 'text-gray-400')}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div> */}
                    </div>
                </div>
                <div className='m-4 lg:mx-8'>
                    <div className='flex'>
                        <div>
                            <div className='image-container h-12 w-12'>
                                <Image src="/img/background-login.jpg" layout="fill" className='rounded-full image h-24 w-24' />
                            </div>
                        </div>
                        <div>
                            <Link href={"/profile/" + (user != null ? user._id : null)}>
                                <div className='w-0 mb-auto mx-2 w-fit'>
                                    <div className="flex">
                                        <p className='my-auto px-4 whitespace-nowrap cursor-pointer hover:underline hover:text-grey transition'>{user != null ? user.firstname + " " + user.lastname : ''}</p>
                                    </div>
                                    <p className='px-4 whitespace-nowrap text-xs text-gray-500 cursor-pointer hover:underline hover:text-grey transition'>{user != null ? user.tag : ''}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <p className='text-base tracking-widest  mt-4'>
                        {data != null ? data.description : 'Lorem ipsum dolor si amet'}
                    </p>
                    <div className='flex pt-6'>
                        <p className='text-lg font-medium tracking-widest mr-auto text-xs font-semibold mt-auto'>{formatedDate}</p>
                        <Link href={"/resources/" + (data != null ? data._id : null)}>
                            <p className="text-lg font-medium tracking-widest ml-auto text-xs font-semibold mt-auto hover:underline hover:text-purple-cube transition cursor-pointer">&gt; Voir plus</p>
                        </Link>
                    </div>
                </div>

                <hr className="mt-2" />
                <div className="flex justify-around m-5">
                    <div className="flex">
                        <p>{nbComment}</p> <MessageOutlinedIcon className="mx-2"></MessageOutlinedIcon>
                    </div>
                    <div className="flex">
                        <p>{data != null ? data.share : 0}</p> <ShareOutlinedIcon className="mx-2"></ShareOutlinedIcon>
                    </div>
                    <div className="flex">
                        <p>{data != null ? data.likes : 0}</p> <ThumbUpOutlinedIcon className="mx-2"></ThumbUpOutlinedIcon>
                    </div>
                </div>
            </div>
        </div >
    )
}