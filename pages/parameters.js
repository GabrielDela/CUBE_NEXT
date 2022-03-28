import Image from 'next/image'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from '@mui/material';

export default function friends() {
    return (
        <Layout>
            <div className='h-full w-full flex flex-col mx-auto max-w-3xl'>
                <div className='h-full w-full flex flex-col px-4 justify-between'>
                    <div className='text-xl font-semibold tracking-widest py-8 px-4'>
                        Paramètres
                    </div>
                    <div>
                        <div className='mb-7'>
                            <div className='sm:flex justify-between'>
                                    <input class="appearance-none border border-black rounded-full w-full md:w-2/5 sm:mx-5 py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Nom"/>
                                    <input class="appearance-none border border-black rounded-full w-full md:w-2/5 sm:mx-5 py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Prénom"/>
                            </div>
                            <div >
                                <Link href="/" className='flex'>
                                    <div className='bg-purple-cube md:ml-auto px-6 py-2 md:mx-5 inline-block rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl'>Changer de pseudo</div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <input class="shadow appearance-none border border-red-500 rounded-full w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="old password"/>
                            <input class="shadow appearance-none border border-red-500 rounded-full w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="new password"/>
                            <input class="shadow appearance-none border border-red-500 rounded-full w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="repeat new password"/>
                            <Link href="/" className='flex'>
                                <div className='bg-purple-cube ml-5 px-6 py-2 rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl'>Changer de mot de passe</div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col mb-16'>
                        <Link className='text-teal-700 cursor-pointer'>
                            Récupérer mes informations
                        </Link>
                        <Link className='text-red-600 cursor-pointer'>
                            Supprimer le compte
                        </Link>
                    </div>
                </div>


            </div>
        </Layout>
    )
}