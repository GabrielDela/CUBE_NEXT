import react from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Link from "next/link"

export default function Card() {
    return (
        
        <div className='w-full'>
        <div className='flex flex-col bg-gray-100 w-full sm:max-w-xl lg:max-w-3xl mx-auto rounded-lg shadow-2xl my-4'>
          <img src="/img/background-login.jpg" className='w-full h-40 rounded-lg object-cover' />
            <div className='m-2'>
                <div className='flex'>
                <img src="/img/background-login.jpg" className='w-16 h-16 rounded-full' />
                <div className="flex flex-col">
                    <p className='px-4 text-lg font-medium tracking-widest'>Gabriel DELAHAYE</p>
                    <p className='px-4 text-lg font-medium tracking-widest'>Cuisine</p>
                </div>
                <p className='px-4 text-lg font-medium tracking-widest ml-auto'>10/05/2022</p>
                </div>
                <p className='px-4 text-lg font-medium tracking-widest'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href={"/"}>
                    <p className="ml-auto w-fit mx-10 cursor-pointer hover:underline hover:text-grey transition">> Voir plus</p>
                </Link>
            </div>
            <hr/>
            <div className="flex justify-around m-5">
                <div className="flex">
                    <p>5</p> <MessageOutlinedIcon className="mx-2"></MessageOutlinedIcon>
                </div>
                <div className="flex">
                    <p>10</p> <ShareOutlinedIcon  className="mx-2"></ShareOutlinedIcon>
                </div>
                <div className="flex">
                    <p>128</p> <ThumbUpOutlinedIcon  className="mx-2"></ThumbUpOutlinedIcon>
                </div>            
            </div>
        </div>
      </div>
    
        )
  }