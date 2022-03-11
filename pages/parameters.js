
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Friend from '../components/Friend';
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
