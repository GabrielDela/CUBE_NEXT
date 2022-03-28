import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import "quill/dist/quill.snow.css";
import axios from "axios";

export default function create() {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");

    let user = null;
    if(typeof window !== 'undefined'){
        user = JSON.parse(window.localStorage.getItem("user"));
    }

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        // console.log(quill);
        // console.log("!");
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
                <textarea value={description} onChange={(value) => {
                    setDescription(value.target.value);
                }} id="description" maxLength="500" className="px-4 py-2 mt-6 mb-4" placeholder="Description ..." />
                <input className='mb-12' onChange={async () => {
                    let file = document.getElementById("image").files[0];
                    let base64 = await toBase64(file);
                    setImage(base64);
                }} id="image" type="file" accept="image/png, image/gif, image/jpeg" />
                <div id="editor" className="bg-white" ref={quillRef} />
                <div className="my-8">
                    <button onClick={save(quill, title, description, image, user)} className="bg-purple-cube px-6 py-2 rounded-full text-white font-medium hover:opacity-75 cursor-pointer shadow-xl">Créer</button>
                </div>
            </div>
        </Layout>
    );
}

function save(quill, title, description, image, user) {
    return () => {
        let content = quill.root.innerHTML;

        if (title !== "" && description !== "" && image !== "" && content !== "" && content != "<p><br></p>" && user !== null) {

            // post a resource
            axios.post("http://localhost:5000/api/resources", {
                title: title,
                description: description,
                image: image,
                content: content,
                user_id: user._id
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
        else {
            alert("Veuillez remplir tous les champs");
        }
    }
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});