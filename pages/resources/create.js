import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import "quill/dist/quill.snow.css";
import axios from "axios";
// KeyboardArrowDownIcon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { me } from "../../utils/auth.service";

var tempImage = [];

export default function create(props) {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [formData, setFormData] = useState(null);

    let [categories, setCategories] = useState(props.categories);
    let [category, setCategory] = useState("");
    let [type, setType] = useState("");
    let [types, setTypes] = useState(props.types);

    let user = null;
    if (typeof window !== 'undefined') {
        user = JSON.parse(window.localStorage.getItem("user"));
    }

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        me(token);
        
        if (quill) {
            quill.getModule('toolbar').addHandler('image', imageHandler);
        }
    }, [quill]);

    const isQuillEmpty = (quill) => {
        if ((quill.getContents()['ops'] || []).length !== 1) {
            return false
        }

        return quill.getText().trim().length === 0
    }

    // const deltaToHTML = (delta) => {
    //     var tempQuill = new userQuill(document.createElement('div'));
    //     tempQuill.setContents(delta);
    //     return tempQuill.root.innerHTML;
    // }

    const sanitize = (url, protocols) => {
        var anchor = document.createElement('a');
        anchor.href = url;

        var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
        return protocols.indexOf(protocol) > -1;
    }

    // do upload
    const uploadToServer = async (file) => {
        var formData = new FormData();
        formData.append("image", file);

        let response = await axios.post("http://localhost:5000/api/resources/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        insertToEditor("http://localhost:5000/api/images/" + response.data.image);
    }

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            uploadToServer(file);
        };
    };

    const insertToEditor = (url) => {
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', url);
    };

    const save = (quill, title, description, image, user) => {
        return async () => {
            if (isQuillEmpty(quill)) {
                alert('Vous ne pouvez pas poster une resource vide !');
                return false;
            }

            var html = quill.root.innerHTML;

            if (title !== "" && description !== "" && formData !== "" && html !== "" && html != "<p><br></p>" && user !== null && category !== "" && type !== "") {
                let imageURL = await axios.post("http://localhost:5000/api/resources/upload", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                axios.post("http://localhost:5000/api/resources", {
                    title: title,
                    description: description,
                    image: imageURL.data.image,
                    content: html,
                    user_id: user._id,
                    category_id: category,
                    type_id: type
                }).then(res => {
                    window.location.href = "/resources";
                }).catch(err => {
                    console.log(err);
                });
            }
            else {
                alert("Veuillez remplir tous les champs");
            }
        }
    }

    const prepareDownload = (file, setFormData) => new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append("image", file);
        setFormData(formData);
    });


    return (
        <Layout>
            <div className='flex flex-col mx-auto max-w-3xl'>
                <div className='text-xl font-semibold tracking-widest py-8 px-4'>
                    Création d'une ressource
                </div>
                <div className="flex justify-between mb-4 border-b border-purple-cube py-2">
                    <input value={title} onChange={(value) => {
                        setTitle(value.target.value);
                    }} className="appearance-none bg-transparent border-none w-full text-gray-700 px-4 focus:outline-none" type="text" placeholder="Titre" aria-label="Titre" />
                </div>
                <div className='relative w-full mt-6'>
                    <select onChange={(value) => {
                        setCategory(value.target.value);
                    }} id="category_id" className='hover:bg-gray-200 transition w-full outline-none focus:outline-none text-xl px-6 py-2 shadow-xl rounded-full appearance-none'>
                        <option value="" key="categories">Catégorie</option>
                        {
                            categories.map(e => {
                                return <option value={e._id} key={e._id}>{e.name}</option>
                            })
                        }
                    </select>
                    <div className="relative ml-auto w-fit text-right -top-9 -left-4"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
                </div>

                <div className='relative w-full'>
                    <select onChange={(value) => {
                        setType(value.target.value);
                    }} id="type_id" className='hover:bg-gray-200 transition w-full outline-none focus:outline-none text-xl px-6 py-2 shadow-xl rounded-full appearance-none'>
                        <option value="" key="types">Type</option>
                        {
                            types.map(e => {
                                return <option value={e._id} key={e._id}>{e.name}</option>
                            })
                        }
                    </select>
                    <div className="relative ml-auto w-fit text-right -top-9 -left-4"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
                </div>
                <textarea value={description} onChange={(value) => {
                    setDescription(value.target.value);
                }} id="description" maxLength="500" className="px-4 py-2 mt-6 mb-4" placeholder="Description ..." />
                <input className='mb-12' onChange={async () => {
                    let file = document.getElementById("image").files[0];
                    await prepareDownload(file, setFormData);
                }} id="image" type="file" accept="image/png, image/gif, image/jpeg" />
                <div id="editor" className="bg-white" ref={quillRef} />
                <div className="my-8">
                    <button onClick={save(quill, title, description, formData, user, category, type)} className="bg-purple-cube px-6 py-2 rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl">Créer</button>
                </div>
            </div>
        </Layout>
    );
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