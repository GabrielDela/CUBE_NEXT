import Layout from '../../layouts/Layout'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

export default function create(props) {
    const [index, setIndex] = useState(1);

    const [categories, setCategories] = useState(props.categories);
    const [types, setTypes] = useState(props.types);

    const [resource, setResource] = useState(
        {
            title: null,
            description: null,
            category_id: null,
            type_id: null,
            contents: [],
        }
    );

    var component;

    switch (index) {
        case 1:
            component = pageOne(setIndex, categories, types, resource, setResource);
            break;
        case 2:
            component = pageTwo(setIndex, resource, setResource);
            break;
        case 3:
            component = pageThree(setIndex);
            break;
        case 4:
            component = pageFour(setIndex);
            break;
    }

    return (
        <Layout>
            <div className='flex h-full flex-col mx-auto max-w-3xl'>
                {
                    component
                }
            </div>
        </Layout>
    )
}

function pageOne(setIndex, categories, types, resource, setResource) {
    var component = (
        <div className='flex h-full w-full mb-4 lg:w-2/3 mx-auto'>
            <div className='flex w-full flex-col justify-center mx-4'>
                <div key="" className='text-xl font-semibold tracking-widest pt-8'>
                    Création d'une ressource
                </div>
                <span className='tracking-widest py-4 pb-20'>Besoin d'aide ? suivez notre tutoriel <Link>ici</Link>.</span>
                <div className='relative w-full'>
                    <select id="category_id" className='hover:bg-gray-200 transition w-full outline-none focus:outline-none text-xl px-6 py-2 shadow-xl rounded-full appearance-none'>
                        <option value="" key="categories" disabled>Catégorie</option>
                        {
                            categories.map(e => {
                                return <option value={e._id} key={e._id}>{e.name}</option>
                            })
                        }
                    </select>
                    <div className="relative ml-auto w-fit text-right -top-9 -left-4"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
                </div>

                <div className='relative w-full'>
                    <select id="type_id" className='hover:bg-gray-200 transition w-full outline-none focus:outline-none text-xl px-6 py-2 shadow-xl rounded-full appearance-none'>
                        <option value="" key="types" disabled>Type</option>
                        {
                            types.map(e => {
                                return <option value={e._id} key={e._id}>{e.name}</option>
                            })
                        }
                    </select>
                    <div className="relative ml-auto w-fit text-right -top-9 -left-4"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
                </div>

                <div onClick={
                    () => {
                        var temp = resource;
                        temp.category_id = document.getElementById('category_id').value;
                        temp.type_id = document.getElementById('type_id').value;

                        if (temp.category_id != "" && temp.type_id != "") {
                            setResource(temp);
                            setIndex(2);
                        }
                        else {
                            alert("Veuillez renseigner toute les informations demandées.")
                        }
                    }
                } className='transition w-full text-xl text-center bg-purple-cube text-white my-12 mb-36 hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Suivant
                </div>
            </div>
        </div>
    );

    return component;
}

function pageTwo(setIndex, resource, setResource) {
    var component = (
        <div className='flex h-full w-full mb-4 lg:w-2/3 mx-auto'>
            <div className='flex w-full flex-col justify-center mx-4'>
                <div className='text-xl font-semibold tracking-widest pt-8'>
                    Gestion de contenu
                </div>
                <span className='tracking-widest py-4 pb-20'>Besoin d'aide ? suivez notre tutoriel <Link>ici</Link>.</span>
                {
                    resource.contents.map(e => {
                        return (
                            <div key={e._id} className='w-full h-12 mb-6'>
                                <div className='flex justify-between mb-4'>
                                    <div type='text' className='w-11/12 my-auto transition hover:bg-gray-200 cursor-pointer flex bg-white outline-none focus:outline-none text-xl shadow-xl rounded-full appearance-none'>
                                        <div className='overflow-hidden whitespace-nowrap h-8 ml-6 my-2'>Texte - Il était une fois</div>
                                        <div className='m-auto mr-6'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                                    </div>
                                    <div className='flex flex-col w-1/12'>
                                        <div className='text-xl mx-auto cursor-pointer transition hover:opacity-50'><i className="fa fa-caret-up" aria-hidden="true"></i></div>
                                        <div className='text-xl mx-auto cursor-pointer transition hover:opacity-50'><i className="fa fa-caret-down" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

                <div className='flex w-14 h-14 transition hover:opacity-75 cursor-pointer font-thin bg-purple-cube text-white p-2 rounded-full mx-auto my-4'>
                    <div onClick={() => {
                        addContent(resource, setResource)
                        setResource(resource);
                        setIndex(4);
                    }} className='m-auto'><AddIcon></AddIcon></div>
                </div>

                <div onClick={() => setIndex(3)} className='transition w-full text-xl text-center bg-purple-cube text-white mt-6 mb-6 hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Suivant
                </div>

                <div onClick={
                    () => {
                        var temp = resource;
                        temp.category_id = null;
                        temp.type_id = null;
                        setResource(temp);
                        setIndex(1);
                    }
                } className='transition w-full text-xl text-center bg-transparent border border-2 border-purple-cube text-purple-cube mb-12 mb-36 hover:text-white hover:bg-purple-cube hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Retour
                </div>
            </div>
        </div>
    );

    return component;
}

function pageThree(setIndex) {
    var component = (
        <div className='flex h-full w-full mb-4 lg:w-2/3 mx-auto'>
            <div className='flex w-full flex-col justify-center mx-4'>
                <div className='text-xl font-semibold tracking-widest pt-8'>
                    Publication
                </div>
                <span className='tracking-widest py-4 pb-20'>Besoin d'aide ? suivez notre tutoriel <Link>ici</Link>.</span>

                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="text" placeholder="Titre" aria-label="Titre" />
                </div>
                <div className="flex justify-between mb-4 border-b border-purple-cube py-2 mb-10">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="text" placeholder="Description" aria-label="Description" />
                </div>

                {/* <div className='relative w-full'>
                    <select className='hover:bg-gray-200 transition w-full outline-none focus:outline-none text-xl px-6 py-2 shadow-xl rounded-full appearance-none'>
                        <option value="">Catégorie</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                    <div className="relative ml-auto w-fit text-right -top-9 -left-4"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
                </div> */}

                <div className='w-full h-12 mb-6'>
                    <div className='flex justify-between mb-4'>
                        <div type='text' className='w-full my-auto transition hover:bg-gray-200 cursor-pointer flex bg-white outline-none focus:outline-none text-xl shadow-xl rounded-full appearance-none'>
                            <div className='overflow-hidden whitespace-nowrap h-8 ml-6 my-2'>Texte - Il était une fois (max 7</div>
                            <div className='m-auto mr-6'><i className="fa fa-download" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>

                <div onClick={() => alert('FINI')} className='transition w-full text-xl text-center bg-purple-cube text-white mt-6 mb-6 hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Publier
                </div>

                <div onClick={() => setIndex(2)} className='transition w-full text-xl text-center bg-transparent border border-2 border-purple-cube text-purple-cube mb-12 mb-36 hover:text-white hover:bg-purple-cube hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Retour
                </div>
            </div>
        </div>
    );

    return component;
}
function pageFour(setIndex) {
    var component = (
        <div className='flex h-full w-full mb-4 lg:w-2/3 mx-auto'>
            <div className='flex w-full flex-col justify-center mx-4'>
                <div className='text-xl font-semibold tracking-widest pt-8'>
                    Édition d'un contenu
                </div>
                <span className='tracking-widest py-4 pb-20'>Besoin d'aide ? suivez notre tutoriel <Link>ici</Link>.</span>

                <div className='relative w-full'>
                    <select id="category_id" className='hover:bg-gray-200 transition w-full outline-none focus:outline-none text-xl px-6 py-2 shadow-xl rounded-full appearance-none'>
                        <option value="text" key="text" selected>Texte</option>
                        <option value="image" key="image">Image</option>
                        <option value="link" key="link">Lien</option>
                    </select>
                    <div className="relative ml-auto w-fit text-right -top-9 -left-4"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
                </div>

                {/* <div className='flex w-14 h-14 transition hover:opacity-75 cursor-pointer font-thin bg-purple-cube text-white p-2 rounded-full mx-auto my-4'>
                    <div onClick={() => {
                        addContent(resource, setResource)
                        setResource(resource);
                        setIndex(4);
                    }} className='m-auto'><AddIcon></AddIcon></div>
                </div> */}

                <div onClick={() => setIndex(2)} className='transition w-full text-xl text-center bg-purple-cube text-white mt-6 mb-6 hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Valider
                </div>

                <div onClick={
                    () => {
                        // var temp = resource;
                        // temp.category_id = null;
                        // temp.type_id = null;
                        // setResource(temp);
                        // setIndex(1);
                    }
                } className='transition w-full text-xl text-center bg-transparent border border-2 border-purple-cube text-purple-cube mb-12 mb-36 hover:text-white hover:bg-purple-cube hover:opacity-75 cursor-pointer px-6 py-2 shadow-xl rounded-full appearance-none'>
                    Supprimer
                </div>
            </div>
        </div>
    );

    return component;
}

export async function getStaticProps() {
    const categories = await axios.get('http://localhost:5000/api/categories');
    const types = await axios.get('http://localhost:5000/api/types');

    return {
        props: {
            categories: categories.data,
            types: types.data,
        }
    }
}

function addContent(resource, setResource) {
    var content = {
        type: "text",
        value: "Lorem ipsum dolor si amet",
    };

    var temp = resource;
    temp.contents.push(content);

    setResource(temp);

    console.log(resource)
}