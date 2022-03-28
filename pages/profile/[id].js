import Image from 'next/image'
import Card from '../../components/Card'
import Layout from '../../layouts/Layout'
import Link from 'next/link'

export default function favorites({ user }) {
    console.log(user);
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
                                    <p className='my-auto px-4 whitespace-nowrap text-xl cursor-pointer'>Gabriel DELAHAYE</p>
                                </div>
                                <p className='px-4 whitespace-nowrap text-gray-500'>@GabrielDela</p>
                                <p className='px-4 whitespace-nowrap text-gray-500'>104 amis</p>
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
            {/* <Card></Card> */}
        </Layout>
    )
}

export async function getServerSideProps(req) {
    var id = req.params.id;

    return {
        props: {
            user: id
        }
    };
}
