import { createReactEditorJS } from 'react-editor-js'

import EditorJs from "react-editor-js";
import CheckList from "@editorjs/checklist";
// import CodeBox from "@bomdi/codebox";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
// import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Header from "@editorjs/header"

// import API from "../api/image" // Your server url

const CustomEditor = ({ handleInstance, data, imageArray, ...props }) => {
    const EDITOR_JS_TOOLS = {
        embed: Embed,
        header: Header,
        list: List,
        // codeBox: CodeBox,
        linkTool: LinkTool,
        // image: {
        //     class: Image,
        //     config: {
        //         uploader: {
        //             uploadByFile(file) {
        //                 let formData = new FormData();
        //                 formData.append("images", file);
        //                 // send image to server
        //                 return API.imageUpload(formData).then((res) => {
        //                     // get the uploaded image path, pushing image path to image array
        //                     imageArray.push(res.data.data)
        //                     return {
        //                         success: 1,
        //                         file: {
        //                             url: res.data.data
        //                         }
        //                     }
        //                 })
        //             }
        //         }
        //     }
        // },
        quote: Quote,
        checklist: CheckList,
        delimiter: Delimiter,
        inlineCode: InlineCode,
        simpleImage: SimpleImage
    }

    const ReactEditorJS = createReactEditorJS();

    // Editor.js This will show block editor in component
    // pass EDITOR_JS_TOOLS in tools props to configure tools with editor.js
    return <ReactEditorJS {...props} onInitialize={(instance) => handleInstance(instance)}
        tools={EDITOR_JS_TOOLS} data={data}
        placeholder={`Write from here...`}
    />
}

// Return the CustomEditor to use by other components.                    

export default CustomEditor