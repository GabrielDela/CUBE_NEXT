import react from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Link from "next/link"
import Image from 'next/image'


export default function Card() {
    return (

        <div className='w-full'>
            <div className='flex flex-col bg-white w-full sm:max-w-xl lg:max-w-3xl mx-auto rounded-lg shadow-2xl my-4'>
                <div className='image-container relative w-full h-72'>
                    <Image src="/img/background-login.jpg" layout="fill" className='rounded-lg object-cover image' />
                    <div className='moving-component relative flex ml-auto mr-4 mt-4 w-12 h-12 bg-white rounded-full text-center hover:bg-gray-200 hover:rotate-360 transition hover:transform-gpu cursor-pointer'>
                        <div className='w-full my-auto text-center text-xl text-purple-500'>
                            {/* <i class="fa fa-heart-o" aria-hidden="true"></i> */}
                            <i class="fa fa-heart" aria-hidden="true"></i> 
                        </div>
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
                            <div className='w-0 mb-auto mx-2 w-fit'>
                                <div className="flex">
                                    <p className='my-auto px-4 whitespace-nowrap cursor-pointer hover:underline hover:text-grey transition'>Gabriel DELAHAYE</p>
                                </div>
                                <p className='px-4 whitespace-nowrap text-xs text-gray-500 cursor-pointer hover:underline hover:text-grey transition'>@GabrielDela</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-base tracking-widest  mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex pt-6'>
                        <p className='text-lg font-medium tracking-widest mr-auto text-xs font-semibold mt-auto'>10/05/2022</p>
                        <Link href={"/"}>
                            <p className="text-lg font-medium tracking-widest ml-auto text-xs font-semibold mt-auto hover:underline hover:text-purple-cube transition cursor-pointer">> Voir plus</p>
                        </Link>
                    </div>
                </div>

                <hr className="mt-2"/>
                <div className="flex justify-around m-5">
                    <div className="flex">
                        <p>5</p> <MessageOutlinedIcon className="mx-2"></MessageOutlinedIcon>
                    </div>
                    <div className="flex">
                        <p>10</p> <ShareOutlinedIcon className="mx-2"></ShareOutlinedIcon>
                    </div>
                    <div className="flex">
                        <p>128</p> <ThumbUpOutlinedIcon className="mx-2"></ThumbUpOutlinedIcon>
                    </div>
                </div>
            </div>
        </div>

    )
}