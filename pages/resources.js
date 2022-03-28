
import { Link } from '@mui/material'
import Image from 'next/image'
import Card from '../components/Card'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'

export default function resources() {
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

                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
        </Layout>
    )
}

// export async function getServerSideProps(req) {
//     var id = req.params.id;
//     var resources = [];

//     // var response = await axios.get('http://localhost:5000/api/resources');
//     // console.log('http://localhost:5000/api/resources/' + id);
//     // var data = response.data;
    
    
//     return {
//         props: {
//             resource: data
//         }
//     };
// }
