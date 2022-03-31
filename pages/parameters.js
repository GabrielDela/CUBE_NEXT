import Image from 'next/image'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from '@mui/material';
import { useEffect } from "react";
import { me } from '../utils/auth.service.js';

export default function parameters() {

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);
    }, []);

    return (
        <Layout>
            <div className='h-full w-full flex flex-col mx-auto max-w-3xl'>
                <div className='h-full w-full flex flex-col px-4 justify-between'>
                    <div className='text-xl font-semibold tracking-widest py-8 px-4'>
                        Paramètres
                    </div>
                    <div>
                        <div className='mb-7'>
                            <p className='text-xl font-semibold mb-4'>Informations utilisateurs</p>
                            <div className='sm:flex justify-between'>
                                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="text" placeholder="Nom" />
                                </div>
                                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="text" placeholder="Prénom" />
                                </div>
                            </div>
                            <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="text" placeholder="Biographie" />
                            </div>
                            <div className='py-6'>
                                <div className='bg-purple-cube md:ml-auto px-6 py-2 md:mx-5 inline-block rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl'>Valider les modifiactions</div>
                            </div>
                        </div>
                        <div>
                            <p className='text-xl font-semibold mb-4'>Gestion de mot de passe</p>
                            
                                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="password" placeholder="Ancien MDP" />
                                </div>
                                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="password" placeholder="Nouveau MDP" />
                                </div>
                                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="password" placeholder="Comfirmation MDP" />
                                </div>
                            <div className="flex py-6">
                                <div className='bg-purple-cube px-6 py-2 rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl'>Changer de mot de passe</div>
                            </div>
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